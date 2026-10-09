---
id: layers
title: Layers
sidebar_label: Layers
sidebar_position: 4
---

# Layers

**After reading this page** you will be able to apply blend modes and masks to layers, change colour with adjustment layers and effects, and use filters and automatic layer splitting.

The layer panel shows raster layers, folders, and adjustment layers in one list.

## Blend modes

Layers and folders have 29 blend modes. That is Photoshop's 27 plus CSP's 2 (`Glow Dodge` and `Add (Glow)`). The blend list is split into 7 groups, with a divider between groups.

Pick the blend mode in the property row. The `Fill` slider is in the row below it.

![Layer panel with the blend dropdown open](/img/captures/layers-panel-blend.png)

## Layer masks

A **mask** is a grey image that sets where a layer is visible and where it is hidden. **White is visible, and black is hidden.**

### Creating a mask

Right-click the layer, or press the mask button on the layer card, and pick one.

| Menu item | Result |
|---|---|
| Add mask: fully visible (white) | White mask |
| Add mask: from selection | The current selection becomes the mask |
| Add mask: fully hidden (black) | Black mask. The whole layer is hidden |

You cannot create a mask in the following cases. The menu is dimmed and the reason is shown in parentheses.

- No layer is selected.
- The layer is a channel folder.
- The layer is locked.
- The layer is the base (original) layer.
- The layer already has a mask.

### Painting on a mask

Each layer row has, in order, a colour thumbnail, a link icon, and a mask thumbnail.

| Action | What it does |
|---|---|
| Click the mask thumbnail | Paints on the mask. A border appears on the thumbnail |
| Click the colour thumbnail | Returns to painting the colour |
| Shift + mask thumbnail | Turns the mask on and off. When it is off, a red X appears |
| Ctrl + mask thumbnail | Turns the mask into a selection |
| Ctrl + colour thumbnail | Turns the layer shape into a selection |
| Link icon | Sets whether the mask follows the layer when it moves |

Add Shift to a Ctrl action to add to the selection, Alt to subtract, and hold Shift and Alt together to intersect.

Painting black on a mask hides the area you paint, and painting white brings it back. While you paint a mask, the eyedropper picks the composite colour, not the mask value. When you select another layer, painting returns to the colour automatically.

Erase Layer (`Del`) follows the surface you are painting. On a mask surface, it fills the mask with white.

### Applying and deleting

- **Apply mask**: Merges the mask into the layer pixels and removes the mask. This works only on raster (normal) layers.
- **Delete mask**: Removes the mask only. The layer stays as it is.

Both actions are one step of undo.

![Layer rows with mask thumbnails](/img/captures/layers-mask-rows.png)

![Model result painted through a mask](/img/captures/layers-mask-paint-result.png)

## Quick mask

Toggle with the `Q` key. You can also turn it on with the toggle at the bottom of the tool strip. When it is on, the area outside the selection is covered with a translucent red, and you paint over it to refine the selection. When it is off, the painted shape becomes the selection.

- While you paint, `Quick mask` appears in the Scene status line.
- A PNG you save does not include the red overlay.
- While quick mask is on, Erase Layer (`Del`) deselects.

![Quick mask turned on](/img/captures/layers-quickmask-on.png)

## Fill opacity {#fill-opacity}

`Fill` opacity is the layer's own opacity, without effects. Effects such as shadows still show when you lower the fill. The slider is dimmed for adjustment layers and channel folders.

## Adjustment layers

An adjustment layer changes the colour of the layers below it. It does not change pixels.

| Adjustment | Notes |
|---|---|
| Hue/Saturation | |
| Brightness/Contrast | |
| Levels | Channel select, 5 handles, histogram |
| Invert | No values. Only an info line appears |
| Black and white | |
| Posterize | |
| Threshold | |
| Gradient map | Add, move, colour, and delete stops |
| Curves | Add points, drag them, double-click to delete, histogram |
| Colour balance | Approximated when exported to PSD |
| Selective colour | Approximated when exported to PSD |
| Replace colour | Approximated when exported to PSD |

**Creating**: Press the adjustment layer button on the layer card and pick a type. It is created above the current layer, in the same folder.

**Editing values**: Click the thumbnail on the adjustment row to open the adjustment window. You can also open it from the tool window menu.

- The model updates right away while you drag a slider. One drag is one step of undo.
- The `Reset` button returns to the default values.
- The histogram updates once when you change layers and once when you release a value.

When you merge an adjustment layer down, it applies only to the layer directly below it. Merging a layer up into an adjustment layer is refused.

![Add adjustment layer menu](/img/captures/layers-adjustment-menu.png)

![Levels adjustment window](/img/captures/layers-adjustment-levels.png)

![Curves adjustment window](/img/captures/layers-adjustment-curves.png)

## Layer effects

There are 3 layer effects.

| Effect | Settings |
|---|---|
| Drop shadow | Angle, distance, spread, size, colour, opacity, blend mode |
| Colour overlay | Colour, opacity, blend mode |
| Stroke | Position, size, colour, opacity, blend mode |

**Opening**: Right-click the layer and choose `Layer effects…`, or press the `fx` button on the lock row. Turn effects on in the list on the left, and change their values on the right.

- The shadow angle is the direction the shadow **moves**. 0 is to the right, and the angle grows counter-clockwise. Hold Shift to move in steps of 15 degrees.
- The distance slider goes up to 500.
- `Turn all off` / `Turn all on` at the bottom of the window turns effects off or on together, without deleting them. `Clear effects` removes the effect values.
- `Bake effect to pixels` bakes the effect into the layer pixels. The opacity is baked too, and the layer becomes 100%.
- On adjustment layers and locked layers, the effects menu is dimmed and the reason is shown.

![Effects window](/img/captures/layers-effects-window.png)

![Example of the three effects applied](/img/captures/layers-effects-three.png)

## Filters

Pick `Filters` from the `⋯` menu in the window. The filter menu has nine items.

| Filter | Main settings |
|---|---|
| Gaussian blur | Radius |
| Motion blur | Angle, distance |
| Unsharp mask | Radius, amount, threshold |
| Add noise | Amount, Gaussian distribution, monochrome |
| Median | Radius (whole number) |
| Mosaic | Cell size |
| High pass | Radius |
| Offset | Horizontal shift, vertical shift, wrap to the opposite side |
| Height to normal | Bump strength. Turns the painted height into a normal map. See [3D work](/guides/3d#height-to-normal-filter) |

When you change values in the filter window, a preview appears on the model.

1. Pick the values. Turn the preview on and off with the preview checkbox.
2. Press `Enter` to apply. This is one step of undo.
3. `Esc` or closing the window restores the original.

Nothing spreads outside the UV island. While the preview is showing, painting, layer editing, and undo are blocked. Changing the active layer or saving cancels the preview automatically.

A filter cannot be used in the following cases. The menu is dimmed.

- There is no layer, the layer is an adjustment layer, or it is a folder or channel folder.
- The layer is locked or hidden.
- You are painting on a mask surface or in quick mask.
- The layer has alpha lock on.

![Filter window](/img/captures/layers-filter-window.png)

## History panel

Click a history row to jump to that step. You can move several steps at once with undo and redo. Earlier steps appear dimmed. Moving through history is blocked while a filter preview is showing.

## Duplicate and merge

| Action | Key | Description |
|---|---|---|
| Merge down | `Ctrl+E` | Merges the active layer with the layer directly below it. The result takes the blend, opacity, visibility, and clipping of the layer below |
| Merge visible | Right-click menu | Merges the visible layers that are **connected** in the same folder. It is refused if a hidden layer sits between them |
| Bake effects to pixels | Effects window | See the layer effects section above |

To duplicate, use `Duplicate` in the layer menu. Duplicating also copies the mask. A merge is one step of undo.

## Auto layer splitting

Splits a texture into folders by colour and position rules. Use it when you want to paint the skin, cloth, and decorations of a clothing texture separately.

**Opening**: `⋯` in the window, or `Auto split layers…` in the layer right-click menu. You can also open it from the menu at `Tools/StudioRaming/MingPainter/Auto Split Layers…`. It is dimmed when there is no document, when the document has no pixels, or for a channel document.

### Steps

1. Choose the **input**: `Source file`, `Canvas being edited`, or `Import result`. If the import result differs from the file, a yellow line tells you.
2. Press **Suggest**. This creates part rules from the image. The current rules are replaced.
3. Check the regions with `Part colours` in the preview. Zoom with the wheel and move with the middle button. Click a part to select it.
4. Edit the rules if needed.
   - Turn on `Click split`, then click the preview. The selected part is split off by its colour into a new part.
   - `Merge`: select one part, then Ctrl+click a second part to combine them.
   - Edit the `Name`, `Up` / `Down` (priority and layer order), and the colour, saturation, and brightness tolerances.
5. Press **Apply**.

### What appears after Apply

One folder is created for each part. The first part in the rule order appears at the top.

- The folder has a mask.
- Inside the folder are `Source pixels` (only that part, taken from the original) and an empty `Fill` layer clipped above it.
- The original layer is hidden and moved to the bottom. It is not deleted.
- The whole Apply is one step of undo.

### Settings

| Setting | Meaning |
|---|---|
| Output size | Mask resolution: document size, 1/2, or 1/4. Smaller sizes make the edges rougher |
| Min region | Point regions smaller than this are merged into a neighbouring part (0 turns it off) |
| Keep the largest region per part | When on, small parts do not disappear |

### Regenerate

After you change the rules, press `Regenerate`. It finds the folders from the previous split and recreates only their masks and `Source pixels`. The painting on the `Fill` layers, the folder names, and the order stay the same. Folders for parts that no longer exist are kept, not deleted.

### Saving rules and RGB masks

- `Save rules…` and `Load rules…` exchange rules as a file.
- `Export RGB mask…` saves three parts into the R, G, and B channels of a PNG. The file name is `<original texture>_parts<number>.png`.
- You can link the first sheet to the active texture slot of the material. If the material is read-only, it is not linked and only the file is saved.

![Auto split layers window](/img/captures/layers-autosplit-window.png)

![Layer panel after Apply](/img/captures/layers-autosplit-result.png)

## Not in this version

Documents are limited to 4096 pixels per side. Bevel and emboss, satin, smart objects, and 16-bit images are not supported.
