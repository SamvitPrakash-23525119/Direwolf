# Directories
AGS := ags
STYLES := $(AGS)/styles
CSS_DIST := $(STYLES)/dist
SYSTEM_LOG := logs
AGS_LOG := $(AGS)/logs

# Files
AGS_ENTRY := $(AGS)/app.tsx
MAIN_SCSS := $(STYLES)/main.scss
CSS := $(CSS_DIST)/main.css

# Config
HEADLESS := false
EXTENSIONS := tsx,scss

.DEFAULT_GOAL := live-update
.PHONY := clean run live-update

$(CSS): $(MAIN_SCSS)
	@echo 'Compiling Styles...'
	sass $(MAIN_SCSS) $(CSS)

run: clean $(CSS)
	@echo 'Running Application...'
	ags run $(AGS_ENTRY) --gtk 4

live-update:
	@echo 'Watching for changes...'
	nodemon --ext $(EXTENSIONS)  --exec "make run" -r $(AGS)

clean:
	@echo 'Cleaning up...'
	rm -f $(CSS_DIST)/*.css.map $(CSS)
