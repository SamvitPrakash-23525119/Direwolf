import Gio from 'gi://Gio'
import GdkPixbuf from 'gi://GdkPixbuf'
import { Gtk } from 'ags/gtk4'
import { ICON_SIZE } from '../../../constants/icons';
import type Tray from 'gi://AstalTray'

interface TrayIconProps {
    item: Tray.TrayItem;
    class?: string;
}

export default function TrayIconMenu({item, class: className}: TrayIconProps) {
    const button = new Gtk.MenuButton();

    const image = new Gtk.Image();

    image.set_pixel_size(ICON_SIZE+1);
    image.set_css_classes(['icon']);
    

    if (item.gicon instanceof Gio.FileIcon) image.set_from_file(item.gicon.to_string() || '');
    else if (item.gicon instanceof GdkPixbuf.Pixbuf) image.set_from_pixbuf(item.gicon);
    else if (item.gicon instanceof Gio.ThemedIcon) image.set_from_icon_name(item.icon_name || '');

    button.set_child(image);
    button.set_tooltip_text(item.title);
    button.set_menu_model(item.menu_model);
    button.insert_action_group("dbusmenu", item.action_group);
    button.set_css_classes(className ? [className] : []);

    return (button);

}