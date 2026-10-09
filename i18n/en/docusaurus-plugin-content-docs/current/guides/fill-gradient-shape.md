---
id: fill-gradient-shape
title: Fill, gradient, and shape
sidebar_label: Fill, gradient, and shape
sidebar_position: 7
---

# Fill, gradient, and shape

**After reading this page** you will be able to fill an area in one action, make a gradient with colour stops, and draw straight lines and shapes.

## Fill

The fill tool (`G`) has five subtools.

| Subtool | What it does |
|---|---|
| Fill island | Fills the UV island you click |
| Whole layer | Fills the whole layer |
| Whole material | Fills the whole UV area used by the material |
| Enclosed area | Fills the area enclosed by lines |
| Polygon fill | Fills the inside of a polygon made by clicking points |

Fill island and Whole layer respect the density and transparent-pixel lock. Each is one step of undo.

The `Fill` section in the properties has Tolerance, Close gaps, Expand region, Anti-aliasing, Within the island, and Refer to. They have the same names as the auto select properties. → [Selection](/guides/selection)

![Fill subtools and properties](/img/captures/fill-subtools.png)

## Gradient

The gradient tool has no default key. When you pick the tool, the gradient window opens with it. If you close the window, it stays closed until you pick the tool again.

### Gradient window

Blocks run from top to bottom.

| Block | What it does |
|---|---|
| Presets | A search box and `Save`. The list shows up to 5 rows and scrolls. Click a row to apply it. The trash icon at the end of a row deletes it. Built-in presets cannot be deleted |
| Stop strip | Adds, moves, and deletes colour stops. It is the same editor as the gradient map in adjustment layers |
| Even / Flip / Draw colour / Remove | Spaces the stops evenly / flips them left to right / changes the selected stops to the drawing colour (`Alt` uses the background colour) / deletes the selected stops (two always remain) |
| Spread | Appears only for radial gradients. Switch between `Model height %` and `World units` |
| Overall opacity | Opacity of the whole gradient |
| Centre | Appears only in 3D space. X, Y, and Z values, plus `Pick` and `Reset` |
| Apply hint | Shows `Enter to apply · Esc to cancel` only while a preview is showing |

- `Remove` for stops is available only when a stop is selected and there are three or more. `Even` and `Flip` are available when there are two or more.
- Saving a preset opens a dialog that asks for a name.
- After you press `Pick` for the centre, click in the Scene view to set the centre there. `Reset` moves the centre back to the middle of the model area.
- There is no right-click menu. Use the buttons to save and delete.

![Gradient window](/img/captures/gradient-window.png)

### Gradient properties

These are in the `Gradient` section of the tool properties.

| Property | Choices |
|---|---|
| Gradient style | Linear, Radial, Angle, Reflected, Diamond |
| Outside the range | Hold the end colour, Repeat, Mirror |
| Apply to back faces | When on, back faces of the model are painted too |
| Space | Surface, or 3D space |

![Spread distance of a radial gradient](/img/captures/gradient-radial-spread.png)

### Editing with handles on the model

A 3D space gradient shows handles in the Scene view. The centre handle is in the brand colour, the outer handle is white, and the stops use their own colours. Drag the handles to move where the gradient starts and ends. On a radial gradient, dragging the outer handle changes the spread distance value too. The handles cannot be grabbed from the window. On the UV canvas, a surface gradient shows a line from the centre to the end and two handles while it waits for confirmation.

![3D gradient handles](/img/captures/gradient-3d-handles.png)

### Painting and applying

Drag to preview the gradient, then press `Enter` to apply or `Esc` to cancel. The screen shows the `Enter to apply · Esc to cancel` status chip.

When you apply on a mask or quick mask surface, the gradient is written into the values of that surface. The colour is converted to brightness (0.299 R + 0.587 G + 0.114 B) before it is painted. One step of undo. If there is nothing to paint over, only a message appears in the status line: `No area to fill` (not yet matched to a product string).

![Gradient apply chip and result](/img/captures/gradient-commit.png)

### Following a bone in 3D

A gradient in 3D space can follow a bone. When you pick a bone path (not yet matched to a product string), the current line position is saved relative to that bone. When the pose changes, the line moves with the bone. If the bone cannot be found in the scene, the gradient stays at its world position and the status line shows `The bone is not in the scene; the gradient stays in world space`.

- Flat UV gradients do not have a bone option.
- If a bone disappears from the scene and comes back, the positions it moved to in between are discarded, and the line is moved using the old offset from the bone. This is a known limitation.

## Shape

The shape tool (`U`) has six subtools.

| Subtool | Shape |
|---|---|
| Line | Straight line between two points |
| Rectangle | Rectangle |
| Ellipse | Ellipse |
| Polygon | Polygon with several sides |
| Curve | Quadratic curve |
| Curve through points | Curve that passes through the points |

The properties are `Shape`, `Fill`, `Keep proportions`, `From the centre`, and `Sides`. When a shape is waiting for confirmation, `Enter to confirm · Esc to cancel` appears as a status chip.

![Shape subtools and properties](/img/captures/shape-subtools.png)
