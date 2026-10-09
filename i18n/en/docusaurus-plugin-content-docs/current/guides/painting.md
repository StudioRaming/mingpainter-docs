---
id: painting
title: Painting
sidebar_label: Painting
sidebar_position: 3
---

# Painting

**After reading this page** you will be able to pick a tool and subtool from the tool strip, use colour mixing and dual tips, and set up symmetry and UV seam painting.

Painting tools are gathered on the **tool strip**. When you pick a tool, its subtools and properties appear in the brush tool window.

![Brush cursor and stroke on the model in the Scene view](/img/captures/paint-scene-cursor.png)

## Tool strip

| Tool | Default key (CSP) | Default key (PS) | What it does |
|---|---|---|---|
| Pen | `P` | `P` | Draws crisp, sharp-edged lines |
| Brush | `B` | `B` | Draws with texture and soft blending |
| Airbrush | No default key (can be assigned) | No default key (can be assigned) | Sprays paint |
| Brush collection | No default key (can be assigned) | No default key (can be assigned) | Groups brushes with different textures, such as pencil, charcoal, and sponge |
| Eraser | `E` | `E` | Erases painted pixels |
| Fill | `G` | `G` | Fills an area with a colour or a whole material |
| Eyedropper | `I`, or hold `Alt` | `I`, or hold `Alt` | Picks a colour from the screen |
| Blend (blur, smudge, colour mix) | `J` | `R` | Blurs or drags colour that is already painted |
| Gradient | No default key (can be assigned) | No default key (can be assigned) | Makes a surface where the colour changes gradually |
| Shape | `U` | `U` | Draws lines, rectangles, ellipses, and curves |
| Selection | `M` | `M` | Picks the area that limits where you paint |
| Auto select (magic wand) | `W` | `W` | Selects a region of similar colour in one click |
| Move · transform | `V`, `Ctrl+T` | `V`, `Ctrl+T` | Moves, stretches, and rotates the selected image |
| Text | `T` | `T` | Writes text as a layer |
| Ruler | No default key (toggle with `Ctrl+Alt+R`) | No default key (toggle with `Ctrl+Alt+R`) | Creates a guide that strokes follow |
| Decoration · stamp · pattern | No default key (can be assigned) | No default key (can be assigned) | Stamps decorative images, registered stamps, and repeating patterns |

:::note[Keys can be changed in settings]
You can check the default keys in the [Shortcuts](/reference/shortcuts) table. To change them, use `Shortcuts` in the settings window. → [Settings](/reference/settings)
:::

Tools that are not available yet appear dimmed on the tool strip.

## Subtools

A **subtool** is one brush type inside a tool. Each tool has its own list of subtools. The full list is in [Subtools](/reference/subtools).

For example, the pen tool has `G-pen`, `Round pen`, `Mapping pen`, `Taper pen`, and `Solid pen`.

## Blend tool

The blend tool has three subtools. Use it to mix colour that is already painted, so it spreads naturally.

| Subtool | What it does |
|---|---|
| Blur | Blurs the colour under the brush path |
| Smudge | Drags the colour along the brush path |
| Colour mix | Paints with colour picked up by the brush. The brush picks up the colour underneath and mixes it with the painting colour |

Properties for the blend tool are in the `Blend` section.

| Property section | Property | Meaning |
|---|---|---|
| Blend | Blend method | Blur, smudge, or colour mix |
| Blend | Blur range | How far the blur mixes, in texels (up to 32) |
| Blend | Strength | How far smudge drags the colour |
| Blend | Sample radius | The area colour mix picks colour from |
| Colour mix | Paint amount | How much picked-up colour mixes into the painting colour |
| Colour mix | Persistence | How long the picked-up colour lasts as the stroke gets longer |
| Colour mix | Mixing model | Overall setting, paint, or digital |
| Colour mix | Sample from all layers | When on, picks from the composite colour you see. When off, picks from the layer you are painting on |

- The `Paint` model mixes colour the way real paint does. Mixing yellow and blue moves toward green. The `Digital` model averages the colour values directly. `Overall setting` follows the Mixing tab in the colour panel.
- Blur and smudge do not draw a temporary preview at the end of the stroke while you drag. The last dab is committed when you release the stroke.
- Smudge drags across the UV texel plane. In the Scene view, if the brush crosses several UV islands, only the island under the brush centre is dragged.
- When there is an active selection, blur, smudge, and colour mix all change only inside the selection.

![Properties of the blend tool](/img/captures/blend-properties.png)

![Result comparison of blur, smudge, and colour mix](/img/captures/blend-strokes.png)

## Dual tip

Turn on the second tip in the `Dual tip` section of brush properties. The second tip overlaps the first and shapes the stroke. Use it for rough textures or scattered strokes.

| Property | Meaning |
|---|---|
| Use dual tip | When on, the second tip is used |
| Size ratio | Size of the second tip compared with the first (0.05 to 2 times) |
| Spacing | Distance between the second tip placements |
| Scatter | How much the second tip position is scattered |
| Combine mode | Multiply, darken, lighten, overlay, linear height, or hard mix |

- The combine modes read the alpha channel. They can look different from Photoshop's dual brush.
- Only one second tip image is used.
- Dual tip is not applied to strokes that paint across a UV seam.

![Dual tip properties and stroke](/img/captures/dualtip-properties.png)

## Brush properties

When you pick a tool, the subtool's properties appear in the brush tool window. Use the `Main` and `All` tabs at the top of the tool window to see only the properties you use often, or all of them. Properties are grouped into sections.

| Section | Contents |
|---|---|
| Brush tip | Tip shape, hardness, image tip |
| Size and dynamics | Size, and size changes from pen pressure and other inputs |
| Opacity and flow | Opacity, flow, and their dynamics |
| Spacing and scatter | Spacing, scatter |
| Angle | Tip angle, angle jitter |
| Paper texture | Paper texture |
| Taper | Taper at the start and end of the stroke |
| Stabilizer | Stroke stabilization strength |
| Build-up | Build-up method |
| Blend | Blend-related settings |
| Colour jitter | Colour jitter |
| 3D defaults | Defaults used when painting in the Scene view |
| Blend / Colour mix / Dual tip | The blend tool and dual tip |
| Selection / Fill / Shape / Gradient | The matching tool |

Brush properties are saved separately for each subtool. If you change a subtool and then press `Reset`, it returns to its defaults.

The size slider on the brush bar does not appear for rectangle, ellipse, lasso, polygon, UV island, face, or auto select. These shapes do not use a size. The selection brush and selection eraser do use size.

![Brush properties window](/img/captures/paint-brush-properties.png)

## Pen pressure

Pen input uses the WinTab path and the Unity pen event path on Windows. If the pen is not detected, see [Troubleshooting](/troubleshooting#pen-is-not-detected).

How pressure affects size and opacity differs for each subtool. You set it in the `Size and dynamics` and `Opacity and flow` sections. The pen's own pressure calibration is set in the `Pen and input` tab of the settings window. → [Settings](/reference/settings)

![Pen calibration pad in the settings window](/img/captures/settings-pen-pad.png)

## Stabilizer

Set the strength in the `Stabilizer` section of brush properties. It is saved separately for each subtool. For example, the default stabilizer strength for `Taper pen` is 0.2.

## Symmetry {#symmetry}

Turn on X, Y, or Z axis symmetry from the `Symmetry` menu on the brush bar. When you paint one side, the other side is painted too. The symmetry centre and axis are estimated from the model. A symmetry ring appears with the painting cursor. Symmetry settings are kept after a domain reload.

![Symmetry menu and symmetry ring](/img/captures/paint-symmetry.png)

## Painting back faces

Turn on `Paint back and hidden faces` in brush properties to paint faces hidden from the camera, including back faces. When it is off, only visible faces are painted.

## Painting across UV seams

When you paint on the UV canvas, a stroke crosses the boundary of a UV island and continues onto the neighbouring face. You can paint across two islands that are connected on the model in one stroke.

- It is on by default. Turn it on or off with the `Across seams` toggle on the UV canvas.
- It works only when surface information for the model is available.
- It does not cross faces that bend sharply, by more than 120 degrees.

![A stroke continuing across a UV seam](/img/captures/paint-seam-crossing.png)

## Shortcuts

For the full list of shortcuts, see [Shortcuts](/reference/shortcuts). There are two shortcut presets, `CSP` and `PS`. Choose one in the settings window.

## Next steps

- For layers and masks, continue to [Layers](/guides/layers).
- For selections that limit where you paint, see [Selection](/guides/selection).
