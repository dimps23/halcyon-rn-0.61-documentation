---
id: date-formatter
title: dateFormatter()
sidebar_label: dateFormatter()
---

## Overview

  This little helper formats dates. This returns a `string`. It requires you to send two(2) parameters which is `date` and `format`.

## Usage

  ```jsx
  dateFormatter(date, format)
  ```

  - date
    - **required**
    - type: `date`

  - format
    - **required**
    - type: `string`

  ### Example use

  ```jsx
  import { dateFormatter } from "../helpers";

  import { Paragraph } from "../components";

  /* to display current date with a format of MM/DD/YYYY */

  <Paragraph
    fontFamily="roboto-light"
    size={20}
    color={COLOR.BLACK}
    text={dateFormatter(new Date(), 'MM/DD/YYYY')}
  />
  ```
  > This will render the date like `5/15/2019`.

## Formats

`format` is case sensitive. Watch out for spaces.

- ### MM/DD/YYYY
  returns
  ```
  5/15/2019
  ```

- ### DD/MM/YYYY
  returns
  ```
  15/5/2019
  ```

- ### YYYY/MM/DD
  returns
  ```
  2019/5/15
  ```

- ### Weekday Day, Month Year
  returns
  ```
  Wednesday 15, May 2019
  ```

- ### Month Day, Year
  returns
  ```
  May 15, 2019
  ```

- ### Day Month, Year
  returns
  ```
  15 May, 2019
  ```

- ### Year, Month Day
  returns
  ```
  2019, May 15
  ```

## Error handling

This helper returns an error if `format` is wrong. It will tell you what format you passed onto the helper. So be careful with spelling! 😀😀

  ```
  console.error:"Date Error! with format ${format}"
  ```

  ![alt-text](assets/dateFormatterError.png)

