import {Astal} from "ags/gtk4"

import SystemTray from "../components/System_Tray"

export default function Bar(){
    return (
        <window 
            visible 
            class={"bar"}
            anchor={Astal.WindowAnchor.TOP}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
        >
            <box hexpand spacing={8} class={"bar-content"}>
                <SystemTray/>
            </box>
        </window>
    )
}