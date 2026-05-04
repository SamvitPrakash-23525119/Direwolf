# Directories
SRC := src
AGS := $(SRC)/ags
STYLES := $(AGS)/styles
CSS_DIST := $(STYLES)/dist
HYPRLAND := /home/_c3rberus/.config/hypr
HYPRLAND_DIST := $(SRC)/hyprland
PROJECT_LOGS := logs

# Files
AGS_ENTRY := $(AGS)/app.tsx
MAIN_SCSS := $(STYLES)/main.scss
CSS := $(CSS_DIST)/main.css
HYPRLAND_ENTRY := $(HYPRLAND)/hyprland.conf
HYPRLAND_DIST_ENTRY := $(HYPRLAND_DIST)/hyprland.conf
AGS_LOGS := $(PROJECT_LOGS)/ags.log
HYPRLAND_LOGS := $(PROJECT_LOGS)/hyprland.log

# Config
EXTENSIONS_AGS := tsx,scss,ts
EXTENSIONS_HYPRLAND := conf

.DEFAULT_GOAL := ags-live
.PHONY: clean run ags ags-live hyprland hyprland-live ags-deployment run-ags-deployment

# Deployment
DIST := dist
DIST_FILE := $(DIST)/DireWolf

$(PROJECT_LOGS):
	mkdir -p $(PROJECT_LOGS)

$(AGS_LOGS): $(PROJECT_LOGS)
	touch $(AGS_LOGS)

$(HYPRLAND_LOGS): $(PROJECT_LOGS)
	touch $(HYPRLAND_LOGS)

$(CSS): $(MAIN_SCSS)
	@echo 'Compiling Styles...'
	sass $(MAIN_SCSS) $(CSS)

ags: clean $(CSS)
	@echo 'Running Application...'
	ags run $(AGS_ENTRY) --gtk 4

ags-live:
	@echo 'Watching for changes...'
	nodemon --ext $(EXTENSIONS_AGS)  --exec "make ags || true" -r $(AGS)

hyprland:
	@echo 'Deploying Hyprland configuration...'
	rsync -a --delete "$(HYPRLAND_DIST)/" "$(HYPRLAND)/"
	hyprctl reload

hyprland-live:
	@echo 'Watching for changes in Hyprland configuration...'
	nodemon --ext $(EXTENSIONS_HYPRLAND) --exec "make hyprland || true" -r $(HYPRLAND_DIST)

$(DIST):
	mkdir -p $(DIST)

ags-deployment: clean $(CSS) $(DIST)
	@echo 'Bundling application for deployment...'
	ags bundle $(AGS_ENTRY) $(DIST_FILE)

run-ags-deployment: ags-deployment
	@echo 'Running bundled application...'
	./$(DIST_FILE)

clean:
	@echo 'Cleaning up...'
	rm -f $(CSS_DIST)/*.css.map $(CSS)
