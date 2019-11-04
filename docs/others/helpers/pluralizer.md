---
id: pluralizer
title: Pluralizer
sidebar_label: pluralize()
---


## Overview

This helper will pluralizes or singularize a string. It requires a string and a number as a parameter. 

## Usage 

```
pluralize(word,number)
```

  - word
    - **required**
    - type: `string`

  - number
    - **required**
    - type: `number`

## Example use

```jsx
import { pluralizer } from '../pluralizer';

import { Paragraph } from "../components";

<Paragraph
  fontFamily="roboto-light"
  size={20}
  color={COLOR.BLACK}
  text={pluralizer("Follower", 10)}
/>

```


  > This will render `Followers`