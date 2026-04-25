# DireWolf

> A modern, extensible GUI shell for Linux — starting with Arch.

DireWolf is a custom desktop UI layer built with [AGS (Aylur's GTK Shell)](https://github.com/aylur/ags) and SCSS. The current focus is a fully-featured top bar for Hyprland, with a long-term vision of delivering a complete Linux GUI experience: lock screen, settings panel, file manager, notifications, and more.

---

## Features

- **Top Bar** — workspace switcher, media controls, and system tray in a single cohesive bar
- **SCSS theming** — fully customizable colors, animations, and component styles
- **Hyprland integration** — ships with a Hyprland configuration
- **System Utilities** — built-in support for brightness, volume, media playback, and more
- **Extensible Architecture** — designed for easy addition of new components and features
- **Bundled Core Applications** — terminal, file manager, and settings panel in development
- **Developer and User Workflows** — streamlined setup and hot-reload for rapid development
- **Public Source** — open-source on GitHub for community contributions and transparency

### Planned
- [ ] Lock screen
- [ ] Settings panel
- [ ] Notification center
- [ ] File manager
- [ ] Application launcher
- [ ] Broader distro support

---

## Screenshots

> _Screenshots coming soon._

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [AGS v3](https://github.com/aylur/ags) (`aylurs-gtk-shell`) | GTK4 shell framework |
| [Astal](https://github.com/aylur/astal) | Widget / utility library for AGS |
| TypeScript / TSX | Component logic |
| SCSS | Styling |
| Hyprland | Wayland compositor |
| `sass` | SCSS → CSS compilation |
| `nodemon` | File-watch hot reload |

---

## Prerequisites

Install the following before getting started:

| Package | Version | Install |
|---------|---------|---------|
| `aylurs-gtk-shell` (ags) | 3.1.0 | `yay -S aylurs-gtk-shell` |
| `astal` | 0.1.0 | `git clone https://github.com/aylur/astal.git` |
| `sass` | 1.98.0 | `npm i -g sass` or `pacman -S sass` |
| `playerctl` | 2.4.1 | `pacman -S playerctl` |
| `glib2-devel` | 2.88.0 | `pacman -S glib2-devel` |
| `nodemon` | 3.1.14 | `npm i -g nodemon` |

> **Note:** This project is currently developed and tested on **Arch Linux** with the **Hyprland** compositor.

----

## Getting Started

## Developer setup:
#### 1. Clone the repository

```bash
git clone https://github.com/SamvitPrakash-23525119/fictional-computing-machine.git
cd fictional-computing-machine
```

#### 2. Install dependencies
Manually install the required dependencies listed in the prerequisites section. Streamlined installation scripts may be added in the future.

#### 3. Build and run

```bash
make
```
---

## User setup:
#### 1. Download the latest release
#### 2. Run the executbable
Installation scripts and package manager support may be added in the future for easier user setup.


---
## Repository Policy

This repository is publicly visible for transparency, learning, issue tracking, and community interest.

Direct modifications to the main repository are not accepted.

If you would like to experiment or build on the project:

* Fork the repository
* Create your own derivative work
* Open issues for bugs or suggestions where enabled


--- 

## Contributing

At this stage, external code contributions are not being accepted.

You are welcome to:

* Fork the project
* Report bugs
* Suggest features
* Share feedback


--- 

## Status

Active development.

--- 

## Disclaimer

This project is evolving rapidly. Features, architecture, and workflows may change as development progresses.
