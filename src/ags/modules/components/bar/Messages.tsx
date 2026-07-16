import NotificationService from "../../../services/notifications/NotificationService";
import {ICON_SIZE} from '../../../constants/icons';

export default function Messages(){
    const notificationService = NotificationService.get_default();

    return (
        <box class={"top-bar messages-bar"}>
            <button  class={'messages-button'} onClicked={() => notificationService.modal_toggle()}>
                <image iconName={'mail-unread-symbolic'} class={"icon messages-icon"} pixelSize={ICON_SIZE+2}/>
            </button>
        </box>
    )   
}