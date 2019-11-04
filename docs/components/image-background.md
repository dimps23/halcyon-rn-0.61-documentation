---
id: image-background
title: <ImageBackground />
sidebar_label: <ImageBackground />
---

## Overview

This component uses FastImage as the image render engine. If you followed the image caching using FastImage then this would work well with you. Adds image background on your component.

## Usage

  ```jsx
  import { ImageBackground } from '../components'

  <ImageBackground
    uri={IMAGES["cover_photo.png"]}
    resizeMode="cover"
    style={STYLE.imageBackground}
  >
    // children
  </ImageBackground>
  ```

  - ### uri
    
    

  - ### resizeMode
    Identifies the resize mode for the image. It uses the FastImage resizeMode prop but you only need to pass a string value like `cover`, `contain` etc. since the component identifies it for you.

  - ### style
    Allows you to style the component. See **[layout-props](https://facebook.github.io/react-native/docs/layout-props)** for the available props you can use.

## Props

  ### style

  ```
  style :   object  | required |
  ```
  - `the style of the container.`

---

  ### uri

  ```
  uri :     any     | required |
  ```

  - Using local image

    > `uri={IMAGES["icon.png"]}`

  - Remote image

    you can pass the object which includes the `uri`, `headers` and `priority`. See **[react-native-fast-image](https://js.coach/react-native-fast-image?search=fast-image&collection=React+Native)**
    
    >```js
    >uri={{
    >  uri: 'https://unsplash.it/400/400?image=1',
    >  headers: { Authorization: 'someAuthToken' },
    >  priority: FastImage.priority.normal,
    >}}
    >```

---

  ### resizeMode

  ```
  resizeMode :    string  | required |
  ```
  - Identifies the resize mode for the image. It uses the FastImage resizeMode prop but you only need to pass a string value like `cover`, `contain` etc. since the component identifies it for you.

---

  ### imageBorderRadius

  ```
  imageBorderRadius :   number  | optional | 0
  ```
  - `the borderRadius of the image`

---

  ### children

  ```
  children :      element | optional | <View />
  ```
  - `the stuff you want to render`