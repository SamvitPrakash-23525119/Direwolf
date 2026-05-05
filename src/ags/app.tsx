import app from "ags/gtk4/app"
import Mpris from "gi://AstalMpris"
import Cava from "gi://AstalCava"
import { createEffect, createState, createBinding } from "gnim"
import css from "./styles/dist/main.css"
import Bar from "./modules/Bar/Bar"
import MediaCard from "./modules/MediaCard/MediaCard"

app.start({
  css: css,
  instanceName: "Direwolf",
  main() {
    const [mediaCard, setMediaCard] = createState(false)

    console.log("Started AGS...")

    return (
      <>
        <Bar setMediaCard={setMediaCard} />
        <MediaCard visible={mediaCard} />
      </>
    )
  },
})
