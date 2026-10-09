---
id: settings
title: Settings
sidebar_label: Settings
sidebar_position: 1
---

# Settings

**After reading this page** you will know what each tab in the settings window does, and how to change the key assignments and the location of the brush library.

Settings are on the `StudioRaming/MingPainter` page of Unity Preferences.

## Tabs

| Tab | What it does |
|---|---|
| Pen and input | Pen input settings. Has pen calibration (pressure calibration) and a button to open the pen diagnostics window |
| Operation | Settings for moving around the view |
| Shortcuts | Presets (CSP and PS), keys for each command, clearing keys, and reset all |
| Drawing | Painting settings |
| Library | Location of the brush library, and back to default |

## Shortcuts {#shortcut-assignment}

- You are asked to confirm before changing the preset. Reset all also asks for confirmation.
- If a key overlaps with a Unity shortcut, you are told.
- Each command has a key chip. Use the `×` on the chip to remove the key, then press `Assign key…` and press the new key in the capture window. The capture window says `Press the key · Esc cancels`.
- If you pick a key that another command already uses, you are asked whether to move it. If there is no overlap, there is no prompt.
- You can reset only the rows you changed back to their defaults.

The default key table is in [Shortcuts](/reference/shortcuts).

## Library {#library}

There is one brush library per PC. The default location is `%APPDATA%\StudioRaming\MingPainter`. On this tab you can see the current folder, open the folder, and change the location.

To change the location, the steps are:

1. Choose a folder.
2. If the chosen folder is empty, or contains only files that are not a library, you are asked whether to `Copy`, `Don't copy (start empty)`, or cancel. Copying does not overwrite existing files.
3. If the chosen folder already has a library, you are asked to `Use it`. Nothing is copied into that folder.
4. A folder that is inside the current folder, or that contains it, is refused.

The original folder is not deleted. Use the `Back to default` row to return to the default location. If the changed location disappears (for example, when a USB drive is removed), the default location is used for this session and the status line tells you.

## Language

The supported languages are Korean, English, and Japanese. You change the language from the language menu in the window's title bar, not from the Settings tabs. The language setting is shared by all StudioRaming tools. If you change the language in another StudioRaming tool, this product follows it.
