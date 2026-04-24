export default function TrayBar() {
	return (
		<box $type="end" class={"tray-bar"}>
			<image class={"icon"} iconName={"network-wireless-10-symbolic"} />
			<image class={"icon"} iconName={"bluetooth-symbolic"} />
			<image class={"icon"} iconName={"audio-volume-high-symbolic"} />
			<image class={"icon"} iconName={"application-menu-symbolic"} />
		</box>
	)
}
