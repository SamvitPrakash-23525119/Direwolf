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

.DEFAULT_GOAL := run

$(CSS): $(MAIN_SCSS)
	@echo 'Compiling Styles...'
	sass $(MAIN_SCSS) $(CSS)

run: clean $(CSS)
	@echo 'Running Application...'
	ags run $(AGS_ENTRY) --gtk 4

clean:
	@echo 'Cleaning up...'
	rm -f $(CSS_DIST)/*.css.map $(CSS)

.PHONY := clean run