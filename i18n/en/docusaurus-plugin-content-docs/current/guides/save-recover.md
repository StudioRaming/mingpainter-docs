---
id: save-recover
title: Save and recover
sidebar_label: Save and recover
sidebar_position: 11
---

# Save and recover

**After reading this page** you will know which files are saved, where they go, how to recover your work after an unexpected shutdown, and how to revert to the original.

## Three kinds of saved files

| File | When it is written | What it holds |
|---|---|---|
| `<original name>_paint.png` | When you save (`Ctrl+S`, the Save button in the window, or the right-click menu). It is created next to the document | The painted texture |
| `.mpd` | Written together with the PNG when you save. It is also the base point for recovery | Layers, masks, adjustments, effects, and undo information |
| Recovery folder | Automatically, each time you finish a stroke | A journal of the changed tiles |

## Save order and location {#save-order-and-location}

Saving works in this order.

1. Writes the `.mpd`.
2. Writes `<name>_paint.png`. On the first save, it copies the import settings of the original.
3. Links the material's texture slot to the new PNG. You can undo this with Unity's Undo.
4. Writes that material to disk.

A material that is read-only because it is inside a model writes only the PNG, and is not linked.

The save folder depends on where the original texture is.

- Normally it is created next to the original. If the original is outside `Assets/`, it is created in `Assets/MingPainter/`.
- If the original is a texture in the shader package or the shader's default texture, it is created in the **material folder**. This keeps working files out of the package folder when the shader is updated. If the material is outside `Assets/`, it goes to `Assets/MingPainter/`.
- If a `.mpd` or `_paint.png` with the same name already exists, a ` 2` is added to the name.

## PNG save rules

- The original texture file is never overwritten.
- The saved PNG matches the original's decoded bytes, and only the changed parts get wider padding. If nothing changed, the PNG is byte-identical to the original.
- If the original cannot be read, the whole image is padded and a warning is logged.

## Recovery {#recovery}

Each time you finish a stroke, the changed tiles are added to the recovery folder. When you open the document again, the journal is applied to the base point, and you return to the last state.

- The base point is the last saved `.mpd`. A document that has never been saved uses the checkpoint `.mpd` written when the document was created. Recovery still works if the original texture has changed.
- Before you enter Play mode, a recovery record is written first. Painting pauses in the meantime.

### Recovering work

When you first open the window after starting Unity, if there is work to recover, it asks `Recover`, `Later`, or `Discard`. The top of the window's list shows how many items can be recovered, and each row has Recover and Discard buttons. A damaged record can only be discarded. A recovered document asks whether to save when you close it, even if nothing changed.

![List of work to recover](/img/captures/recover-list.png)

## Revert to the original {#revert-to-the-original}

MingPainter never changes the original file. There are two ways to revert.

| Button | What it does |
|---|---|
| Back to the original texture | Sets the material's texture slot back to the original texture recorded in the `.mpd`. The document stays open. You can cancel this with Unity's Undo |
| Back to the original material | Makes the renderer point to the original material again, instead of the material copy used for painting. The copy and the texture file are kept |

![_paint.png in the Project window after saving](/img/captures/save-paint-png-project.png)
