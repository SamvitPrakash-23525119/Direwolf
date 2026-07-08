import MediaCard from "../components/Media_Card"
import {Astal} from "ags/gtk4"

export default function MediaPlayers(){
    return (
        <window
            visible
            class={'.'}
            // anchor={Astal.WindowAnchor.TOP}
            layer={Astal.Layer.BOTTOM}
            exclusivity={Astal.Exclusivity.NORMAL}
        >
            <MediaCard/>

        </window>
    )

}