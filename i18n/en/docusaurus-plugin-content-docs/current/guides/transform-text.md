---
id: transform-text
title: Transform, text, ruler, and stamp
sidebar_label: Transform, text, ruler, and stamp
sidebar_position: 8
---

# Transform, text, ruler, and stamp

**After reading this page** you will be able to move, stretch, and rotate an image, write text as a layer, line up strokes with a ruler, and stamp decorations and patterns.

## Transform

The move · transform tool (`V`, `Ctrl+T`) lifts the selected area as a floating image, which you can move, stretch, and rotate. When there is no selection, the whole layer is the target. Layer pixels do not change until you apply.

### Transform modes

| Mode | What it does |
|---|---|
| Scale and rotate | Drag a corner to resize. Drag outside a corner to rotate. `Shift` frees the ratio, and rotation snaps in 15-degree steps. `Alt` scales around the centre |
| Distort | Moves the four corners separately |
| Warp | Drags grid points to bend the surface. Choose a 3×3, 4×4, or 5×5 grid |

The transform bar has the three modes, `Flip horizontally`, `Flip vertically`, three grid sizes (only in Warp), `Apply`, and `Cancel`. When the window is narrow, the bar wraps by group.

- `Enter` applies and `Esc` cancels. Applying is one step of undo, `Transform`.
- Picking another tool applies the transform. You cannot select another layer during a transform. Press `Enter` or `Esc` first.
- You cannot start a transform on a locked layer, a folder, a layer with alpha lock, a mask surface, or in quick mask. The status line gives the reason.

![3D transform handles](/img/captures/transform-3d-handles.png)

![Warp grid](/img/captures/transform-warp-grid.png)

### Placing an image on 3D from the screen

Pick `Add image…` from the Scene view right-click menu. Choose an image file, and a transform box opens that projects the image onto the model surface as seen from the Scene view. The first frame is placed in the centre of the Scene view. If it is larger than 60% of the view, it is scaled down. Even if you rotate the camera, the image stays at the angle it was first placed.

## Copy, cut, and paste

| Command | Default key | What it does |
|---|---|---|
| Copy | `Ctrl+C` | Puts the pixels of the selection on the MingPainter clipboard. The layer does not change |
| Cut | `Ctrl+X` | Copies and clears the same area. You can undo this in one step |
| Paste | `Ctrl+V` | Pastes the clipboard image onto the current layer, in a transformable state. Applying it is one step, `Paste` |

- The MingPainter clipboard works only inside the program. It is not the operating system clipboard.
- Cut is refused on locked layers and alpha-locked layers. Copy and cut are refused in quick mask.
- If the clipboard is empty, the message `Nothing to paste: copy something first` appears.

### Add image

Imports an image file as a new layer, and pastes it in a transformable state. There are two menu items.

- `Add image…`: Pastes onto the model. It uses the 3D projection described above.
- `Paste image onto UV…`: Pastes onto the UV texel plane.

Both items are in the right-click menus of the Scene view and the UV canvas. It reads PNG, JPG, TGA, BMP, and GIF (first frame). It fails if the long side is over 8192 pixels. WebP is not supported. The history records it as `Add image`.

## Text

The text tool (`T`) starts input when you click the canvas. Applying creates a text layer. The text window opens at the same time as input starts.

### Text window

| Block | What it does |
|---|---|
| Scope | `Applies to the selected characters` or `Applies to new characters (nothing selected)`. If the selected characters have different values, `The selected characters differ` appears |
| Font | A list with a search box. The first entry is the default font. Fonts not in the list are drawn with the default font |
| Size, Colour, Bold, Italic | Applied only to the characters in scope |
| Vertical writing, Follow a path | Writes vertically, or along a line you drew |
| Line spacing, Letter spacing, Align | Spacing between lines and between characters, and left, centre, or right alignment. In vertical writing, the options are top, centre, and bottom |
| Outline | Thickness and colour |
| Apply, Cancel, Rasterize | See `Apply and rasterize` below |

- When you select characters, only the item you changed applies to the selected run. Other colours and sizes stay as they are.
- With no selection, the changes apply to the characters you type next.

![Text window](/img/captures/text-window.png)

![Text window, narrow](/img/captures/text-window-narrow.png)

### Input and keys

- Composing IME text appears underlined, and does not enter the text layer until you apply it. The underline and caret appear only on the UV canvas.
- `Ctrl+Enter` applies. Press `Esc` twice to cancel. The first `Esc` stops input. The status chip shows the current key.
- If you have typed no characters, no layer is created.

![Text input and caret](/img/captures/text-caret-uv.png)

### Vertical writing and following a path

- In vertical writing, Korean, Chinese, and Japanese characters are written upright, and Latin letters and digits are rotated sideways.
- Turn on `Follow a path`, then drag across the model surface in the Scene view or on the UV canvas. A line is drawn, and the characters are placed along it. If the line is too short, `The path is too short` appears. If you click where there is no model surface, `The click did not hit the model surface` appears.

### Apply and rasterize

- Applying with `Ctrl+Enter` creates a text layer. A text layer keeps its text data, so you can edit it again.
- The `Rasterize` button turns a text layer into normal pixels. After that, the text cannot be edited.
- If you paint on top of a text layer and then apply it again, the text is redrawn and those pixels are removed. The status line tells you this.
- Text can be written only to colour layers. It cannot be written during mask editing or in quick mask.
- If a font cannot be found, it is drawn with another font, and `The font was not found; another font was used` appears.

## Ruler

The ruler tool aligns your strokes to straight lines, curves, parallel lines, concentric circles, and radial lines. There are five ruler subtools.

| Ruler | Shape |
|---|---|
| Straight ruler | A straight line through two points. It extends to the edge of the view |
| Curve ruler | A curve through the points you place |
| Parallel ruler | Draws a guide of parallel lines |
| Concentric ruler | Draws a guide of concentric circles |
| Radial ruler | Draws a guide of radial lines from one point |

### Creating and moving

- Press and drag on the screen with the ruler tool to create a ruler. If there is no ruler, the chip shows `There is no ruler. Draw one with a ruler sub tool`.
- Drag a ruler handle to move the ruler.
- There is one ruler per view. There is one in the Scene view, and one for each UV canvas document. It lasts only for the editing session and is not saved to the `.mpd` file.

### Mode chip and snapping

- When a ruler exists, a chip appears at the top centre. Each click on the chip cycles through `Ruler shown` → `Ruler shown with snapping` → `Ruler off`. The shortcut is `Ctrl+Alt+R`.
- With snapping on, a stroke point within 16 pixels of the ruler snaps onto it. On the UV canvas, distances are measured in texels.

![Stroke snapped to a ruler](/img/captures/ruler-snap.png)

![Ruler mode chip](/img/captures/ruler-chip.png)

## Decoration, stamp, and pattern

The decoration, stamp, and pattern tool has no default key. Set its key in the key assignment settings.

### Decoration

A decoration is a brush that uses a decorative image as its tip. Built-in decorations include `Star`, `Sparkle cross`, `Dot ring`, `Leaf sprig`, `Petal`, and `Confetti`. Use it like a normal brush by pressing and dragging.

### Stamp {#stamps}

- **Registering**: Use `Register as a stamp…` in the `⋯` menu of the 2D canvas window. Give it a name and register it. An empty drawing is not registered.
- **List**: The `Stamp` window opens together with the tool. At the top it shows the count and the limit (for example, 12 / 60, with a limit of 60). When the list is full, the message `The stamp list is full` appears. Click a row to pick it. `Clear` asks for confirmation.
- **Properties**: `Pick a stamp`, `Paint in the drawing colour` (on by default), and `Show a preview` (on by default). The preview shows a translucent image under the pointer and another at the next position in the direction of travel.

![Stamp window](/img/captures/stamp-window.png)

![Stamp window when the list is full](/img/captures/stamp-window-full.png)

### Pattern

- **8 built-in patterns**: Dots, staggered dots, stripes, checker, gingham check, houndstooth, argyle, and fine grid.
- **My patterns**: Shown only when you have user patterns (`My patterns`).
- **Properties**: `Pick a pattern`, `Pattern size` (default 64 pixels), `Strength` (default maximum), `Mode` (Multiply is the default, then Subtract and Height), and `Invert` (default off).

![Pattern window](/img/captures/pattern-window.png)
