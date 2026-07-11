import app from "ags/gtk4/app"
import css from "./styles/dist/main.css"
import Bar from "./modules/widgets/Bar"
import MediaPlayers from "./modules/widgets/Media_Players"
import AudioDisplay from "./modules/widgets/Audio_Display"
import CommandRegistry from "./services/command_registry/Command_Registry"

const commandRegistry = CommandRegistry.get_default()

app.start({
	css: css,
	instanceName: "Direwolf",
	iconTheme: "Adwaita",
	cursorTheme: "Breeze",
	requestHandler: (request, response) => {
		const [command, ...args] = request
		response(commandRegistry.execute({ command, args }));

	},
	main() {
		console.log("Started AGS...")

		return (
			<>
				<Bar />
				<MediaPlayers />
				<AudioDisplay />
			</>
		)
	},
})
