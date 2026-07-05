import {Astal} from "ags/gtk4"

import SystemTray from "../components/System_Tray"
import Workspaces from "../components/Workspaces"
import MediaPill from "../components/Media_Pill"

export default function Bar(){
    return (
        <window 
            visible 
            class={"."} //One of those things we don't touch and talk about. 
            anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
        >
            <centerbox hexpand class={"bar-content"}>
                <SystemTray/>
                <Workspaces/>
                <MediaPill/>
            </centerbox>
        </window>
    )
}