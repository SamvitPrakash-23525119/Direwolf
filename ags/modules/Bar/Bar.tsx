import { Astal } from "ags/gtk4"
import WorkspaceBar from "../widgets/WorkspaceBar"
import MediaBar from "../widgets/MediaBar"
import TrayBar from "../widgets/TrayBar"

export default function Bar() {
	return (
		<window
			class={"top-bar-window"}
			anchor={
				Astal.WindowAnchor.TOP |
				Astal.WindowAnchor.RIGHT |
				Astal.WindowAnchor.LEFT
			}
			exclusivity={Astal.Exclusivity.EXCLUSIVE}
			visible
		>
			<centerbox hexpand>
				<MediaBar />
				<WorkspaceBar />
				<TrayBar />
			</centerbox>
		</window>
	)
}
