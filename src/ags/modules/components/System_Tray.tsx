export default function SystemTray(){
    return (
        <box 
            $type='end'
            spacing={8} 
            class={"system-tray"}
        >
            <image iconName={'network-wireless-signal-excellent-symbolic'} class={"icon"} />
            <image iconName={'bluetooth-symbolic'} class={"icon"} />
            <image iconName={'audio-volume-high-symbolic'} class={"icon"} />
            <image iconName={'view-more-horizontal-symbolic'} class={"icon"} />
        </box>
    )
}