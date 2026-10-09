---
id: psd
title: PSD
sidebar_label: PSD
sidebar_position: 5
---

# PSD

**After reading this page** you will know how to open a PSD file with its layers, export your work back to PSD, and which parts carry over unchanged.

## Opening a PSD

If a texture slot of a material links a `.psd` file, opening that slot opens the PSD with its layers.

- Layers, folders, blend modes, masks, and adjustment layers appear in the layer panel as they are.
- If a `.mpd` working file already exists for that PSD, the working file opens instead of the PSD.
- The document size is limited to 4096 pixels per side. A larger document does not open, and the status line gives the reason.
- Problems found while reading are grouped by code in a warning window. Each warning shows the name of the layer it applies to.

![Layer panel right after opening a PSD](/img/captures/psd-open-layers.png)

![PSD warning window](/img/captures/psd-warnings-window.png)

### The original PSD is not changed

Painting a PSD does not write to the PSD file. When you save, `<name>_paint.png` and `.mpd` are created. To export back to PSD, use `Export as PSD...` below. A document opened from a PSD turns off the "original layer" check.

The save location follows the save folder rules in [Save and recover](/guides/save-recover).

## Exporting to PSD

**Opening**: `Export as PSD...` in the `⋯` menu of the window, or in the layer right-click menu. It is enabled only when a document is open and in a state that can be exported.

In the export window, choose two options, then press `Export`. Both options are on by default.

| Option | Meaning |
|---|---|
| Bake effects to pixels | Merges the layer effects into the layer pixels. When off, the effects are not included in the PSD |
| Colour balance, selective colour, and replace colour to pixels | These three adjustments cannot be carried over exactly to Photoshop values. When on, the calculated result is written as pixels |

- The default file name is `<name>_paint.psd`.
- Exporting does not change the document. It does not create an undo step.
- The composite is created by the same path as the saved PNG.
- A layer that is baked has its opacity written into the pixels, and becomes 100%. Its blend mode is kept.
- When you overwrite an existing PSD, the file is written to a temporary file first and then swapped in. If it fails, the original is kept.
- If the export produces warnings, the warning window opens when it finishes.

![PSD export window](/img/captures/psd-export-window.png)

## Round-trip scope

This table shows, for each item, how far it carries over when you open a PSD and export it again.

| Item | Read | Write |
|---|---|---|
| Layers, folders, pass-through folders | Supported | Supported |
| 27 blend modes | Supported | Supported |
| Clipping, opacity | Supported | Supported (some items approximated) |
| Paint opacity | Supported | Supported (8 special modes approximated) |
| Masks (raster) | Supported | Supported |
| Adjustment layers | Supported | Supported (the three adjustments above follow the option: pixels) |
| Layer effects (`lfx2`) | 8 types read | Read effects are kept as they were. Effects in this product are baked to pixels or left out |
| Bevel and emboss, satin | Kept as original only | Kept as original only |
| Vector masks, smart objects | Not edited | Not edited |
| PSB, 16- and 32-bit, CMYK and Lab | Not supported | Not supported |

## Approximated items

These items may differ slightly when moved to PSD. The export warns you about them.

- A clipping layer grouped as a blend (off is approximated as on)
- Paint opacity on a clipping base
- Eight special modes of paint opacity

## Limits

- The composite result may differ by up to 1 between Mono 32-bit and .NET 64-bit.
- Compositing against a white matte has large colour errors below alpha 128. This is the same limit as Photoshop.
