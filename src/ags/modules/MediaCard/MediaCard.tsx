import AudioVisualizer from "../widgets/AudioVisualizer"
import MprisService from "../../services/share/MprisService"
import Pango from "gi://Pango"
import { Accessor, createEffect, createBinding, createState } from "gnim"
import { Astal, Gtk } from "ags/gtk4"

type MediaCardProps = {
  visible: Accessor<boolean>
}

export default function MediaCard({ visible }: MediaCardProps) {
  const [coverArt, setCoverArt] = createState("")
  const [title, setTitle] = createState("")
  const [artist, setArtist] = createState("")
  const [playbackSymbol, setPlaybackSymbol] = createState("")
  const [playback, setPlayback] = createState(false)
  const [position, setPosition] = createState(0)
  const [length, setLength] = createState(0)
  const [draggingValue, setDraggingValue] = createState(0)
  const [seek, setSeek] = createState<((position: number) => void) | null>(null)
  const [play_pause, setPlay_pause] = createState<(() => void) | null>(null)
  const [play_next, setPlay_next] = createState<(() => void) | null>(null)
  const [play_previous, setPlay_previous] = createState<(() => void) | null>(
    null,
  )

  const mpris = MprisService.get_default()

  createEffect(() => {
    const player = mpris.getPlayer()
    if (player) {
      const title = createBinding(player, "title")
      const artist = createBinding(player, "artist")
      const playing = createBinding(player, "playbackStatus")
      const coverArt = createBinding(player, "cover_art")
      const position = createBinding(player, "position")
      const length = createBinding(player, "length")

      setTitle(title())
      setArtist(artist())
      setCoverArt(coverArt())

      if (playing() == 0) {
        setPlaybackSymbol("media-playback-pause-symbolic")
        setPlayback(true)
      } else if (playing() == 1) {
        setPlaybackSymbol("media-playback-start-symbolic")
        setPlayback(false)
      } else {
        setPlaybackSymbol("media-playback-start-symbolic")
        setPlayback(false)
        setPosition(0)
        return
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

      setPosition(position())
      setLength(length())
      setSeek(() => (pos: number) => {
        player.set_position(pos)
      })
    }
  })

  return (
    <window
      class={"media-card-window"}
      anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT}
      visible={visible((t) => t)}
      widthRequest={320}
    >
      <box orientation={Gtk.Orientation.VERTICAL} class={"media-card-box"}>
        <image
          class={"media-card-cover-art"}
          file={coverArt((t) => t)}
          pixelSize={350}
        />

        <centerbox class={"media-card-info-box"}>
          <box $type="start" orientation={Gtk.Orientation.VERTICAL}>
            <label
              class={"media-card-title"}
              label={title((t) => t)}
              xalign={0}
              singleLineMode
              maxWidthChars={19}
              ellipsize={Pango.EllipsizeMode.END}
            />
            <label
              class={"media-card-artist"}
              label={artist((t) => t)}
              xalign={0}
            />
          </box>
        </centerbox>

        <AudioVisualizer
          className={"media-card-audio-visualizer"}
          gap={1}
          bars={150}
        />

        <centerbox>
          <box $type="center" class={"media-card-control-box"}>
            <button
              class={"media-button-large"}
              onClicked={() => play_previous()?.()}
            >
              <image
                class={"icon"}
                iconName={"go-previous-symbolic"}
                pixelSize={15}
              />
            </button>

            <button
              class={"media-button-large"}
              onClicked={() => play_pause()?.()}
            >
              <image
                class={"icon"}
                iconName={playbackSymbol((t) => t)}
                pixelSize={15}
              />
            </button>

            <button
              class={"media-button-large"}
              onClicked={() => play_next()?.()}
            >
              <image
                class={"icon"}
                iconName={"go-next-symbolic"}
                pixelSize={15}
              />
            </button>
          </box>
        </centerbox>
      </box>
    </window>
  )
}
