import app from "ags/gtk4/app"
import css from "./styles/dist/main.css"
import Bar from "./modules/widgets/Bar"
import MediaPlayers from "./modules/widgets/Media_Players"

app.start({
	css: css,
	instanceName: "Direwolf",
	iconTheme: "Adwaita",
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
