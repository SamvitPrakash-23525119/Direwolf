import app from "ags/gtk4/app"
import { Astal } from "ags/gtk4"
import Gdk from "gi://Gdk?version=4.0"
import Gtk from "gi://Gtk?version=4.0"

import css from "./styles/dist/main.css"
import WorkspaceBar from "./modules/workspace_bar/WorkspaceBar"

app.start({
  css: css,
  instanceName: "DireWolf",
  main() {
    console.log("Started AGS...")

    return <WorkspaceBar />
  },
})
