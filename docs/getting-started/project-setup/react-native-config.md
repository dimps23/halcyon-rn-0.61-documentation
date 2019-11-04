---
id: react-native-config
title: Configure react-native.config.js
sidebar_label: react-native.config.js
---

Create file `react-native.config.js` or copy from `Halcyon RN Starter Kit 0.61+`

We need this to link our font assets to android and iOS

## Contents

```js
module.exports = {
  assets: ['./src/assets/fonts/'],
};
```