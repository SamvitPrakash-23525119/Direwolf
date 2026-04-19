import { Astal, Gtk } from "ags/gtk4"
import { createBinding } from "gnim"

export default function Bar() {
  return (
    <window
      class={"top-bar-window"}
      anchor={
        Astal.WindowAnchor.TOP |
        Astal.WindowAnchor.RIGHT |
        Astal.WindowAnchor.LEFT
      }
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      layer={Astal.Layer.TOP}
      visible
    >
      <box hexpand>
        <box class={"media-bar"} halign={Gtk.Align.START} hexpand>
          <image class={"icon"} iconName={"emblem-music-symbolic"} />
          <label class={"media-label"} label={"DireWolf - The Wolf Is Loose"} />
        </box>

        <box class={"workspace-bar"} halign={Gtk.Align.BASELINE_CENTER} hexpand>
          <label class={"workspace-label"} label={"I"} />
          <label class={"workspace-label"} label={"II"} />
          <label class={"workspace-label"} label={"III"} />
          <label class={"workspace-label"} label={"IV"} />
          <label class={"workspace-label"} label={"IX"} />
        </box>

        <box class={"tray-bar"} halign={Gtk.Align.END} hexpand>
          <image class={"icon"} iconName={"network-wireless-100-symbolic"} />
          <image class={"icon"} iconName={"bluetooth-symbolic"} />
          <image class={"icon"} iconName={"audio-volume-high-symbolic"} />
          {/*<image class={"icon"} iconName={"battery-symbolic"} />*/}
          <image class={"icon"} iconName={"application-menu-symbolic"} />
        </box>
      </box>
    </window>
  )
}
