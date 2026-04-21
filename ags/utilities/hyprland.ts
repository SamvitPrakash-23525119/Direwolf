import Hyprland from "gi://AstalHyprland"
import getWorkspaceGroup from "./workspaces"

export default class HyprlandUtils {
  private static instance: HyprlandUtils
  private hypr: Hyprland

  public static getInstance(): HyprlandUtils {
    if (!HyprlandUtils.instance) {
      HyprlandUtils.instance = new HyprlandUtils()
    }
    return HyprlandUtils.instance
  }

  private constructor() {
    this.hypr = Hyprland.get_default()
  }

  public getHypr(): Hyprland {
    return this.hypr
  }

  public dispatch(signal: string, n: number) {
    this.hypr.dispatch(signal, n)
  }
}
