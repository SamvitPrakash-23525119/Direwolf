import app from "ags/gtk4/app"
import css from "./styles/dist/main.css"
import Bar from "./modules/Bar/Bar"
import MediaCard from "./modules/MediaCard/MediaCard"
import VolumeModal from "./modules/VolumeModal/VolumeModal"
import { createState } from "gnim"

app.start({
  css: css,
  instanceName: "Direwolf",
  iconTheme: "Adwaita",
  main() {
    const [mediaCard, setMediaCard] = createState(false)

    console.log("Started AGS...")

    return (
      <>
        <Bar setMediaCard={setMediaCard} />
        <MediaCard visible={mediaCard} />
        <VolumeModal />
      </>
    )
  },
})
