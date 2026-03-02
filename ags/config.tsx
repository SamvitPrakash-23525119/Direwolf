import app from 'ags/gtk4/app';

export function Bar(monitor = 0) {
  return (
    <window visible class="Bar" monitor={monitor}>
      <box>Content of the widget</box>
    </window>
  )
}

