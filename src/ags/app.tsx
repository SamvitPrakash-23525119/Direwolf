import app from "ags/gtk4/app"
import css from "./styles/dist/main.css"
import Bar from "./modules/widgets/Bar"
import MediaPlayers from "./modules/widgets/Media_Players"
import Notifications from "./modules/widgets/Notifications"
import AudioDisplay from "./modules/widgets/Audio_Display"
import CommandRegistry from "./services/command_registry/Command_Registry"
import { registerMediaCommands } from "./command_registrars/media/MediaCommandsRegistrars"

import NotifdService from "./services/shared_libraries/NotifdService"
import NotificationService from "./services/notifications/NotificationService"
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
		const notificationService = NotificationService.get_default();
		const notifdService = NotifdService.get_default().getNotifd();

		const dnd = createBinding(notifdService, "dont_disturb");

		createEffect(() => {
			console.log(dnd());
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
