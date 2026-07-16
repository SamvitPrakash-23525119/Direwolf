import Notifd from "gi://AstalNotifd"

export default class NotifdService {
    static instance: NotifdService;
    static notifd: Notifd.Notifd;

    private constructor() {
        NotifdService.notifd = Notifd.get_default();
    }

    static get_default() {
        if (!NotifdService.instance) NotifdService.instance = new NotifdService();
        return NotifdService.instance;
    }

    public getNotifd() {
        return NotifdService.notifd;
    }

}