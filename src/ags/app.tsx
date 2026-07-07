import app from "ags/gtk4/app"
import css from "./styles/dist/main.css"
import Bar from "./modules/widgets/Bar"
import MprisService from "./services/shared_libraries/MprisService"
import { createBinding, createEffect } from "ags"

app.start({
	css: css,
	instanceName: "Direwolf",
	iconTheme: "Adwaita",
	main() {
		console.log("Started AGS...")

		const mpris = MprisService.get_default().getMpris();

		// for(const i in mpris) console.log(i);

		// console.log('+====================================================')

		// console.log(mpris.get_items_type);

		createEffect(() => {
			const players = createBinding(mpris, "players");

			for(const i in players()[0]) console.log(i);
			
			console.log('----------------------------------------')
			
			console.log(players()[0]?.identity);
			
			console.log('----------------------------------------')
		})

		return (
			<>
				<Bar />
			</>
		)
	},
})
