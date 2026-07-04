import { ICON_SIZE } from "../../constants/icons";

export default function SystemTray(){
    return (
        <box 
            $type='end'
            spacing={8} 
            class={"top-bar"}
        >
            <image 
                iconName={'network-wireless-signal-excellent-symbolic'} 
                class={"icon"} 
                pixelSize={ICON_SIZE}
            />
            
            <image 
                iconName={'bluetooth-symbolic'} 
                class={"icon"} 
                pixelSize={ICON_SIZE}
            />
            
            <image 
                iconName={'audio-volume-high-symbolic'} 
                class={"icon"} 
                pixelSize={ICON_SIZE}
            />
            
            <image 
                iconName={'view-more-horizontal-symbolic'} 
                class={"icon"}
                pixelSize={ICON_SIZE} 
            />
        </box>
    )
}