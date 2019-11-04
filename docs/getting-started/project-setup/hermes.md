---
id: hermes
title: Configure android to use Hermes JavaScript engine
sidebar_label: Hermes JavaScript engine
---

Hermes improves React Native performance by decreasing memory utilization, reducing download size, and decreasing the time it takes for the app to become usable or “time to interactive” (TTI).

## Configure

To enable Hermes go to `android/app/build.gradle` and setting it to true

```diff
project.ext.react = [
    entryFile: "index.js",
-   enableHermes: false, // clean and rebuild if changing
+   enableHermes: true, // clean and rebuild if changing
]
```