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
EXTENSIONS-AGS := tsx,scss,ts

.DEFAULT_GOAL := live-update
.PHONY := clean run live-update

$(CSS): $(MAIN_SCSS)
	@echo 'Compiling Styles...'
	sass $(MAIN_SCSS) $(CSS)

ags: clean $(CSS)
	@echo 'Running Application...'
	GI_TYPELIB_PATH=/usr/local/lib/girepository-1.0 \
    LD_LIBRARY_PATH=/usr/local \
	ags run $(AGS_ENTRY) --gtk 4

live-update:
	@echo 'Watching for changes...'
	nodemon --ext $(EXTENSIONS-AGS)  --exec "make ags || true" -r $(AGS)

clean:
	@echo 'Cleaning up...'
	rm -f $(CSS_DIST)/*.css.map $(CSS)
