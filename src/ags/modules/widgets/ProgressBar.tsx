import Gtk from "gi://Gtk?version=4.0"
import type { Accessor } from "gnim"

type ProgressBarProps = {
  value: Accessor<number>
  max: number
  width: number
  height: number
}

export default function ProgressBar({
  value,
  max,
  width,
  height,
}: ProgressBarProps) {
  const fillWidth = value((v) => {
    const percent = Math.max(0, Math.min(v / max, 1))
    return Math.floor(percent * width)
  })

  return (
    <box
      class={"progress-bar"}
      widthRequest={width}
      heightRequest={height}
      hexpand={false}
      vexpand={false}
      halign={Gtk.Align.START}
      valign={Gtk.Align.CENTER}
      overflow={Gtk.Overflow.HIDDEN}
    >
      <box
        class={"progress-bar-fill"}
        widthRequest={fillWidth}
        heightRequest={height}
        hexpand={false}
        vexpand={false}
        halign={Gtk.Align.START}
        valign={Gtk.Align.FILL}
        overflow={Gtk.Overflow.HIDDEN}
      />
    </box>
  )
}
