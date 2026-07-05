import {ICON_SIZE} from '../../constants/icons';

export default function Time(){
    return (
        <box class={"top-bar"} spacing={8}>
            <image iconName={'preferences-system-time-symbolic'} class={"icon"} pixelSize={ICON_SIZE}/>
            <label label={'17:32 | 2 Jul'} class={'time-label small nandinagari'}/>
        </box>
    )   
}