import GoObject from "gi://GObject"

export default class NotificationService extends GoObject.Object {
    static instance: NotificationService | null = null;

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

            },
        }, this)
    }

    private _open: boolean = false;

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
    }

}