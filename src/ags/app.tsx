import app from "ags/gtk4/app"
import css from "./styles/dist/main.css"
import Bar from "./modules/widgets/Bar"
import MediaPlayers from "./modules/widgets/Media_Players"
import AudioDisplay from "./modules/widgets/Audio_Display"
import MediaPlayerService from "./services/media/MediaPlayerService"
import WpctlService from "./services/shared_libraries/WpctlService"


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

		const wpctlService = WpctlService.get_default().getWpctl();

		for(const i in wpctlService.default_speaker) console.log(i);


		return (
			<>
				<Bar />
				<MediaPlayers />
				<AudioDisplay />
			</>
		)
	},
})
