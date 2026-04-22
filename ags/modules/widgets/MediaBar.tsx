import Mpris from "gi://AstalMpris"
import { createState, createBinding, createEffect } from "gnim"

export default function MediaBar() {
  const [title, setTitle] = createState("")
  const [artist, setArtist] = createState("")
  const [playbackSymbol, setPlaybackSymbol] = createState("")
  const [coverArt, setCoverArt] = createState("")
  const [playback, setPlayback] = createState(false)
  const [available, setAvailable] = createState(false)
  const [play_pause, setPlay_pause] = createState<(() => void) | null>(null)
  const [play_next, setPlay_next] = createState<(() => void) | null>(null)
  const [play_previous, setPlay_previous] = createState<(() => void) | null>(
    null,
  )

  const mpris = Mpris.get_default()

  createEffect(() => {
    setAvailable(false)
    const players = createBinding(mpris, "players")
    const arr = players()

    arr.forEach((player: Mpris) => {
      if (player.identity === "Spotify") {
        const title = createBinding(player, "title")
        const artist = createBinding(player, "artist")
        const playing = createBinding(player, "playbackStatus")
        const coverArt = createBinding(player, "cover_art")

        setTitle(title())
        setArtist(artist())
        setCoverArt(coverArt())

        if (playing() == 0) {
          setPlaybackSymbol("media-playback-pause-symbolic")
          setPlayback(true)
        } else if (playing() == 1 || playing() == 2) {
          setPlaybackSymbol("media-playback-start-symbolic")
          setPlayback(false)
        }

        const play_pause_method = () => {
          if (playback()) player.pause()
          else player.play()
        }

        const next_method = () => {
          player.next()
        }

        const previous_method = () => {
          player.previous()
        }

        setPlay_pause(() => play_pause_method)
        setPlay_next(() => next_method)
        setPlay_previous(() => previous_method)
        setAvailable(title() != "" ? true : false)
      }
    })
  })

  return (
    <box
      $type="start"
      class={"media-bar"}
      visible={available((t) => t)}
      width_request={100}
    >
      <image class={"cover-art"} file={coverArt((t) => t)} pixelSize={25} />

      <box class={"media-info"}>
        <label class={"media-title"} label={title((t) => t)} />
        <label class={"media-seperator"} label={"•"} />
        <label class={"media-artist"} label={artist((t) => t)} />
      </box>

      <button class={"media-button"} onClicked={() => play_previous()?.()}>
        <image
          class={"icon"}
          iconName={"go-previous-symbolic"}
          pixelSize={10}
        />
      </button>

      <button class={"media-button"} onClicked={() => play_pause()?.()}>
        <image
          class={"icon"}
          iconName={playbackSymbol((t) => t)}
          pixelSize={10}
        />
      </button>

      <button class={"media-button"} onClicked={() => play_next()?.()}>
        <image class={"icon"} iconName={"go-next-symbolic"} pixelSize={10} />
      </button>
    </box>
  )
}
