import Network from "gi://AstalNetwork"
import Bluetooth from "gi://AstalBluetooth"
import Wp from "gi://AstalWp"
import { createEffect, createState, createBinding } from "gnim"

export default function TrayBar() {
	const [wifi_icon, set_wifi_icon] = createState("")
	const [bluetooth_icon, set_bluetooth_icon] = createState("")
	const [bluetooth_enabled, set_bluetooth_enabled] = createState(false)
	const [audio_icon, set_audio_icon] = createState("")

	const nm = Network.get_default()
	const bluetoothctl = Bluetooth.get_default()
	const wpctl = Wp.get_default()

	// Wifi
	createEffect(() => {
		const enabled = createBinding(nm.wifi, "enabled")
		const icon = createBinding(nm.wifi, "icon_name")

		if (enabled()) set_wifi_icon(icon())
		else set_wifi_icon("network-wireless-offline-symbolic")
	})

	// Bluetooth Enabled
	createEffect(() => {
		const enabled = createBinding(bluetoothctl, "is_powered")

		set_bluetooth_enabled(enabled())
	})

	// Bluetooth Connected
	createEffect(() => {
		const connected = createBinding(bluetoothctl, "is_connected")

		if (connected()) {
			const devices = bluetoothctl.devices
			devices.forEach((device: Bluetooth) => {
				if (device.connected) {
					set_bluetooth_icon(device.icon + "-symbolic")
				}
			})
		} else set_bluetooth_icon("bluetooth-symbolic")
	})

	// Audio
	createEffect(() => {
		const speaker = wpctl.audio.default_speaker
		if (speaker) {
			const volume_icon = createBinding(speaker, "volume_icon")

			set_audio_icon(volume_icon())
		}
	})

	return (
		<box $type="end" class={"tray-bar"}>
			<image class={"icon"} iconName={wifi_icon((t) => t)} pixelSize={19} />

			<image
				visible={bluetooth_enabled((t) => t)}
				iconName={bluetooth_icon((t) => t)}
				class={"icon"}
				pixelSize={19}
			/>

			<image class={"icon"} iconName={audio_icon((t) => t)} pixelSize={19} />

			<image
				class={"icon"}
				iconName={"application-menu-symbolic"}
				pixelSize={19}
			/>
		</box>
	)
}
