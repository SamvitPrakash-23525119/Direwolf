type MediaPlayerProps = {
  player: any
}

export default function MediaPill({ player }: MediaPlayerProps) {
  return (
    <box class={"media-bar"} spacing={8}>
      <label class={"media-app"} xalign={0} label={player.bind("identity")} />

      <label
        class={"media-title"}
        xalign={0}
        hexpand
        // truncate
        label={player.bind("title")}
      />

      <button class={"media-play-pause"} onClicked={() => player.play_pause()}>
        <image
          iconName={player.bind("playbackStatus").as((status: string) => {
            return status === "PLAYING"
              ? "media-playback-pause-symbolic"
              : "media-playback-start-symbolic"
          })}
        />
      </button>
    </box>
  )
}
