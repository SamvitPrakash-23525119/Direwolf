import app from "ags/gtk4/app"
import { Astal } from "ags/gtk4"
import Gdk from "gi://Gdk?version=4.0"

import css from './styles/dist/main.css'
import Clock from "./modules/widgets/Clock"

app.start({
    css: css,
    instanceName: "DireWolf",
    main() {
        console.log("Started AGS...");
        
        return(
            <window
                class={"testing-window"}
                anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.RIGHT}
                visible
            >
                <Clock className={"clock"} format={'%H:%M'} />
            </window>
        );
    },
})