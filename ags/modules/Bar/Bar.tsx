import { Astal } from "ags/gtk4"
import WorkspaceBar from "../widgets/WorkspaceBar"

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
      <centerbox hexpand>
        <box $type="start" class={"media-bar"}>
          <image class={"icon"} iconName={"emblem-music-symbolic"} />
          <label class={"media-label"} label={"DireWolf - The Wolf Is Loose"} />
        </box>

        <WorkspaceBar />

        <box $type="end" class={"tray-bar"}>
          <image class={"icon"} iconName={"network-wireless-100-symbolic"} />
          <image class={"icon"} iconName={"bluetooth-symbolic"} />
          <image class={"icon"} iconName={"audio-volume-high-symbolic"} />
          <image class={"icon"} iconName={"application-menu-symbolic"} />
        </box>
      </centerbox>
    </window>
  )
}
