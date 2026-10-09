---
id: selection
title: Selection
sidebar_label: Selection
sidebar_position: 6
---

# Selection

**After reading this page** you will be able to set the area to paint with the selection tool, combine and refine selections, and select regions of similar colour with auto select.

When a selection exists, the brush, blur, smudge, and colour mix change **only inside the selection**.

## Selection tools

The selection tool (`M`) has eight subtools, and auto select (`W`) is one more.

| Tool | Subtool | How to use it |
|---|---|---|
| Selection (`M`) | Rectangle | Drag to select a rectangle |
| Selection (`M`) | Ellipse | Drag to select an ellipse |
| Selection (`M`) | Lasso | Drag to enclose an area with a freehand curve |
| Selection (`M`) | Polygon | Click points one after another to make a polygon. Release near the first point to close it |
| Selection (`M`) | Selection brush | Adds painted areas to the selection |
| Selection (`M`) | Selection eraser | Removes painted areas from the selection |
| Selection (`M`) | UV island | Selects one UV island |
| Selection (`M`) | Face | Drag to add the faces you pass over to the selection |
| Auto select (`W`) | Auto select | Click to select a region of similar colour (magic wand) |

- **Polygon**: A rubber-band line follows each point you click. Release near the first point to close it and confirm the selection. The range near the first point is 8 pixels in the Scene view, and 1% of the document (at least 8 texels) on the UV canvas. Press `Esc` to discard all the points you have placed.
- **Selection brush and selection eraser** paint like a normal brush. A straight line (`Shift`) works the same way. While you hold `Alt`, they act as the eyedropper. They use the size slider.
- The other selection tools do not use the size slider, so the slider disappears from the brush bar.

In the Scene view, rectangle, ellipse, lasso, and polygon move the shape you see on screen onto the model surface. With the default setting that selects front faces only, only the faces that point at the camera and are not hidden are selected. On the UV canvas, the shape on the UV is selected as it is.

![Subtool strip of the selection tool](/img/captures/select-subtools.png)

![Lasso selection in the Scene view](/img/captures/select-scene-lasso.png)

## Selection properties

These are in the `Selection` section of the tool properties.

| Property | Meaning |
|---|---|
| Selection shape | Rectangle, ellipse, lasso, polygon, brush select, brush deselect, UV island, face, or auto select |
| Through back faces | When off, only the visible front faces are selected. When on, back meshes behind are selected too |
| Anti-aliasing | Softens the selection edge. When off, the edge is hard |

![Front faces only compared with through back faces](/img/captures/select-through-backfaces.png)

## Modifier keys

The keys held down when you pick a selection tool decide how the selection is combined.

| Key | Result |
|---|---|
| None | Replaces the existing selection with the new one |
| `Shift` | Adds to the existing selection |
| `Alt` | Subtracts from the existing selection |
| `Shift` + `Alt` | Keeps only the part that overlaps the existing selection (intersection) |

`Ctrl` does not change this rule. One drag is one step of undo (`Selection`). Making a selection by Ctrl+clicking a layer thumbnail follows the same rule. → [Layers](/guides/layers)

![Combining selections with modifier keys](/img/captures/select-modifiers.png)

## Auto select (magic wand)

Click to select a connected region of similar colour. The properties for auto select are in the `Fill` section.

| Property | Meaning |
|---|---|
| Tolerance | How different a colour can be and still count as the same region |
| Close gaps | How many pixels of thin line gaps that separate regions are closed |
| Expand region | Widens the selected region toward its edges |
| Anti-aliasing | Softens the edges |
| Within the island | Limits the selection to the UV island under the click |
| Refer to | Current layer, or all layers |

When `Within the island` is on and you click outside a UV island, nothing is selected and the status line tells you. Larger gap closing makes the calculation slower. One measurement on a 4096 document took several seconds to close a 2-pixel gap.

![UV island, face, and auto select](/img/captures/select-island-face-wand.png)

## Selection commands

When a selection exists, these commands are available. Pick them from the selection bar, or from the `Selection` submenu in the window's `⋯` menu.

| Command | Default key | What it does |
|---|---|---|
| Deselect | `Ctrl+D` | Clears the whole selection |
| Invert selection | `Ctrl+Shift+I` | Swaps the selected and unselected areas. If there is no selection, it selects everything |
| Grow | None (can be assigned) | Widens the selection outwards. Asks for a value (px) |
| Shrink | None (can be assigned) | Narrows the selection inwards. Asks for a value (px) |
| Feather | None (can be assigned) | Softens the selection edge. Asks for a value (px) |
| Fill | None (can be assigned) | Fills the inside of the selection with the drawing colour. Hold `Alt` to use the background colour |
| Delete | None | Clears the inside of the selection |
| To new layer | None | Copies or cuts the inside of the selection onto a new layer |
| Select all | None | Selects the whole document. It is in `More ▾` on the selection bar |

- Grow and Shrink take whole numbers from 1 to 1024 pixels. Feather takes 0.1 to 512 pixels, with one decimal place. The last value you used is remembered. The first values are Grow 1, Shrink 1, and Feather 2 pixels.
- **Delete**: While you paint colour, it clears the transparency inside the selection. While you paint a mask, it fills that part of the mask with white. In quick mask, it deselects.
- **To new layer**: Choose between `Copy` and `Cut`. A cut leaves a hole where the selection was. The new layer and the hole are restored together in one undo step.
- `Ctrl+A` (Select all) is for **selecting several layers**. It does not select all pixels. To select the whole document, use `Select all` in `More ▾` on the selection bar.
- All selection commands are one step of undo.

Grow, Shrink, and Feather take time on large documents. One development PC measurement took about 2 seconds to process 4 to 8 pixels on a 4096 document.

A command is dimmed with a reason in these cases: there is no selection (except Invert), the layer is locked, it is a folder, or it is an adjustment layer. Copy also works on locked layers.

## Selection bar

The selection bar appears when you use a selection tool or when a selection exists. In the Scene view, it sits above the subtool strip. On the UV canvas, it sits on the right of the bottom tool strip.

There are four groups.

1. Deselect, Invert
2. Grow, Shrink, Feather
3. Fill, Delete
4. To new layer ▾, More ▾

`More ▾` contains Show marching ants, Select all, and Quick mask. Below 320 pixels wide, only the icons show, and the names appear when you hover over them. Narrower than that, the row wraps.

![Selection bar, wide](/img/captures/selection-bar-wide.png)

![Selection bar, narrow](/img/captures/selection-bar-narrow.png)

![Value entry window and To new layer menu](/img/captures/selection-bar-menus.png)

![Results of the selection commands](/img/captures/selection-commands-result.png)

## Marching ants and dimmed outside

On the UV canvas, the selection edge shows a dashed line that alternates white and black and moves, and the area outside the selection is darkened by 20%. Turn off `Show marching ants` in `More ▾` on the selection bar to hide both.

In the Scene view, the selection edge is drawn as a 1 px dashed line measured on screen. It keeps the same thickness at any zoom. It is on by default.

On documents 4K or larger, the dark edge can be off by up to 4 texels. When the selection outline is longer than 260,000 texels, the dashes appear thinned out.

![Marching ants on the UV canvas](/img/captures/select-ants-uv.png)
