---
id: import
title: Import
sidebar_label: Import
sidebar_position: 10
---

# Import

**After reading this page** you will know how to import brushes, palettes, and image files into MingPainter, and which settings cannot be carried over.

## Supported formats

| Format | What is imported | Status |
|---|---|---|
| `.abr` (Photoshop brush) | Moves one preset to one subtool. Settings that cannot be moved are kept as warnings | Reads the two layouts found in real files (v6.1 and v6.2) |
| `.sut` (CLIP STUDIO subtool) | Reads the tip connection information | Opens with the import command. The tip is made from the thumbnail image in the file. Settings are matched by estimate, so the report marks them as approximate |
| `.gpl` (GIMP palette) | List of colours | Supported |
| Images (PNG, JPG, and others) | Brush tip images | Supported |
| `.mpbrush` (MingPainter brush) | Brush files for this product | Supported |
| WebP | Excluded | Not supported, because there is no decoder |

## Settings that cannot be carried over

Import moves the original values as far as it can. The items below cannot be moved, and a warning is shown.

| Original setting | Result |
|---|---|
| Tilt scale (`tiltScale`) | Cannot be moved |
| Dual brush (`useDualBrush`) | Not moved. Only kept |
| Purity (`purity`) | Cannot be moved |
| Roundness dynamics and minimum roundness (`roundnessDynamics`, `minimumRoundness`) | Only jitter is moved. Dynamics and minimum cannot be moved |
| Texture (`useTexture`) | The pattern in the same file is moved as paper texture. If the file has no pattern, it cannot be moved |

## Brush library

Imported brushes go into the brush library. There is one library per PC, and its default location is under `%APPDATA%\StudioRaming\MingPainter`. You change the location on the `Library` tab of the settings. Use the `Back to default` row to return to the default location. → [Settings](/reference/settings#library)

![Brush import report window](/img/captures/import-brush-dialog.png)
