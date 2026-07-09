import type Mpris from "gi://AstalMpris"
import MprisService from "../../services/shared_libraries/MprisService"
import MediaPlayerService from "../../services/media/MediaPlayerService";
import Pango from "gi://Pango"
import Gtk from "gi://Gtk?version=4.0";
import { ICON_SIZE } from "../../constants/icons"
import { createBinding, createEffect, createState } from "gnim";

export default function MediaPill(){
    const [title, setTitle] = createState('');
    const [playback, setPlayback] = createState(false);
    const [coverArt, setCoverArt] = createState('');
    const [play_next, setPlay_next] = createState<(() => void) | null>(null);
    const [play_prev, setPlay_prev] = createState<(() => void) | null>(null);
    const [play_pause, setPlay_pause] = createState<(() => void) | null>(null);
    const [player, setPlayer] = createState<Mpris.Player | null>(null);

    const mpris = MprisService.get_default().getMpris();
    const mediaPlayerService = MediaPlayerService.get_default();

    const player_count = createBinding(mediaPlayerService, "player_count");
    
    createEffect(() => {
        const players = createBinding(mpris, "players");
        const playerIndex = createBinding(mediaPlayerService, "player_index");
        const player = players()[playerIndex()];
        
        if(!player) return;
        
        createEffect(() => {
            if(!player) return;

            const title = createBinding(player, 'title');
            const artist = createBinding(player, 'artist');
            const playback = createBinding(player, 'playback_status');
            const coverArt = createBinding(player, 'cover_art').as((art) => art ? art : '/home/_c3rberus/GitHub/Direwolf/assets/placeholders/media/paper-craft-art-musical-note.jpg');

            setTitle(title() + " - " + artist());
            setPlayback(playback() == 0 ? false : true);
            setCoverArt(coverArt());
            setPlayer(player);

            const playNext =  () => {
                player?.next();
            }
            

            const playPrev =  () => {
                player?.previous();
            }
            const playPause =  () => {
                player?.play_pause();
            }

            setPlay_next(() => playNext);
            setPlay_prev(() => playPrev);
            setPlay_pause(() => playPause);
        });

    })

    
    return (
        <box
            visible={player_count.as((index) => index != 0)}
            spacing={10}
            class={"top-bar media-pill"}
        >
            <image 
                file={coverArt((t) => t)} 
                class={'media-album-cover'}
                pixelSize={28}
                overflow={Gtk.Overflow.HIDDEN}
            />
            
            <label 
                label={title((t) => t)} 
                class={'media-label small nandinagari'} 
                ellipsize={Pango.EllipsizeMode.END} 
                hexpand={false} 
                maxWidthChars={16}
                tooltipText={title((t) => t)}
            />

            <box>
                <button class={'media-control-button'} onClicked={() => play_prev()?.()} visible={player((p) => p?.can_go_previous ?? false)}>
                    <image iconName={'media-skip-backward-symbolic'} class={'icon media-icon'} pixelSize={ICON_SIZE-3}/>
                </button>

                <button class={'media-control-button'} onClicked={() => play_pause()?.()} visible={player((p) => (p?.can_play && p?.can_pause) ?? false)}>
                    <image iconName={playback((p) => !p ? 'media-playback-pause-symbolic' : 'media-playback-start-symbolic')} class={'icon media-icon'} pixelSize={ICON_SIZE-3}/>
                </button>

                <button class={'media-control-button'} onClicked={() => play_next()?.()} visible={player((p) => p?.can_go_next ?? false)}>
                    <image iconName={'media-skip-forward-symbolic'} class={'icon media-icon'} pixelSize={ICON_SIZE-3}/>
                </button>
            </box>

        </box>
    )

}