import app from "ags/gtk4/app"
import { Bar } from "./config"

app.start({
    main() {
        Bar(1);
    },
})