import app from "ags/gtk4/app"

import css from "./styles/dist/main.css"
import Bar from "./modules/Bar/Bar"

app.start({
  css: css,
  instanceName: "DireWolf",
  main() {
    console.log("Started AGS...")
    return <Bar />
  },
})
