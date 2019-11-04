---
id: time-elapsed
title: timeElapsed()
sidebar_label: timeElapsed()
---

## Overview

  This helper formats dates to elapsed time. This returns a `string`. It requires you to send `date` as a parameter.

## Usage

  ```jsx
  timeElapsed(date)
  ```

  - date
    - **required**
    - type: `date`

  ### Example use

  ```jsx
  import { timeElapsed } from "../helpers";

  import { Paragraph } from "../components";

  <Paragraph
    fontFamily="roboto-light"
    size={20}
    color={COLOR.BLACK}
    text={timeElapsed(new Date('May 15 2019 17:45:00 GMT+0800 (Philippine Standard Time))')}
  />
  ```
  > This will render the `elapsed time` from **`now`**.
  ```
  // weeks
  1 week ago.
  2 weeks ago.

  // days
  1 day ago.
  5 days ago.

  // hours
  1 hour ago.
  18 hours ago.

  // minutes
  1 minute ago.
  30 minutes ago.

  // seconds
  1 second ago.
  45 seconds ago.
  ```

