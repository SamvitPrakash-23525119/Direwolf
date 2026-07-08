import MprisService from "../../services/shared_libraries/MprisService";
import type Mpris from "gi://AstalMpris"
import Pango from "gi://Pango";
import Gtk from "gi://Gtk?version=4.0";
import { createBinding, createEffect, createState } from "gnim";
import { ICON_SIZE } from "../../constants/icons";

interface MediaCardProps {
    player?: Mpris.Player;
}

export default function MediaCard({ player }: MediaCardProps){
        const [title, setTitle] = createState('');
        const [artist, setArtist] = createState('');
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
    
                    setTitle(title());
                    setArtist(artist());
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
            class={'top-bar media-card-box'}
            orientation={Gtk.Orientation.VERTICAL}
            widthRequest={200}
            spacing={10}
        >
        
            <image 
                file={coverArt((t) => t)} 
                class={'media-card-album-cover'}
                pixelSize={200}
                overflow={Gtk.Overflow.HIDDEN}
                halign={Gtk.Align.CENTER}
            />
        
            
            <box
                orientation={Gtk.Orientation.VERTICAL}
            >
                <label 
                    label={title((t) => t)} 
                    class={'media-card-label-title nandinagari'} 
                    ellipsize={Pango.EllipsizeMode.END} 
                    hexpand={false} 
                    maxWidthChars={25}
                    halign={Gtk.Align.CENTER}
                />

                <label 
                    label={artist((a) => a)} 
                    class={'media-card-label-artist small nandinagari'} 
                    ellipsize={Pango.EllipsizeMode.END} 
                    hexpand={false} 
                    maxWidthChars={25}
                    halign={Gtk.Align.CENTER}
                />

            </box>

            <box
                halign={Gtk.Align.CENTER}
                spacing={10}
            >
                <button class={'media-card-control-button'} onClicked={() => play_prev()?.()}>
                    <image iconName={'media-skip-backward-symbolic'} class={'icon media-card-icon'} pixelSize={ICON_SIZE}/>
                </button>

                <button class={'media-card-control-button'} onClicked={() => play_pause()?.()}>
                    <image iconName={playback((p) => !p ? 'media-playback-pause-symbolic' : 'media-playback-start-symbolic')} class={'icon media-card-icon'} pixelSize={ICON_SIZE}/>
                </button>

                <button class={'media-card-control-button'} onClicked={() => play_next()?.()}>
                    <image iconName={'media-skip-forward-symbolic'} class={'icon media-card-icon'} pixelSize={ICON_SIZE}/>
                </button>
            </box>
            


        </box>
    )
}