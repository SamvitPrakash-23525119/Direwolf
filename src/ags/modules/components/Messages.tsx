import {ICON_SIZE} from '../../constants/icons';

export default function Messages(){
    return (
        <box class={"top-bar messages-bar"}>
            <button  class={'messages-button'}>
                <image iconName={'mail-unread-symbolic'} class={"icon messages-icon"} pixelSize={ICON_SIZE+2}/>
            </button>
        </box>
    )   
}