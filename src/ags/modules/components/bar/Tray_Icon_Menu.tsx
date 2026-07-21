import Gio from 'gi://Gio'
import GdkPixbuf from 'gi://GdkPixbuf'
import { Gtk } from 'ags/gtk4'
import { ICON_SIZE } from '../../../constants/icons';
import type Tray from 'gi://AstalTray'
import { createBinding } from 'ags';

interface TrayIconProps {
    item: Tray.TrayItem;
    class?: string;
}

export default function TrayIconMenu({item, class: className}: TrayIconProps) {
    const button = new Gtk.MenuButton();
    const image = new Gtk.Image();

    const title = createBinding(item, 'title');
    const menuModel = createBinding(item, 'menu_model');
    const actionGroup = createBinding(item, 'action_group');

    image.set_pixel_size(ICON_SIZE+1);
    image.set_css_classes(['icon']);
    

    if (item.gicon instanceof Gio.FileIcon) {
        const gicon = createBinding(item, 'gicon');
        image.set_from_file(gicon().to_string() || '');
        
    } else if (item.gicon instanceof GdkPixbuf.Pixbuf) {
        const gicon = createBinding(item, 'gicon');
        image.set_from_pixbuf(gicon());

    } else if (item.gicon instanceof Gio.ThemedIcon) {
        const icon = createBinding(item, 'icon_name');
        image.set_from_icon_name(icon() || '');

    }

    button.set_child(image);
    button.set_tooltip_text(title());
    button.set_menu_model(menuModel());
    button.insert_action_group("dbusmenu", actionGroup());
    button.set_css_classes(className ? [className] : []);

    return (button);

}