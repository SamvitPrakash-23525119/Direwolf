import app from "ags/gtk4/app"
import css from "./styles/dist/main.css"
import Bar from "./modules/widgets/Bar"
import MediaPlayers from "./modules/widgets/Media_Players"
import Notifications from "./modules/widgets/Notifications"
import AudioDisplay from "./modules/widgets/Audio_Display"
import CommandRegistry from "./services/command_registry/Command_Registry"
import { registerMediaCommands } from "./command_registrars/media/MediaCommandsRegistrars"

import NotifdService from "./services/shared_libraries/NotifdService"
import { createEffect, createBinding } from "gnim"

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
		console.log("Started AGS...");

		const notifd = NotifdService.get_default().getNotifd();

		// for (const i in notifd) console.log(i);
		notifd.set_default_timeout(-1);
		console.log("Notifications: ", notifd.defaultTimeout);

		const notifications = createBinding(notifd, "notifications");

		createEffect(() => {
			for(var i = 0; i < notifications().length; i++) {
				// for (const key in notifications()[i]) console.log(key);
				const expire = createBinding(notifications()[i], "expire");

				createEffect(() => {
					console.log("Notification ", i, " will expire in ", expire(), "ms");

				});
			}
		});



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
