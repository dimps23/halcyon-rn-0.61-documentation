---
id: image-preloading
title: Fast Image
sidebar_label: Image Preloading
---

### Image Preloading

## What is Preloading
When an image is preloaded in the app, the user can play around with the app while having extremely faster loading times. Preloading happens before the app renders.


## Usage
```jsx
FastImage.preload([
    {
        uri: 'https://facebook.github.io/react/img/logo_og.png',
        headers: { Authorization: 'someAuthToken' },
    },
    {
        uri: 'https://facebook.github.io/react/img/logo_og.png',
        headers: { Authorization: 'someAuthToken' },
    },
])
```