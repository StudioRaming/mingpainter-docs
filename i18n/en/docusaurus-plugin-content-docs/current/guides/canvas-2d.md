---
id: canvas-2d
title: 2D canvas
sidebar_label: 2D canvas
sidebar_position: 9
---

# 2D canvas

**After reading this page** you will be able to draw on a blank canvas without a 3D model, then register that drawing as a stamp or paste it onto a model or material.

You draw on a blank canvas without a 3D model. The painting tools are the same as on the UV canvas.

## Creating a new canvas

From the `⋯` menu in the window, pick `New 2D canvas…`.

- **Size**: The long side is 256, 512, 1024, or 2048. The shape is square, landscape, or portrait. Landscape and portrait use a 4:3 ratio, and the short side is 3/4 of the long side (a multiple of 64). Choose from twelve options.
- The default is a 1024×1024 square. It remembers the size and shape you chose last.
- The selected size is shown as width and height (px) and as a ratio.
- **Save to**: If you leave it empty, the canvas is created under `Assets/MingPainter/Canvas/` as `Canvas_<width>x<height>.mpd`. If the name already exists, a number is added. `Browse` lets you pick another location.
- `Enter` creates the canvas, and `Esc` closes the dialog.

![New 2D canvas dialog](/img/captures/canvas2d-new-dialog.png)

## Canvas window

A new canvas opens in its own window.

- The title bar shows the name, an unsaved-changes mark, the size, a `Mirror` toggle, and the `⋯` menu.
- Turn on `Mirror` to draw with left-right symmetry.
- The `⋯` menu contains the tool window list, `Save as PNG...`, and `Close canvas`.
- If there are unsaved changes when you close, it asks `Save and close`, `Do not save`, or Cancel.
- When another document is active, the canvas window does not accept painting. It shows only a `Click to return to this canvas` button. This prevents painting on the wrong document.
- Open the `Open 2D canvases` submenu in the main window's `⋯` menu to jump to an open canvas.
- A canvas is saved as a `.mpd` file. Use `Save as PNG...` to export a PNG separately.

![2D canvas window](/img/captures/canvas2d-window.png)

![Confirmation when closing an unsaved canvas](/img/captures/canvas2d-close-confirm.png)

## Output

These are in the `Output` submenu of the `⋯` menu in the 2D canvas window.

| Item | What it does |
|---|---|
| `Register as a stamp…` | Asks for a name and adds the drawing to the stamp list. `Crop transparent margins` is on by default. An empty drawing is not registered. The list holds up to 60 stamps |
| `Paste onto the 3D model` | Pastes this canvas onto the model based on the screen, in the same way as the transform screen projection. If the Scene view cannot be found, the status line tells you |
| `Paste into the UV texture` | Pastes onto an open material document |
| `Set an underlay…`, `Clear underlay`, underlay strength | Shows a reference image faintly under the canvas. Strength can be 25, 50, 75, or 100%. The underlay is not included in saves or PNG output |

![2D canvas Export menu](/img/captures/canvas2d-output-menu.png)

![Register as stamp dialog](/img/captures/canvas2d-stamp-register.png)

![Underlay and strength](/img/captures/canvas2d-underlay.png)

For more on stamp registration and pasting with transform, see [Transform, text, ruler, and stamp](/guides/transform-text#stamps).
