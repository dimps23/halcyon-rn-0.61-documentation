---
id: head
title: <Head />
sidebar_label: <Head />
---

## Overview

`<Head />` is a customized component from `native-base` `<Header />` component.

Simplified usage by making you pass props instead of the whole
```js
<Header>
  <Left>
    // some component
  </Left>
  <Body>
    // some component
  </Body>
  <Right>
    // some component
  </Right>
</Header>
```
component from `native-base`

## Usage

  ```js
  import { Head } from '../components'

  <Head
    headStyle={{ backgroundColor: COLOR.BLACK }}
    leftComponent={(
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={GLOBAL.padding5}>
          <Icon name="bars" color={COLOR.LIGHT} size={20} />
        </View>
      </TouchableOpacity>
    )}
    title="Some header you got here"
    fontFamily="roboto-light"
    size={20}
    color={COLOR.LIGHT}
  />
  ```
  This would produce something like this ![alt-text](assets/header.png)

## Props

  ### headStyle

  ```
  headStyle :   object  | optional |  {}
  ```
  - the style of the container

  ---

  ### leftComponent

  ```
  leftComponent :   element | optional |  <View />
  ```
  - the component on the left side of the `<Head />`.
  
    > single element not children but you can pass multiple elements if you wrap them with
    >```js
    ><View>
    >   <View />        // element
    >   <Paragraph />   // element
    ></View>
    >```

  ---

  ### leftStyle

  ```
  leftStyle :   object  | optional |  GLOBAL.flex0
  ```
  - The style object of the `leftComponent` prop container.

  ---

  ### title

  ```
  title :   string  | required |  
  ```
  - The `text` that will be displayed on the header.

  ---

  ### fontFamily
  
  ```
  fontFamily :    string  | optional |  'roboto-regular'
  ```
  - The fontFamily for the `title` prop text.

  ---

  ### size

  ```
  size :    number  | optional |  20
  ```
  - The size of the font for the `title` prop text.

  ---

  ### color

  ```
  color :   string  | optional |  COLOR.BLACK
  ```
  - The color of the font for the `title` prop text.

  ---

  ### titleButton

  ```
  titleButton :   bool    | optional |  false
  ```
  - Specifies if the `title` can be clickable.

  ---

  ### titlePress

  ```
  titlePress :    func    | optional |  () => {}
  ```
  - Callback when `titleButton` is true and pressed.

  ---

  ### titleContainerStyle

  ```
  titleContainerStyle :   object  | optional |  {}
  ```
  - The style object of the `title` prop container.

  ---

  ### rightComponent

  ```
  rightComponent :    element | optional |  <View />
  ```
  - The component on the right side of the `<Head />` .

  ---

  ### rightStyle

  ```
  rightStyle :    object | optional |  {}
  ```
  - The style object of the `rightComponent` prop container.
