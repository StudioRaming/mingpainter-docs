---
id: troubleshooting
title: Troubleshooting
sidebar_position: 90
---

# Troubleshooting

Find the page by symptom.

## Cannot open the save file {#cannot-open-save-file}

The status line shows `Failed to open: <file name>: <reason>`. The reason may be in English. The product does not guess how to repair a damaged file. The document does not open, and the file is not changed.

| Message (kind) | Meaning | What to do |
|---|---|---|
| Newer file version (`FutureVersion`) | The file was made with a newer version | Update the product to the latest version |
| Truncated file (`Truncated`) | The file was not fully written | If you have a backup or an earlier `.mpd`, open that instead |
| Checksum mismatch (`ChecksumMismatch`) | The file content differs from when it was saved. It is damaged | If you have a backup or an earlier `.mpd`, open that instead |
| Document info damaged (`ManifestInvalid`) | Document information such as the layer list is not valid | If you have a backup or an earlier `.mpd`, open that instead |
| Tile damaged (`TileInvalid`) | A picture tile is not valid | If you have a backup or an earlier `.mpd`, open that instead |
| Not an `.mpd` (`NotMpd`) | The file is not an `.mpd` | Check the file type |

## Pen is not detected {#pen-is-not-detected}

- Pen input has two paths: Windows Ink (Unity pen events) and WinTab. By default (`Auto`), Unity 2022.1 and later use Windows Ink first, and WinTab fills in when Unity reports only mouse input. Unity 2019.4 and 2021.3 use WinTab first when the WinTab driver is installed.
- If the WinTab driver (`wintab32.dll`) is missing, only Unity pen events (Windows Ink on 2022.1 and later) are used. Pen pressure may not come through in that case.
- You can choose the pressure source from `Auto`, `Windows Ink`, `WinTab`, or `Mouse (no pressure)`. The `Open WinTab diagnostics` button in the settings window opens the pen diagnostics window, and pen calibration (Calibrate) is done in that window. Without a pen, you paint with the mouse and pressure is fixed at 1.

## The right-click menu is missing

The painting menu is in the `CONTEXT/Material` menu of the material Inspector header. → [Ways to start painting](/getting-started/entry-points)

## A VRAM warning appears

VRAM is calculated from the size and layer count of open documents. When the calculated value passes 70% of device memory, the warning level is shown. Above 90%, the level is critical. Documents you are not using can be put to sleep (Sleep) to free VRAM.

This calculation comes from a table built on assumptions. Until it is checked on real hardware, this document does not give recommended numbers.

## Painting stops when I enter Play mode

Right before entering Play mode, a recovery record is written first, and painting stops. The stroke in progress is cancelled. This is intended. When you leave Play mode and return to Edit mode, painting opens again. The recovery record is also written first when you leave Play mode. → [Save and recover](/guides/save-recover)
