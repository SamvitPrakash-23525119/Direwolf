import {Astal} from "ags/gtk4"

import SystemTray from "../components/System_Tray"
import Time from "../components/Time"
import Messages from "../components/Messages"
import Workspaces from "../components/Workspaces"
import MediaPill from "../components/Media_Pill"
import StartButton from "../components/Start_Button"

export default function Bar(){
    return (
        <window 
            visible 
            class={"."} //One of those things we don't touch and talk about. 
            anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
        >
            <centerbox hexpand class={"bar-content"}>
                <box $type='start'>
                    <StartButton/>
                    <MediaPill/>
                </box>

                <Workspaces/>

                <box $type='end'>
                    <Messages/>
                    <Time/>
                    <SystemTray/>
                </box>
            </centerbox>
        </window>
    )
}