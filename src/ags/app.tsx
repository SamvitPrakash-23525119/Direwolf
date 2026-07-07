import app from "ags/gtk4/app"
import css from "./styles/dist/main.css"
import Bar from "./modules/widgets/Bar"
import WpctlService from "./services/shared_libraries/WpctlService"
import { createBinding, createEffect } from "gnim"

app.start({
	css: css,
	instanceName: "Direwolf",
	iconTheme: "Adwaita",
	main() {
		console.log("Started AGS...")
		const wpctl = WpctlService.get_default().getWpctl();

		for (const i in wpctl.default_speaker) console.log(i);

		console.log('--------------------------');


		createEffect(() => {
			const defaultSpeaker = createBinding(wpctl, 'default_speaker');
			const volume = createBinding(defaultSpeaker(), 'volume');

			console.log(volume());

		})

		console.log('muted:' ,wpctl.default_speaker.mute);


		return (
			<>
				<Bar />
			</>
		)
	},
})
