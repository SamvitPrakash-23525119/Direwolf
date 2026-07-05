import {ICON_SIZE} from '../../constants/icons';

export default function Messages(){
    return (
        <box class={"top-bar messages-bar"}>
            <button  class={'messages-button'}>
                <image iconName={'mail-unread-symbolic'} class={"icon"} pixelSize={ICON_SIZE}/>
            </button>
        </box>
    )   
}