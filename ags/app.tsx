import app from "ags/gtk4/app"
import Hyprland from "gi://AstalHyprland"

import css from "./styles/dist/main.css"
import Bar from "./modules/Bar/Bar"
import getWorkspaceGroup from "./utilities/workspaces"
import { createBinding, createEffect } from "gnim"

app.start({
  css: css,
  instanceName: "DireWolf",
  main() {
    console.log("Started AGS...")
    return <Bar />
  },
})
