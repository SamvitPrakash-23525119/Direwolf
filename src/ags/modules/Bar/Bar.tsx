import WorkspaceBar from "../widgets/WorkspaceBar"
import MediaBar from "../widgets/MediaBar"
import TrayBar from "../widgets/TrayBar"
import { Astal } from "ags/gtk4"

type BarProps = {
  setMediaCard: (mediaCardState: boolean) => void
}

export default function Bar({ setMediaCard }: BarProps) {
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
        <MediaBar setMediaCard={setMediaCard} />
        <WorkspaceBar />
        <TrayBar />
      </centerbox>
    </window>
  )
}
