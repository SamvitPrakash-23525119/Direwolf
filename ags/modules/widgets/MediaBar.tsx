import { Gtk } from "ags/gtk4"
import Mpris from "gi://AstalMpris"
import { createState, createBinding, createEffect } from "gnim"

export default function MediaBar() {
  const [title, setTitle] = createState("")
  const [artist, setArtist] = createState("")
  const [playback, setPlayback] = createState("")
  const [available, setAvailable] = createState(false)

  const mpris = Mpris.get_default()

  createEffect(() => {
    setAvailable(false)
    const players = createBinding(mpris, "players")
    const arr = players()

    arr.forEach((player: Mpris) => {
      if (player.identity === "Spotify") {
        const title = createBinding(player, "title")
        setTitle(title())
        const artist = createBinding(player, "artist")
        setArtist(artist())
        const playing = createBinding(player, "playbackStatus")
        if (playing() == 0) setPlayback("media-playback-pause-symbolic")
        else if (playing() == 1 || playing() == 2)
          setPlayback("media-playback-start-symbolic")
        setAvailable(true)
      }
    })
  })

  return (
    <box $type="start" class={"media-bar"} visible={available((t) => t)}>
      <image class={"icon"} iconName={"emblem-music-symbolic"} />
      <label class={"media-title"} label={title((t) => t)} />
      {/*<label class={"media-seperator"} label={"•"} />*/}
      <label class={"media-artist"} label={artist((t) => "•    " + t)} />

      <button class={"media-button"}>
        <image
          class={"icon"}
          iconName={"go-previous-symbolic"}
          pixelSize={10}
        />
      </button>

      <button class={"media-button"}>
        <image class={"icon"} iconName={playback((t) => t)} pixelSize={10} />
      </button>

      <button class={"media-button"}>
        <image class={"icon"} iconName={"go-next-symbolic"} pixelSize={10} />
      </button>
    </box>
  )
}
