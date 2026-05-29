import WpctlService from "../../services/share/WpctlService"
import ProgressBar from "../widgets/ProgressBar"
import { Astal } from "ags/gtk4"
import { Gtk } from "ags/gtk4"
import { timeout, idle } from "ags/time"
import { createBinding, createEffect, createState } from "gnim"

const HIDE_DELAY = 1500
const REVEAL_ANIMATION_TIME = 250

const [windowVisible, setWindowVisible] = createState(false)
const [revealed, setRevealed] = createState(false)

let hideTimer: ReturnType<typeof timeout> | null = null
let invisibleTimer: ReturnType<typeof timeout> | null = null

function resetTimer(timer: ReturnType<typeof timeout> | null) {
  timer?.cancel()
  return null
}

function showVolumeModal() {
  hideTimer = resetTimer(hideTimer)
  invisibleTimer = resetTimer(invisibleTimer)

  setWindowVisible(true)

  idle(() => {
    setRevealed(true)
  })

  hideTimer = timeout(1500, () => {
    setRevealed(false)

    invisibleTimer = timeout(250, () => {
      setWindowVisible(false)
    })
  })
}

export default function VolumeModal() {
  const [volumeValue, setVolumeValue] = createState(0)
  const [volumeIcon, setVolumeIcon] = createState("")

  const wpctl = WpctlService.get_default().getWpctl()

  createEffect(() => {
    const volume = createBinding(wpctl.audio.default_speaker, "volume")
    const volume_icon = createBinding(
      wpctl.audio.default_speaker,
      "volume_icon",
    )
    setVolumeIcon(volume_icon())
    setVolumeValue(volume())

    showVolumeModal()
  })

  return (
    <window
      class={"volume-modal-window"}
      anchor={Astal.WindowAnchor.BOTTOM}
      visible={windowVisible((t) => t)}
    >
      <revealer
        transitionType={Gtk.RevealerTransitionType.CROSSFADE}
        transitionDuration={200}
        revealChild={revealed((t) => t)}
      >
        <box class={"volume-modal-box"}>
          <image
            class={"icon volume-icon"}
            iconName={volumeIcon((t) => t)}
            pixelSize={18}
          />
          <box class={"volume-progress-box"}>
            <ProgressBar value={volumeValue} width={150} height={4} max={1} />
          </box>
        </box>
      </revealer>
    </window>
  )
}
