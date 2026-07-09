import MediaCard from "../components/Media_Card"
import MprisService from "../../services/shared_libraries/MprisService"
import type Mpris from "gi://AstalMpris"
import MediaPlayerService from "../../services/media/MediaPlayerService"
import {Astal} from "ags/gtk4"
import { createBinding, For, Accessor, createEffect } from "gnim";

export default function MediaPlayers(){
    const mpris = MprisService.get_default().getMpris();
    const mediaPlayerService = MediaPlayerService.get_default();

    const players = createBinding(mpris, "players") as Accessor<Mpris.Player[]>;
    const modalOpen = createBinding(mediaPlayerService, "modal_open");

    createEffect(() => {
        const players = createBinding(mpris, "players");
        if(players().length == 0) {
            mediaPlayerService.player_index = 0;
            mediaPlayerService.modal_open = false;
        }

        mediaPlayerService.player_count = players().length;
    });

    return (
        <window
            visible={modalOpen.as((open) => open)}
            class={'.'}
            // anchor={Astal.WindowAnchor.TOP}
            layer={Astal.Layer.TOP}
            exclusivity={Astal.Exclusivity.NORMAL}
        >
            
            <box
                spacing={25}
            >
                <For each={players}>
                    {(player, i) => (
                        <MediaCard player={player} index={i()}/>
                    )}
                </For>
            </box>
         

        </window>
    )
}