import WpctlService from "../../services/shared_libraries/WpctlService"
import ProgressBar from "../components/Progress_Bar"
import { createBinding, createState } from "gnim";

export default function VolumeModal(){
    const [visible, setVisible] = createState(false);
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const wpctl = WpctlService.get_default().getWpctl();

    const defaultSpeaker = createBinding(wpctl, 'default_speaker');
    const volume = createBinding(defaultSpeaker(), 'volume');
    const icon = createBinding(defaultSpeaker(), 'volume_icon');

    const showModal = () => {
        setVisible(true);

        if (timeout !== null)
            clearTimeout(timeout);

        timeout = setTimeout(() => {
            setVisible(false);
            timeout = null;
        }, 1100);
    }

    defaultSpeaker().connect('notify::volume', () => {
        showModal();        
    });

    defaultSpeaker().connect('notify::mute', () => {
        showModal();
    });

    return (
        <window
            visible={visible}
        >
            <box>
                <image
                    iconName={icon((t) => t)}
                />
                <ProgressBar value={volume.as((t) => t * 100)} maxValue={100} />
            </box>
        </window>
    )
}