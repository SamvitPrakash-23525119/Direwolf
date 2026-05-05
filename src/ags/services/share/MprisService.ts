import Mpris from "gi://AstalMpris"

export default class MprisService {
  static instance: MprisService
  static mpris: Mpris

  static get_default() {
    if (!MprisService.instance) MprisService.instance = new MprisService()
    return MprisService.instance
  }

  private constructor() {
    MprisService.mpris = Mpris.get_default()
  }

  public getMpris() {
    return MprisService.mpris
  }
}
