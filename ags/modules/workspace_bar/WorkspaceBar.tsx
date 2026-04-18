import { Astal } from "ags/gtk4"

import Clock from "../widgets/Clock"

export default function WorkspaceBar() {
  return (
    <window
      class={"workspace-bar"}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={Astal.WindowAnchor.TOP}
      visible
    >
      <box class={"workspace-right-bar"}>
        <Clock className={"clock"} format="%H:%M" />
        {/*<image iconName={"clock"} />*/}
      </box>
    </window>
  )
}
