---
id: naming-convention
title: Naming Convention
sidebar_label: Naming Convention
---

These naming conventions must be followed for an easier transitions of project for developers. These are the rules for naming :

- No underscore when naming stuff.
- Use camelCase everytime.

## Files

We use **`.jsx`** file extensions if we are dealing with components otherwise just use **`.js`** if it has nothing to do with components like `styles`

  - ### Using camel case
    Everything from variables, class names, functions, etc.. Must be **camel cased**. Files like images are excluded.

## Class
Must start with a capital letter but still camel cased. E.G. **`ProfileSettings.jsx`**

## Functions

Functions are different from a class when it comes to naming convention. It must start with a small letter while still camel cased. E.G **`isPressed = () => {}` so it will not be weird when you call a function.

## Variables

As far as naming conventions for identifiers go, dangling underscores may be the most polarizing in JavaScript. Dangling underscores are underscores at either the beginning or end of an identifier, such as:
```js
var _foo;
```

Whether or not you choose to allow dangling underscores in identifiers is purely a convention and has no effect on performance, readability, or complexity. It’s purely a preference.

So **no**. Do not use dangling underscores when naming variables.

## Prop

When creating custom components we need props to be passed on that component. So, when declaring props for that component use camelCases.

> If you want to some props that are already supported from the component you use on your custom component like you have a CustomComponent that uses a <View /> component from react-native and you want to use their props you can do :
  ```js
  const {
    someProps,
    ...props // this
  } = this.props;

  <View
    someProps
    {...props}
  >
    // This allows you to pass props from <View /> that you didn't declare.
  </View>
  ```

## 