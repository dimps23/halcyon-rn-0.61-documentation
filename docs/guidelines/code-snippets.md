---
id: code-snippets
title: Code snippets (VSCode)
sidebar_label: Code snippets (VSCode)
---

## Generate
https://snippet-generator.app/

## Components

  These are the snippet I use for lowly components.
  Paste this inside javascriptreact.json

  ```js
  "Head": {
    "prefix": "<Head />",
    "body": [
      "<Head",
      "  headStyle",
      "  leftComponent",
      "  leftStyle",
      "  title",
      "  fontFamily",
      "  size",
      "  color",
      "  titleButton",
      "  titlePress",
      "  titleContainerStyle",
      "  rightComponent",
      "  rightStyle",
      "/>"
    ],
    "description": "Head"
  },
  "Paragraph": {
    "prefix": "<Paragraph />",
    "body": [
      "<Paragraph",
      "  fontFamily",
      "  fontSize",
      "  color",
      "  textStyle",
      "  text",
      "/>"
    ],
    "description": "Paragraph"
  },
  "Input": {
    "prefix": "<Input />",
    "body": [
      "<Input",
      "  value",
      "  placeholder",
      "  onChangeText",
      "  borderRadius",
      "  spacing",
      "  shadow",
      "  elevation",
      "  leftIcon",
      "  leftIconSize",
      "  leftBorderColor",
      "/>"
    ],
    "description": "Input"
  },
  "FlatList": {
    "prefix": "flatlist",
    "body": [
      "<FlatList",
      "  data={}",
      "  keyExtractor={(item, index) => index}",
      "  renderItem={/* Render Component | preferred the use of PureComponent for performance reasons */}",
      "/>"
    ],
    "description": "FlatList"
  },
  "onPress": {
    "prefix": "onPress",
    "body": [
      "onPress={() => }"
    ],
    "description": "onPress"
  },
  ```