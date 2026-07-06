import NmService from "../../services/shared_libraries/NmService";
import { ICON_SIZE } from "../../constants/icons";
import { createBinding } from "gnim";

export default function SystemTray(){
    const nm = NmService.get_default().getNm();

    const primary = createBinding(nm, 'primary');
    const wifi = createBinding(nm, 'wifi');

    const wifiIcon = createBinding(nm.wifi, 'icon_name');
    const wiredIcon = createBinding(nm.wired, 'icon_name');

    const networkIcon = primary.as((primary) => {
        switch(primary){
            case 0:
                return wifiIcon;

            case 1:
                return wiredIcon;

            case 2:
                return wifiIcon;

        }
    })

    const wifiSSID = wifi.as((wifi) => wifi.ssid)

    const networkSSID = primary.as((primary) => {
        switch(primary){
            case 0:
                return wifiSSID;

            case 1:
                return 'Ethernet';

            case 2:
                return wifiSSID;

        }
    })

    return (
        <box 
            spacing={8} 
            class={"top-bar system-tray-bar"}
        >
            <image 
                iconName={networkIcon()} 
                class={"icon"} 
                pixelSize={ICON_SIZE}
                tooltipText={networkSSID()}
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