import app from "ags/gtk4/app"
import css from "./styles/dist/main.css"
import Bar from "./modules/widgets/Bar"
import MediaPlayers from "./modules/widgets/Media_Players"
import Notifications from "./modules/widgets/Notifications"
import AudioDisplay from "./modules/widgets/Audio_Display"
import CommandRegistry from "./services/command_registry/Command_Registry"
import { registerMediaCommands } from "./command_registrars/media/MediaCommandsRegistrars"
import NotifdService from "./services/shared_libraries/NotifdService"
import { createBinding, createEffect } from "gnim"

const registry = CommandRegistry.get_default()

registerMediaCommands(registry);

app.start({
	css: css,
	instanceName: "Direwolf",
	iconTheme: "Adwaita",
	cursorTheme: "Breeze",
	requestHandler: (request, response) => {
		const [command, ...args] = request
		response(registry.execute({ command, args }));

	},
	main() {
		console.log("Started AGS...")

		const notifd = NotifdService.get_default().getNotifd();

		// for (const i in notifd) console.log(i);
		
		createEffect(()=>{
			const notifications = createBinding(notifd, "notifications");
			
			// for(const i in notifications()[0]) console.log(i);

			// console.log('New Volley')
			// for(const i in notifications()){
			// 	console.log('=========================================================');
			// 	console.log(notifications()[i].app_name);
			// 	console.log(notifications()[i].summary);
			// 	console.log(notifications()[i].body);
			// 	console.log(notifications()[i].get_time());
			// }

			// console.log('=========================================================');
		})
		


		return (
			<>
				<Bar />
				<MediaPlayers />
				<AudioDisplay />
				<Notifications />
			</>
		)
	},
})
