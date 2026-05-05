import HyprlandService from "../../services/share/HyprlandService"
import getWorkspaceGroup from "../../utilities/workspaces"
import toRoman from "../../utilities/to_numerals"
import { createBinding, For } from "gnim"

export default function WorkspaceBar() {
  const hypr = HyprlandService.get_default().getHypr()

  const focusedWorkspace = createBinding(hypr, "focusedWorkspace")

  const visibleIds = focusedWorkspace.as((focused) => {
    const currentId = focused?.id ?? 1
    return getWorkspaceGroup(currentId, 5)
  })

  return (
    <box $type="center" class={"workspace-bar"}>
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
  )
}
