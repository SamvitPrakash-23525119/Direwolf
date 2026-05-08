
<div align="center">
  <img src="./assets/logos/direwolf_logo.jpg" width="100"/>

  <h1>Direwolf Linux Desktop Shell</h1>
  <p><strong>A modern reactive Linux desktop shell built with AGS, TypeScript, and Hyprland.</strong></p>

  ![Direwolf](https://img.shields.io/badge/Direwolf-000000?style=for-the-badge&logo=smartphone&logoColor=white)
  
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![AGS](https://img.shields.io/badge/AGS-007ACC?style=for-the-badge&logo=framework&logoColor=white)
  ![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
  ![Hyprland](https://img.shields.io/badge/Hyprland-000000?style=for-the-badge&logo=hyprland&logoColor=white)
  ![Wayland](https://img.shields.io/badge/Wayland-000000?style=for-the-badge&logo=wayland&logoColor=white)
  
  ![Arch Linux](https://img.shields.io/badge/Arch_Linux-1793D1?style=for-the-badge&logo=archlinux&logoColor=white)

</div>

<div align="center">
  <img src="./assets/screenshots/desktop.png" width="450">
</div>

## Overview

**Direwolf** is a modern Linux desktop UI built with AGS (Aylur's GTK Shell) and powered by reactive TypeScript components, designed for speed, modularity, and aesthetic minimalism. This project focuses on creating a polished Hyprland experience with dynamic widgets, smooth animations, system integrations, and a clean architecture that scales as the desktop evolves.

From media controls and network indicators to workspace management and blurred glassmorphism panels, the goal is to turn the Linux desktop into a responsive control deck instead of a pile of disconnected scripts.

## Features

## Media Controls
- Play/pause, skip, and volume controls for MPRIS-compatible media players.
- Dynamic media cards showing album art, track info, and progress bars.

## Hyprland Integration
- Workspace indicators with dynamic icons and animations.
- Window titlebars with custom controls and blurred backgrounds.

## System Indicators
- Battery status, network connectivity, Bluetooth devices, and more.
- Interactive widgets for quick access to settings and information.

## Notifications
- Custom notification system with support for actions and media controls.
- Smooth animations and dynamic styling based on content.

## Screenshots

### Home Screen
*Main weather display showing current conditions*
<div align="center">
  <img src="./Aurora/assets/images/screenshots/Home-Sunny.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Home-Windy.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Home-Cloudy.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Home-Rainy.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Home-Lightning.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Home-Snowy.jpeg" height="300"/>
</div>

### Hourly Forecast
*24-hour weather forecast timeline*
<div align="center">
  <img src="./Aurora/assets/images/screenshots/Forecast-Sunny.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Forecast-Windy.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Forecast-Cloudy.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Forecast-Rainy.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Forecast-Lightning.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Forecast-Snowy.jpeg" height="300"/>
</div>

### Sky Science Metrics
*Detailed weather and astronomical data*
<div align="center">
  <img src="./Aurora/assets/images/screenshots/Metrics-Sunny.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Metrics-Windy.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Metrics-Cloudy.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Metrics-Rainy.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Metrics-Lightning.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Metrics-Snowy.jpeg" height="300"/>
</div>

### Weekly Forecast
*Weekly weather forecast timeline*
<div align="center">
  <img src="./Aurora/assets/images/screenshots/Weekly-Sunny.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Weekly-Windy.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Weekly-Cloudy.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Weekly-Rainy.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Weekly-Lightning.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Weekly-Snowy.jpeg" height="300"/>
</div>

### New Location Bookmark
*New Location Bookmarking*
<div align="center">
  <img src="./Aurora/assets/images/screenshots/Location.jpeg" height="300"/>
  <img src="./Aurora/assets/images/screenshots/Location-Text.jpeg" height="300"/>
</div>

### Dynamic UI/UX
<div align="center">
  <p><em>Aurora adapts its UI for different weather conditions: Sunny, Cloudy, Rainy, Snowy, Lightning, and Windy</em></p>
</div>


## Getting Started

### Installation

1. **Download the latest release from github**
  ```
    download the latest zip, direwolf-vX.X.X.zip, from the releases page.
  ```
or
  ```bash
    curl -s https://api.github.com/repos/SamvitPrakash-23525119/Direwolf/releases/latest
  ```

2. **Unzip and install the files**
  ```bash
    cd direwolf-vX.X.X
  ```
  ```bash
    makepkg -sic
  ```

3. **Setup Direwolf**
  ```bash
    systemctl --user daemon-reload
  ```
   ```bash
    systemctl --user enable --now direwolf.service
   ```
4. **Check the setup was successful**
  ```bash
    systemctl --user status direwolf.service
  ```

## Project Structure

```
.
├── bin
│   └── direwolf
├── .github
│   └── workflows
│       └── releases.yml
├── LICENCE
├── makefile
├── notes
├── packaging
│   └── arch
│       ├── makefile
│       └── PKGBUILD
├── README
├── README.md
├── src
│   ├── ags
│   │   ├── app.tsx
│   │   ├── env.d.ts
│   │   ├── .gitignore
│   │   ├── modules
│   │   │   ├── Bar
│   │   │   │   └── Bar.tsx
│   │   │   ├── MediaCard
│   │   │   │   └── MediaCard.tsx
│   │   │   ├── VolumeModal
│   │   │   │   └── VolumeModal.tsx
│   │   │   └── widgets
│   │   │       ├── AudioVisualizer.tsx
│   │   │       ├── Clock.tsx
│   │   │       ├── MediaBar.tsx
│   │   │       ├── ProgressBar.tsx
│   │   │       ├── TrayBar.tsx
│   │   │       └── WorkspaceBar.tsx
│   │   ├── package.json
│   │   ├── services
│   │   │   └── share
│   │   │       ├── BatteryService.ts
│   │   │       ├── BluetoothService.ts
│   │   │       ├── HyprlandService.ts
│   │   │       ├── MprisService.ts
│   │   │       ├── NmService.ts
│   │   │       └── WpctlService.ts
│   │   ├── styles
│   │   │   ├── _animations.scss
│   │   │   ├── _clock.scss
│   │   │   ├── _colors.scss
│   │   │   ├── dist
│   │   │   │   ├── main.css
│   │   │   │   └── main.css.map
│   │   │   ├── main.scss
│   │   │   ├── _mediaBar.scss
│   │   │   ├── _mediaCard.scss
│   │   │   ├── _media.scss
│   │   │   ├── _progressBar.scss
│   │   │   ├── _tray.scss
│   │   │   ├── _volumeModal.scss
│   │   │   └── _workspace.scss
│   │   ├── tsconfig.json
│   │   └── utilities
│   │       ├── to_numerals.ts
│   │       └── workspaces.ts
│   └── hyprland
│       └── hyprland.conf
└── systemd
    └── direwolf.service
```
