import Mpris from "gi://AstalMpris"
import { Astal } from "ags/gtk4"
import WorkspaceBar from "../widgets/WorkspaceBar"
import MediaBar from "../widgets/MediaBar"
import TrayBar from "../widgets/TrayBar"

type BarProps = {
	setMediaCard: (mediaCardState: boolean) => void
	setPlayer: (player: Mpris.Player | null) => void
}

export default function Bar({ setMediaCard, setPlayer }: BarProps) {
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
				<MediaBar setMediaCard={setMediaCard} setPlayer={setPlayer} />
				<WorkspaceBar />
				<TrayBar />
			</centerbox>
		</window>
	)
}
