import app from "ags/gtk4/app"
import css from "./styles/dist/main.css"
import Bar from "./modules/widgets/Bar"
import MediaPlayers from "./modules/widgets/Media_Players"
import AudioDisplay from "./modules/widgets/Audio_Display"
import CommandRegistry from "./services/command_registry/Command_Registry"
import { registerMediaCommands } from "./command_registrars/media/MediaCommandsRegistrars"

import { createBinding, createEffect } from 'gnim';
import TrayService from "./services/shared_libraries/TrayService";

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
		const tray = TrayService.get_default().getTray();

		// for(const i in tray.itemsModel) console.log(i);

		// console.log('===========================================');
		// console.log(tray.items_model);

		
		const items = createBinding(tray, 'items');
		
		createEffect(()=>{
			for(const i in items()[0]?.gicon) console.log(i);
			
			for(var i = 0; i < items().length; i++) {
				console.log('===========================================');
				console.log('Tray Item: ' + i);
				print("Title:", items()[i].title);
				print("Icon Name:", items()[i].icon_name);
				print("GIcon:", items()[i].gicon);
				print("Icon Pixbuf:", items()[i].icon_pixbuf);
				print("Theme Path:", items()[i].icon_theme_path);
				print("Status:", items()[i].status);
				print("ID:", items()[i].id);
				print("Category:", items()[i].category);
				print(items()[i].gicon.constructor.name);
			}
			console.log('===========================================');
		});

		return (
			<>
				<Bar />
				<MediaPlayers />
				<AudioDisplay />
			</>
		)
	},
})
