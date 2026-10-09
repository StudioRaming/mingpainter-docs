---
id: installation
title: Installation
sidebar_label: Installation
sidebar_position: 1
---

# Installation

**After reading this page** you will know how to add MingPainter to a Unity project, prepare the environment, and remove it when needed.

## How to install

**Two ways** are available. Either way, you add the MingPainter package to your project. The closed beta (0.1.0-beta.1) is shipped as a unitypackage only.

1. **unitypackage**: Drag the package file into the Project window of the Unity Editor.
2. **VPM**: Add it from a VCC or VPM repository. This starts with the full release, and the repository address will be listed on this page then.

The package file name follows the format `com.studioraming.mingpainter-<version>.unitypackage`. This page is written for version 0.1.0-beta.1.

![Project window with the package added](/img/captures/install-project-window.png)

## First run

This version has no onboarding window. Start with the steps below.

1. Pick an avatar prefab or a material. The entry methods are described in [Ways to start painting](/getting-started/entry-points).
2. When the painting window opens, pick **Pen** on the tool strip.
3. Drag in the Scene view to paint. To save, press `Ctrl+S`.

![The painting window on first open](/img/captures/first-run-paint-window.png)

## Supported versions and pipelines {#supported-versions-and-pipelines}

| Item | Details |
|---|---|
| Unity version | 2019.4.31f1 to Unity 6 LTS |
| Operating system | Windows |
| Render pipeline | Built-in (BRP), URP |
| Not supported | HDRP, macOS |

## Uninstall

1. Delete the `Assets/StudioRaming/MingPainter` folder in your project.
2. Unity recreates the `Library/StudioRaming/MingPainter/` folder in your project. If unsaved work remains in the recovery folder, save it before you remove the package. → [Save and recover](/guides/save-recover)
3. User data stays in `%APPDATA%\StudioRaming\MingPainter`, outside the project. Deleting the package does not delete this folder automatically. It holds your brush library, profiles, and gradient list.
