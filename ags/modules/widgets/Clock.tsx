import { createPoll } from 'ags/time'
import GLib from 'gi://GLib?version=2.0'

type props = {
    className: string,
    format?: string
}

export default function({ className, format } : props){
    const time = createPoll("", 1000, () =>{
        const currentTime = GLib.DateTime.new_now_local()
        return currentTime.format(format ?? '%H:%M:%S');
    })

    return(
        <label 
            label={time.as(t => t ?? "No Data")}
            class={className}
        />
    )
}