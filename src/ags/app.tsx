import app from "ags/gtk4/app"
import css from "./styles/dist/main.css"
import Bar from "./modules/widgets/Bar"
import BluetoothService from "./services/shared_libraries/BluetoothService"
import {createBinding, createEffect, createState} from "gnim"

app.start({
  css: css,
  instanceName: "Direwolf",
  iconTheme: "Adwaita",
  main() {
    console.log("Started AGS...")
    const bluetoothctl = BluetoothService.get_default().getBluetoothctl()

    for(const i in bluetoothctl.devices[0]) console.log(i)

    return (
      <>
        <Bar/>
        {/* <window visible>
          <label label="Hello World" class={"p nandinagari"} />
          <image iconName={icon((t) => t)} class={"icon"} pixelSize={32} />

        </window> */}
      </>
    )
  },
})
