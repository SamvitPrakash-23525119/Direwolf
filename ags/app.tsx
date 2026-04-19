import app from "ags/gtk4/app"

import css from "./styles/dist/main.css"
import TrayBar from "./modules/tray_bar/TrayBar"
import { NetworkMgr } from "./services/network-manager"

app.start({
  css: css,
  instanceName: "DireWolf",
  main() {
    console.log("Started AGS...")

    return <TrayBar />
  },
})
