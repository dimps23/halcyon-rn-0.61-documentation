---
id: modal-loader
title: <ModalLoader />
sidebar_label: <ModalLoader />
---

## Overview

Use this as a preloader.

## Usage

```js
<ModalLoader
  loading={requestingAuth}
  text="Loading data..."
/>
```

  - ### loading
    Is the trigger prop.

  - ### text
    The text value that will be displayed below the loader.

## Props

  ### loading

  ```
  loading :   bool    | required |  false
  ```
  - triggers the `modal` to `render`.

  ---

  ### text

  ```
  text :    string  | optional |  "Authenticating..."
  ```
  - `text` below the `loader`

  