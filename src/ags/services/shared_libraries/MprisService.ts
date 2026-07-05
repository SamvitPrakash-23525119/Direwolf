import Mpris from "gi://AstalMpris"
import { createState } from "gnim"

const [player, setPlayer] = createState<Mpris.Player | null>(null)

export default class MprisService {
  static instance: MprisService
  static mpris: any
  static player = player
  static setPlayer = setPlayer

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

  public setPlayer(player: Mpris.Player | null) {
    MprisService.setPlayer(player)
  }

  public getPlayer() {
    return MprisService.player()
  }
}
