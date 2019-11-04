---
id: input
title: <Input />
sidebar_label: <Input />
---

## Overview

TextInput props supported. See **[TextInput props](https://facebook.github.io/react-native/docs/textinput#props)** for more info

  - ### example of using TextInput props

  ```diff
  <Input
    value={email}
    placeholder="Email"
    onChangeText={v => this.setState({ email: v })}
    borderRadius={4}
    spacing={10}
    shadow
    elevation={2}
    leftIcon="envelope"
    leftIconSize={14}
    leftBorderColor={COLOR.BLACK}
  + keyboardType="email-address" // this is a TextInput prop
  + autoCapitalize="none" // this is also a TextInput prop
  />
  ```

  ## Usage
  
  ### no shadow/border

  ```js
  <Input
    value={email}
    placeholder="Email"
    onChangeText={v => this.setState({ email: v })}
    spacing={10}
    leftIcon="envelope"
    leftIconSize={14}
    leftBorderColor={COLOR.BLACK}
    keyboardType="email-address"
  />
  ```

  > This would produce something like this ![alt-text](assets/input-without-border.png)

  ### with shadow

  ```jsx
  <Input
    value={email}
    placeholder="Email"
    onChangeText={v => this.setState({ email: v })}
    spacing={10}
    shadow
    elevation={1}
    leftIcon="envelope"
    leftIconSize={14}
    leftBorderColor={COLOR.BLACK}
    keyboardType="email-address"
  />
  ```

  - `shadow` prop has been passed with a value of `true`

  - `elevation` prop will be required if shadow is `true`
    >
    > This would produce something like this ![alt-text](assets/input-with-shadow.png)

  ### with border
  
  ```js
  <Input
    value={email}
    placeholder="Email"
    onChangeText={v => this.setState({ email: v })}
    spacing={10}
    borderWidth={0.7}
    borderColor={COLOR.BLACK}
    leftIcon="envelope"
    leftIconSize={14}
    leftBorderColor={COLOR.BLACK}
    keyboardType="email-address"
  />
  ```

  - `borderWidth` : pass the thickness of the border
  - `borderColor` : required! otherwise it returns transparent

    > This would produce something like this ![alt-text](assets/input-with-border.png)

## Props

  ### backdropColor

  ```
  backdropColor :   string  | optional |  COLOR.LIGHT
  ```
  - the background color of the input

  ---

  ### shadow

  ```
  shadow :    bool    | optional |  false
  ```
  - if true `elevation` will be required for the `shadow` to work.

  ---

  ### elevation

  ```
  elevation :   number  | optional |  0
  ```
  - `nullified` if `shadow` is `false`. (so it is dependent on the shadow prop).

  ---

  ### spacing

  ```
  spacing :   number  | optional |  5
  ```
  - used in multiple instances like *left and right padding of* `<Input />` container, spaces between components inside `<Input />` and many more. See the source code for reference **`(components/inputs/Input.jsx)`**

  ---

  ### borderRadius

  ```
  borderRadius :    number  | optional |  0
  ```
  - `borderRadius` of the container.

  ---

  ### borderWidth

  ```
  borderWidth :   number  | optional |  0
  ```
  - if it has a value you need to pass `borderColor` prop otherwise it will return a `transparent` color.

  ---

  ### borderColor

  ```
  borderColor :   string  | optional |  COLOR.TRANSPARENT | 'transparent'
  ```
  - **required!** if `borderWidth` has value otherwise it returns `transparent`.

  ---

  ### leftButton

  ```
  leftButton :    bool    | optional |  false
  ```
  - if `true` `leftIcon` can be tapped.

  ---

  ### leftButtonPress

  ```
  leftButtonPress :   func    | optional |  () => {}
  ```
  - the tap response if `leftButton` is `true`.

  ---

  ### leftIcon

  ```
  leftIcon :    string  | optional |  ''
  ```
  - uses react-native-vector-icons/FontAwesome5 | name of the icon you want to use. see **[font awesome icons](https://fontawesome.com/icons?d=gallery)** to see what icon names you can use.

  ---

  ### leftIconSize

  ```
  leftIconSize :    number  | optional |  20
  ```
  - the `size` of the left `icon`.

  ---

  ### leftIconColor

  ```
  leftIconColor :   string  | optional |  COLOR.BLACK
  ```
  - the `color` of the left `icon`.

  ---

  ### leftBorderColor

  ```
  leftBorderColor :   string  | optional |  ''
  ```
  - if it has a value `leftBorderThickness` will be needed for this to work.

  ---

  ### leftBorderThickness

  ```
  leftBorderThickness :   number  | optional |  0
  ```
  - `nullified` if `leftBorderColor` has no `value`. (dependent on the `leftBorderColor` prop).

  ---

  ### rightButton

  ```
  rightButton :   bool    | optional |  false
  ```
  - if `true` `rightIcon` can be tapped.

  ---

  ### rightButtonPress

  ```
  rightButtonPress :    func    | optional |  () => {}
  ```
  - the tap response if `rightButton` is `true`.

  ---

  ### rightIcon

  ```
  rightIcon :   string  | optional |  ''
  ```
  - uses react-native-vector-icons/FontAwesome5 | name of the icon you want to use. see **[font awesome icons](https://fontawesome.com/icons?d=gallery)** to see what icon names you can use.

  ---

  ### rightIconSize

  ```
  rightIconSize :   number  | optional |  20
  ```
  - the `size` of the right `icon`.

  ---

  ### rightIconColor

  ```
  rightIconColor :    string  | optional |  COLOR.BLACK
  ```
  - the `color` of the right `icon`.

  ---

  ### rightBorderColor

  ```
  rightBorderColor :    string  | optional |  ''
  ```
  - if it has a value `rightBorderThickness` will be needed for this to work.


  ---

  ###rightBorderThickness

  ```
  rightBorderThickness :    number  | optional |  0
  ```
  - `nullified` if `rightBorderColor` has no value. (dependent on the `rightBorderColor` prop).

  ---

  ### value

  ```
  value :   string  | required |  
  ```
  - the `value` of the `TextInput`.

  ---

  ### onChangeText

  ```
  onChangeText :    func    | required |  
  ```
  - `callback` when `text` is changed or you write something.

  ---

  ### placeholder

  ```
  placeholder :   string  | optional |  ''
  ```
  - the `placeholder` of the `input`.

  ---

  ### placeholderColor

  ```
  placeholderColor :    string  | optional |  COLOR.GRAY
  ```
  - the `color` of the `placeholder` defaults to `gray`.

  ---

  ### secureText

  ```
  secureText :    bool    | optional |  false
  ```
  - if `true` `text` value would be `hidden`. (used mostly for passwords).

  ---
  
  ### center

  ```
  center :    bool    | optional |  false
  ```
  - centers the `value/placeholder`.

  ---

  ### inputSize

  ```
  inputSize :   number  | optional |  12
  ```
  - `size` of the `font` of the `value/placeholder`.

  ---

  ### fontFamily

  ```
  fontFamily :    string  | optional |  'roboto-regular'
  ```
  - `fontFamily` of the `value/placeholder`.

  ---

  ### fontColor

  ```
  fontColor :   string  | optional |  COLOR.BLACK
  ```
  - `color` of the `value/placeholder`.

  