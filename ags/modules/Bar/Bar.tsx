import { Astal } from "ags/gtk4"
import WorkspaceBar from "../widgets/WorkspaceBar"
import MediaBar from "../widgets/MediaBar"

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
        <MediaBar />

        <WorkspaceBar />

        <box $type="end" class={"tray-bar"}>
          <image class={"icon"} iconName={"network-wireless-10-symbolic"} />
          <image class={"icon"} iconName={"bluetooth-symbolic"} />
          <image class={"icon"} iconName={"audio-volume-high-symbolic"} />
          <image class={"icon"} iconName={"application-menu-symbolic"} />
        </box>
      </centerbox>
    </window>
  )
}
