import { Astal, Gtk } from "ags/gtk4"
import { createBinding, For } from "gnim"

import HyprlandUtils from "../../utilities/hyprland"
import getWorkspaceGroup from "../../utilities/workspaces"
import toRoman from "../../utilities/to_numerals"

export default function Bar() {
  const hyprUtil = HyprlandUtils.getInstance()
  const hypr = hyprUtil.getHypr()

  const focusedWorkspace = createBinding(hypr, "focusedWorkspace")

  const visibleIds = focusedWorkspace.as((focused) => {
    const currentId = focused?.id ?? 1
    return getWorkspaceGroup(currentId, 5)
  })

  return (
    <window
      class={"top-bar-window"}
      anchor={
        Astal.WindowAnchor.TOP |
        Astal.WindowAnchor.RIGHT |
        Astal.WindowAnchor.LEFT
      }
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      layer={Astal.Layer.TOP}
      visible
    >
      <box hexpand>
        <box class={"media-bar"} halign={Gtk.Align.START} hexpand>
          <image class={"icon"} iconName={"emblem-music-symbolic"} />
          <label class={"media-label"} label={"DireWolf - The Wolf Is Loose"} />
        </box>

        <box class={"workspace-bar"} halign={Gtk.Align.CENTER} hexpand>
          <For each={visibleIds}>
            {(id) => (
              <button
                class={focusedWorkspace.as((focused) =>
                  focused?.id === id
                    ? "workspace-button-active"
                    : "workspace-button",
                )}
                onClicked={() => hypr.dispatch("workspace", `${id}`)}
              >
                <label label={toRoman(id)} />
              </button>
            )}
          </For>
        </box>

        <box class={"tray-bar"} halign={Gtk.Align.END} hexpand>
          <image class={"icon"} iconName={"network-wireless-100-symbolic"} />
          <image class={"icon"} iconName={"bluetooth-symbolic"} />
          <image class={"icon"} iconName={"audio-volume-high-symbolic"} />
          {/*<image class={"icon"} iconName={"battery-symbolic"} />*/}
          <image class={"icon"} iconName={"application-menu-symbolic"} />
        </box>
      </box>
    </window>
  )
}
