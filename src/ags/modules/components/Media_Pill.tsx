import MprisService from "../../services/shared_libraries/MprisService"
import Pango from "gi://Pango"
import Gtk from "gi://Gtk?version=4.0";
import { ICON_SIZE } from "../../constants/icons"
import { createBinding, createEffect, createMemo, createState } from "gnim";

export default function MediaPill(){
    const [offset, setOffset] = createState(0);
    const [title, setTitle] = createState('');
    const [playback, setPlayback] = createState(false);
    const [coverArt, setCoverArt] = createState('');
    const [play_next, setPlay_next] = createState<(() => void) | null>(null);
    const [play_prev, setPlay_prev] = createState<(() => void) | null>(null);
    const [play_pause, setPlay_pause] = createState<(() => void) | null>(null);

    const mpris = MprisService.get_default().getMpris();

    
    createEffect(() => {
        const players = createBinding(mpris, "players");

        if(players().length === 0) return;

        createEffect(() => {
            // for(const i in players()[0]) {
                const title = createBinding(players()[0], 'title');
                const artist = createBinding(players()[0], 'artist');
                const playback = createBinding(players()[0], 'playback_status');
                const coverArt = createBinding(players()[0], 'cover_art');

                setTitle(title() + " - " + artist());
                setPlayback(playback());
                setCoverArt(coverArt());

                const playNext =  () => {
                    players()[0]?.next();
                }
                

                const playPrev =  () => {
                    players()[0]?.previous();
                }
                const playPause =  () => {
                    players()[0]?.play_pause();
                }

                setPlay_next(() => playNext);
                setPlay_prev(() => playPrev);
                setPlay_pause(() => playPause);


            // }
        });

    })

    
    return (
        <box
            spacing={10}
            class={"top-bar media-pill"}
            // widthRequest={270}
        >
            <image 
                file={coverArt((t) => t)} 
                class={'media-album-cover'}
                pixelSize={28}
                overflow={Gtk.Overflow.HIDDEN}
            />
            
            <label label={title((t) => t)} class={'media-label small'} ellipsize={Pango.EllipsizeMode.END} hexpand={false} maxWidthChars={16}/>

            <box>
                <button class={'media-control-button'} onClicked={() => play_prev()?.()}>
                    <image iconName={'media-skip-backward-symbolic'} class={'icon media-icon'} pixelSize={ICON_SIZE-3}/>
                </button>

                <button class={'media-control-button'} onClicked={() => play_pause()?.()}>
                    <image iconName={playback((p) => !p ? 'media-playback-pause-symbolic' : 'media-playback-start-symbolic')} class={'icon media-icon'} pixelSize={ICON_SIZE-3}/>
                </button>

                <button class={'media-control-button'} onClicked={() => play_next()?.()}>
                    <image iconName={'media-skip-forward-symbolic'} class={'icon media-icon'} pixelSize={ICON_SIZE-3}/>
                </button>
            </box>

        </box>
    )

}