import { Astal } from "ags/gtk4"

import Clock from "../widgets/Clock"

export default function TrayBar() {
  return (
    <window
      class={"tray-window"}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={Astal.WindowAnchor.TOP}
      visible
    >
      <box class={"tray-bar"}>
        <image class={"icon"} iconName={"network-wireless-100-symbolic"} />
        <image class={"icon"} iconName={"bluetooth-symbolic"} />
        <image class={"icon"} iconName={"audio-volume-high-symbolic"} />
        {/*<image class={"icon"} iconName={"battery-symbolic"} />*/}
        <image class={"icon"} iconName={"application-menu-symbolic"} />
      </box>
    </window>
  )
}
