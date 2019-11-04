---
id: code-structuring
title: Code structuring
sidebar_label: Code structuring
---

The first thing we’ll study is the building blocks of code.

## Proper placement

  This is an important rule when building apps. Proper placement of imports, variables, class and functions inside a file. Here's the structure you must follow :

  ### Imports
  
  Imports **should** always be on top! But also keep in mind that importing custom components or styles have a proper placement too.
  
  Here are the proper placements for imports :

  - `React` or 
    ```js
    import React, { Component } from 'react'
    ```
    must be at the very top.

  - Packages imports like
    ```js
    import {
      View,
      StyleSheet,
      TouchableOpacity,
    } from 'react-native'

    import {
      Container,
    } from 'native-base'

    import LinearGradient from "react-native-linear-gradient";

    import Icon from "react-native-vector-icons/FontAwesome5";
    ```

  - Custom components
    ```js
    import { Paragraph, Head } from "../../components";
    ```

  - Styles
    ```js
    import {
      COLOR,
      GLOBAL,
    } from "../../config/constants/themes";
    ```

  ### Variables

  Variables must be defined after `imports`. Also if you declare a value like colors it must be before `styles` variable eg.

  ```js
  const gradient = ['#283048', '#859398'];

  const headerColor = '#859398';

  const styles = StyleSheet.create({
    centerTextContainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    childTextContainer: {
      flex: 1,
      alignItems: 'center',
    },
  });
  ```

  ### Class

  Inside a class there is also a structure. It follows `all-variables-on-top` rule. Means all functions, state, etc.. must be before the `render()` method.
  ```js
  class Home extends Component {
    render() {
      return (
        ...
      )
    }
  }

  export default Home;
  ```

  ### Functions

  - Functions inside a class must be before the `render()` method and after `lifeCycle` methods

  ```js

  class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ...
      }
    }

    /* lifeCycle methods here like componentDidMount() */

    /* functions */

    buttonPress = () => {
      // statement
    }

    render() {
      return (
        ...
        // call from here this.buttonPress();
      )
    }
  }

  export default Home;
  ```