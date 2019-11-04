---
id: styling
title: Coding
sidebar_label: Styling
---

## Styling

### Colors

When developing UIs, we often find ourselves reusing the same colors in multiple places in the UI. If the colors have to be updated, they likely have to be updated across the board. So it's good practice to store the color definitions in variables instead of hard coding them inside styles.

```js
const black = '#000000';
```

### Using StyleSheet

It's (subjectively) good practice to separate styles from the view layout, when possible.

If inline styles only contain variable values, the style is considered acceptable because it's sometimes necessary to set styles based on state or props

### Multiple Styles

Achieve this by doing :

```js
style={[styles.firstStyle, otherStyle.secondStyle]}
```

or on StyleSheet

```js
const styles = StyleSheet.create({
  container: {
    ...GLOBAL.flex1,
    ...GLOBAL.spaceAround,
    ...GLOBAL.justifyCenter
  }
})
```

useful when you have multiple styles for the component joining styles