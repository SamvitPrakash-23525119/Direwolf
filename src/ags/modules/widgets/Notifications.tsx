import NotificationItem from "../components/notifications/Notification_Item"
import NotifdService from "../../services/shared_libraries/NotifdService"
import { ICON_SIZE } from "../../constants/icons"
import { Astal, Gtk } from "ags/gtk4"
import { createBinding, For } from "gnim";

export default function Notifications() {
    const notifd = NotifdService.get_default().getNotifd();

    const notifications = createBinding(notifd, "notifications");

    return (
        <window 
            visible
            class={'.'}
            widthRequest={400}
            // anchor={Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT}
            anchor={Astal.WindowAnchor.BOTTOM}
        >
            <box
                class={"top-bar notifications-box"}
                orientation={Gtk.Orientation.VERTICAL}
                spacing={0}
            >
                <centerbox
                    class={'notification-header'}
                >
                    <button $type="start">
                        <image icon_name={'go-previous-symbolic'} class={'icon notification-icon'} pixel_size={ICON_SIZE}/>
                    </button>

                    <box $type='end'>
                        <button>
                            <image icon_name={'notifications-disabled-symbolic'} class={'icon notification-icon'} pixel_size={ICON_SIZE}/>
                        </button>

                        <label 
                            label={"Notifications"} 
                            class={'p nandinagari notification-title'}

                        />
                    </box>
                    
                </centerbox>

                {/* <box class={'notification-separator'} heightRequest={0.1} widthRequest={400}/> */}

                <scrolledwindow
                    maxContentHeight={350}
                    heightRequest={350}
                    vscrollbarPolicy={Gtk.PolicyType.AUTOMATIC}
                    hscrollbarPolicy={Gtk.PolicyType.NEVER}
                    overlay_scrolling
                >
                    <box
                        hexpand
                        spacing={3}
                        orientation={Gtk.Orientation.VERTICAL}
                        class={"notification-items-container"}
                    >
                        <For each={notifications}>
                            {(notification) => (
                                <NotificationItem notification_item={notification}/>
                            )}
                        </For>  
                    </box>
                </scrolledwindow>
                

            </box>

        </window>
    )
}