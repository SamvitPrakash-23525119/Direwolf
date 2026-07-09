import app from "ags/gtk4/app"
import css from "./styles/dist/main.css"
import Bar from "./modules/widgets/Bar"
import MediaPlayers from "./modules/widgets/Media_Players"
import MediaPlayerService from "./services/media/MediaPlayerService"

const mediaPlayerService = MediaPlayerService.get_default();

app.start({
	css: css,
	instanceName: "Direwolf",
	iconTheme: "Adwaita",
	requestHandler: (request, response) => {
		mediaPlayerService.modal_toggle();

		console.log("Request received:", request);
	},
	main() {
		console.log("Started AGS...")

		return (
			<>
				<Bar />
				<MediaPlayers />
			</>
		)
	},
})
