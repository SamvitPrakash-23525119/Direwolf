import GoObject from "gi://GObject"
import NotifdService from "../shared_libraries/NotifdService";

export default class NotificationService extends GoObject.Object {
    static instance: NotificationService | null = null;
    static notifd = NotifdService.get_default().getNotifd();

    static {
        GoObject.registerClass({
            Signals: {

            },

            Properties: {
                'modal_open': GoObject.ParamSpec.boolean(
                    "modal_open",
                    "Modal Open",
                    "Whether the notification modal is open or not.",
                    GoObject.ParamFlags.READWRITE,
                    false,
                ),
                
                'notification_count': GoObject.ParamSpec.int(
                    "notification_count",
                    "Notification Count",
                    "The number of notifications currently present.",
                    GoObject.ParamFlags.READWRITE,
                    0,
                    900,
                    0,
                ),

                'unseen_notifications': GoObject.ParamSpec.boolean(
                    "unseen_notifications",
                    "Unseen Notifications",
                    "Whether there are unseen notifications or not.",
                    GoObject.ParamFlags.READWRITE,
                    false,
                ),

                'notifications_available': GoObject.ParamSpec.boolean(
                    "notifications_available",
                    "Notifications Available",
                    "Whether there are notifications available or not.",
                    GoObject.ParamFlags.READWRITE,
                    false,
                ),

            },
        }, this)
    }

    private _open: boolean = false;
    private _notification_count: number = 0;
    private _unseen_notifications: boolean = false;
    private _notifications_available: boolean = false;

    public constructor() {
        super();

        NotificationService.notifd.connect("items-changed", () => {
            let count = NotificationService.notifd.notifications.length
            this.notification_count = count;

            if(count > 0) this.notifications_available = true;
            else {
                this.notifications_available = false;
                this.modal_open = false;
            }

        });

    }

    static get_default(): NotificationService {
        if (!this.instance) {
            this.instance = new NotificationService();
        }

        return this.instance;
    }

    public get modal_open(): boolean {
        return this._open;
    }
    
    public set modal_open(value: boolean) {
        if(this._open !== value) {
            this._open = value;
            this.notify("modal_open");
        }
    }

    public modal_toggle(): void {
        this.modal_open = !this.modal_open;

        if(this._unseen_notifications && this._open) this.unseen_notifications = false;
    }

    public get notification_count(): number {
        return this._notification_count;
    }

    public set notification_count(value: number) {
        if(this._notification_count < value) this.unseen_notifications = true;


        if(this._notification_count !== value) {
            this._notification_count = value;
            this.notify("notification_count");
        }
    }

    public get unseen_notifications(): boolean {
        return this._unseen_notifications;
    }

    public set unseen_notifications(value: boolean) {
        if(this._unseen_notifications !== value) {
            this._unseen_notifications = value;
            this.notify("unseen_notifications");
        }
    }

    public get notifications_available(): boolean {
        return this._notifications_available;
    }

    public set notifications_available(value: boolean) {
        if(this._notifications_available !== value) {
            this._notifications_available = value;
            this.notify("notifications_available");
        }
    }

}