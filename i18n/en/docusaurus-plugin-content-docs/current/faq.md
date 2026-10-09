---
id: faq
title: FAQ
sidebar_label: FAQ
sidebar_position: 91
---

# FAQ

### Can I use it on macOS or HDRP? {#macos-or-hdrp}

No. The supported range is Windows with the Built-in (BRP) or URP pipeline. For details, see [Installation](/getting-started/installation#supported-versions-and-pipelines).

### Does the original texture file change? {#original-texture-file}

No. MingPainter never overwrites the original texture file. When you save, `<name>_paint.png` is created next to it, and the material's texture slot points to that PNG. To revert, see [Save and recover](/guides/save-recover#revert-to-the-original).

### Do unsaved changes disappear when I close and reopen Unity? {#unsaved-changes}

If the recovery folder has a record for each stroke, you can recover the work when you open it again. For how to recover, see [Save and recover](/guides/save-recover#recovery).

### What happens if a file with the same name already exists? {#same-name-file}

If a `.mpd` or `_paint.png` with the same name already exists, it is not overwritten. A ` 2` is added to the name instead. For the save folder rules, see [Save and recover](/guides/save-recover#save-order-and-location).
