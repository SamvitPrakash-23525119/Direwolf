PREFIX ?= /usr
DESTDIR ?=

PKG_NAME = direwolf
APP_NAME = direwolf
VERSION = v0.1.5

BINDIR = $(PREFIX)/bin
LIBDIR = $(PREFIX)/lib/$(PKG_NAME)
SYSTEMD_USER_DIR = $(PREFIX)/lib/systemd/user

.PHONY: install uninstall

install:
	install -Dm755 direwolf "$(DESTDIR)$(BINDIR)/direwolf"
	install -Dm755 "$(APP_NAME)-$(VERSION)" "$(DESTDIR)$(LIBDIR)/$(APP_NAME)"
	install -Dm644 direwolf.service "$(DESTDIR)$(SYSTEMD_USER_DIR)/direwolf.service"

uninstall:
	rm -f "$(DESTDIR)$(BINDIR)/direwolf"
	rm -rf "$(DESTDIR)$(LIBDIR)"
	rm -f "$(DESTDIR)$(SYSTEMD_USER_DIR)/direwolf.service"
