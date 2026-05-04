import Gtk from "gi://Gtk"
import Cava from "gi://AstalCava"
import { onCleanup } from "ags"

type AudioVisualizerProps = {
	bars?: number
	width?: number
	height?: number
	gap?: number
	className?: string
}

export default function AudioVisualizer({
	bars = 32,
	width = 160,
	height = 36,
	gap = 2,
	className = "",
}: AudioVisualizerProps) {
	const cava = Cava.get_default()

	cava.set_bars(bars)
	cava.set_framerate(60)
	cava.set_autosens(true)
	cava.set_active(true)

	let values = Array.from(cava.get_values())

	return (
		<drawingarea
			class={className}
			contentWidth={width}
			contentHeight={height}
			$={(area: Gtk.DrawingArea) => {
				const signal = cava.connect("notify::values", () => {
					values = Array.from(cava.get_values())
					area.queue_draw()
				})

				onCleanup(() => {
					cava.disconnect(signal)
				})

				area.set_draw_func((_area, cr, w, h) => {
					const count = values.length || bars
					const barWidth = Math.max(1, (w - gap * (count - 1)) / count)

					cr.setSourceRGBA(0.973, 0.894, 0.525, 1)

					for (let i = 0; i < count; i++) {
						const value = Math.max(0, Math.min(Number(values[i] ?? 0), 1))
						const barHeight = Math.max(1, value * h)

						const x = i * (barWidth + gap)
						const y = h - barHeight

						cr.rectangle(x, y, barWidth, barHeight)
					}

					cr.fill()
				})
			}}
		/>
	)
}
