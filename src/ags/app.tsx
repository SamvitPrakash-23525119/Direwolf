import app from "ags/gtk4/app"
import css from "./styles/dist/main.css"

app.start({
  css: css,
  instanceName: "Direwolf",
  iconTheme: "Adwaita",
  main() {
    console.log("Started AGS...")
  },
})
