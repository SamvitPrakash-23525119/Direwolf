import { ICON_SIZE } from "../../constants/icons"

export default function MediaPill(){
    return (
        <box
            $type='start'
            spacing={10}
            class={"top-bar media-pill"}
        >
            <image 
                file={'/home/_c3rberus/GitHub/Direwolf/assets/screenshots/desktop-before.png'} 
                class={'media-album-cover'}
                pixelSize={25}
            />
            
            <label label={'Stay and Decay'} class={'media-label small'}/>

            <box>
                <button class={'media-control-button'} >
                    <image iconName={'media-skip-backward-symbolic'} class={'icon media-icon'} pixelSize={ICON_SIZE-3}/>
                </button>

                <button class={'media-control-button'} >
                    <image iconName={'media-playback-start-symbolic'} class={'icon media-icon'} pixelSize={ICON_SIZE-3}/>
                </button>

                <button class={'media-control-button'} >
                    <image iconName={'media-skip-forward-symbolic'} class={'icon media-icon'} pixelSize={ICON_SIZE-3}/>
                </button>
            </box>

        </box>
    )

}