import {Astal} from "ags/gtk4"

import SystemTray from "../components/System_Tray"
import Workspaces from "../components/Workspaces"
import MediaPill from "../components/Media_Pill"
import Time from "../components/Time"
import Messages from "../components/Messages"

export default function Bar(){
    return (
        <window 
            visible 
            class={"."} //One of those things we don't touch and talk about. 
            anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
        >
            <centerbox hexpand class={"bar-content"}>
                <box $type='end'>
                    <Messages/>
                    <Time/>
                    <SystemTray/>
                </box>

                <Workspaces/>
                <MediaPill/>
            </centerbox>
        </window>
    )
}