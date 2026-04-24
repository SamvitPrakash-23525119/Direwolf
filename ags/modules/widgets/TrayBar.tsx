import Network from "gi://AstalNetwork"
import { createEffect, createState, createBinding } from "gnim"

export default function TrayBar() {
	const [wifi_icon, set_wifi_icon] = createState("")

	const nm = Network.get_default()

	createEffect(() => {
		const enabled = createBinding(nm.wifi, "enabled")
		const icon = createBinding(nm.wifi, "icon_name")

		if (enabled()) set_wifi_icon(icon())
		else set_wifi_icon("network-wireless-offline-symbolic")
	})

	return (
		<box $type="end" class={"tray-bar"}>
			<image class={"icon"} iconName={wifi_icon((t) => t)} pixelSize={20} />
			<image class={"icon"} iconName={"bluetooth-symbolic"} />
			<image class={"icon"} iconName={"audio-volume-high-symbolic"} />
			<image class={"icon"} iconName={"application-menu-symbolic"} />
		</box>
	)
}
