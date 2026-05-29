import NmService from "../../services/share/NmService"
import BluetoothService from "../../services/share/BluetoothService"
import type Bluetooth from "../../services/share/BluetoothService"
import WpctlService from "../../services/share/WpctlService"
import BatteryService from "../../services/share/BatteryService"
import { createEffect, createState, createBinding } from "gnim"

export default function TrayBar() {
  const [wifi_icon, set_wifi_icon] = createState("")
  const [bluetooth_icon, set_bluetooth_icon] = createState("")
  const [bluetooth_enabled, set_bluetooth_enabled] = createState(false)
  const [audio_icon, set_audio_icon] = createState("")
  const [battery_icon, set_battery_icon] = createState("")
  const [battery_percentage, set_battery_percentage] = createState(0)

  const nm = NmService.get_default().getNm()
  const bluetoothctl = BluetoothService.get_default().getBluetoothctl()
  const wpctl = WpctlService.get_default().getWpctl()
  const battery = BatteryService.get_default().getBattery()

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

  // Battery
  createEffect(() => {
    if (battery.is_present) {
      const icon = createBinding(battery, "icon_name")
      const percentage = createBinding(battery, "percentage")

      set_battery_icon(icon())
      set_battery_percentage(percentage())
    }
  })

  return (
    <box $type="end" class={"tray-bar"}>
      <image class={"icon"} iconName={wifi_icon((t) => t)} pixelSize={17} />

      <image
        visible={bluetooth_enabled((t) => t)}
        iconName={bluetooth_icon((t) => t)}
        class={"icon"}
        pixelSize={17}
      />

      <image class={"icon"} iconName={audio_icon((t) => t)} pixelSize={17} />

      <image class={"icon"} iconName={battery_icon((t) => t)} pixelSize={17} />
      <label
        class={"tray-battery-label"}
        label={battery_percentage((t) => (t * 100).toFixed(0) + "%")}
      />

      <image class={"icon"} iconName={"go-down-symbolic"} pixelSize={13} />
    </box>
  )
}
