import type Notifd from "gi://AstalNotifd"
import { ICON_SIZE } from "../../../constants/icons";
import { Gtk } from "ags/gtk4"
import { createBinding } from "ags";

interface NotificationItemProps {
    notification_item: Notifd.Notification
}

export default function NotificationItem({ notification_item }: NotificationItemProps) {
    const app_name = createBinding(notification_item, "app_name");
    const summary = createBinding(notification_item, "summary");
    const body = createBinding(notification_item, "body");
    const app_icon = createBinding(notification_item, "app_icon");

    console.log("Notification Item Rendered: ", app_name(), summary(), body(), app_icon());

    return (
        <box
            orientation={Gtk.Orientation.VERTICAL}
            class={'notification-item-container'}
        >
            <centerbox 
                class={"notification-item-header"} 
                orientation={Gtk.Orientation.HORIZONTAL}
                hexpand
            >
                <button
                    $type="start"
                    class={'notification-item-button'}
                >
                    <box 
                        spacing={10}
                        class={'notification-item-button-box'}
                        hexpand
                    >
                        <image 
                            icon_name={'media-record-symbolic'} 
                            pixelSize={ICON_SIZE} 
                        />
                        
                        <label 
                            hexpand 
                            halign={Gtk.Align.START}
                            label={summary()} 
                            class={'notification-item-label nandinagari'}
                        />

                    </box>
                </button>

                <image 
                    $type='end' 
                    icon_name={'window-close-symbolic'} 
                    class={'notification-item-icon'}
                    tooltipText={'Dismiss Notification'}
                    pixelSize={ICON_SIZE} 
                />

            </centerbox>

            <revealer
                revealChild
                transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}
                transitionDuration={200}
            >
                <box>
                    <label
                        wrap
                        hexpand
                        halign={Gtk.Align.START}
                        label={body() || summary()}
                        class={'small nandinagari notification-item-body'}
                    />
                </box>
            </revealer>
        </box>
    )
}