---
id: paragraph
title: <Paragraph />
sidebar_label: <Paragraph />
---

## Overview

This component makes displaying text easier without adding a lot of text styles on it.

For short this component already does that for you. You only need to pass the `fontFamily`, `size` of the font or fontSize, `color`, `textStyle` (for more textStyles) and the `text` to display.

Text props are supported. See **[Text props](https://facebook.github.io/react-native/docs/text#props)** for more info.

  - ### example of using text props
  ```diff
  <Paragraph
    fontFamily="roboto-bold"
    color={COLOR.LIGHT}
    size={36}
    text="Lowly."
  + numberOfLines={1} // this is a Text prop
  + ellipsizeMode="middle" // this is a Text prop
  />
  ```

## Usage

  ```js
  <Paragraph
    fontFamily="roboto-bold"
    size={35}
    color={COLOR.LIGHT}
    text="Lowly."
  />
  ```

  > This would display `Lowly.` as a text.

## Props

  ### fontFamily

  ```
  fontFamily :    string  | optional |  'roboto-regular'
  ```
  - The `fontFamily` for the `text`.

  ---

  ### size

  ```
  size :    number  | optional |  12
  ```
  - The `size` of the `text`.

  ---

  ### color

  ```
  color :   string  | optional |  COLOR.BLACK
  ```
  - The `color` of the `text`.

  ---

  ### textStyle

  ```
  textStyle :   object  | optional | {}
  ```
  - Here you can add more text styles like `textAlign: 'center'`

  ---

  ### text

  ```
  text :    string  | optional | ''
  ```
  - The `text` you want to display.