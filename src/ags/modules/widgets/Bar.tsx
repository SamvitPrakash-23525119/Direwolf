import {Astal} from "ags/gtk4"

import SystemTray from "../components/System_Tray"
import Workspaces from "../components/Workspaces"

export default function Bar(){
    return (
        <window 
            visible 
            class={"bar"}
            anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
        >
            <centerbox hexpand class={"bar-content"}>
                <SystemTray/>
                <Workspaces/>
            </centerbox>
        </window>
    )
}