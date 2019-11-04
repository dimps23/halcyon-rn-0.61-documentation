---
id: install-default-packages
title: Install default packages
sidebar_label: Install default packages
---

The necessary packages we need for a smooth transition of projects.

## ESLint

- `ESLint` is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

  - **Installation**
    ```
    npm install eslint --save-dev
    ```

## eslint-config-airbnb

- `Airbnb` This package provides Airbnb's .eslintrc as an extensible shared config.

- Dev tool for better coding.

- airbnb has 4 peer dependencies

  - eslint-plugin-import
  - eslint-plugin-jsx-a11y
  - eslint-plugin-react

    - **Installation**

      First, check the versions of the dependencies by running this on your command line :
      ```
      npm info "eslint-config-airbnb@latest" peerDependencies
      ```

      this will produce something like:

      ```
      { eslint: '^5.16.0 || ^6.1.0',
        'eslint-plugin-import': '^2.18.2',
        'eslint-plugin-jsx-a11y': '^6.2.3',
        'eslint-plugin-react': '^7.14.3',
        'eslint-plugin-react-hooks': '^1.7.0' }
      ```

      Then install their versions with
      ```
      npm install --save-dev eslint-config-airbnb eslint@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
      ```

      > Note that # means the version number of the dependency.
      >
      > If you encounter this error at some point
      > ```
      > npm ERR! No compatible version found: a11y@^6.1.1
      > npm ERR! Valid install targets:
      > npm ERR! 0.5.1, 0.5.0, 0.4.1, 0.4.0, 0.3.3, 0.3.2, 0.3.1, 0.3.0, 0.2.6, 0.2.5, >0.2.3, 0.2.2, 0.2.1, 0.2.0, 0.1.2, 0.1.1, 0.1.0
      > ```
      >
      > Don't panic just change the eslint version to what version it is on your package.json
  

## eslint-plugin-react-native

- `eslint-plugin-react-native` React Native specific linting rules for ESLint.

  - **Installation**
    ```
    npm install --save-dev eslint-plugin-react-native
    ```

## babel-plugin-module-resolver

- `babel-plugin-module-resolver` Used for path formatting.

- This will resolve paths so you wont use:

  *unresolved path*
  ```jsx
  import {
    Container,
  } from '../../../components/base/Container'
  ```

  *resolved path*
  ```jsx
  import {
    Container,
  } from '@base-components'
  ```

  - **Installation**
    ```
    npm install --save-dev babel-plugin-module-resolver
    ```

## eslint-import-resolver-babel-module

- `eslint-import-resolver-babel-module` Used to resolve eslint throwing unresolved path error.

  - **Installation**
    ```
    npm install --save-dev eslint-import-resolver-babel-module
    ```

## @react-native-community/async-storage

- `AsyncStorage` is a simple, unencrypted, asynchronous, `persistent`, key-value storage system that is global to the app. It `should` be `used` instead of `LocalStorage`.
- Used to store data persistently by using keys.
  > e.g `auth sessions`

  - **Install** :
    ```
    yarn add @react-native-community/async-storage
    ```
    > No more linking since react-native 0.61 uses auto linking on build

## lottie-react-native

- Lottie is a mobile library for Android and iOS that parses Adobe After Effects animations exported as JSON with bodymovin and renders them natively on mobile!

  - **Installation**
    ```
    yarn add lottie-react-native
    yarn add lottie-ios@3.1.3
    ```

  - **iOS extra step using pods**
    ```
    cd ios && pod install
    ```

    then
    ```
    cd ../
    ```

## prop-types

- Runtime type checking for React props and similar objects.

  - **Installation**
    ```
    npm install --save prop-types
    ```

## react-native-drawer

- Used for our base component `Drawer`

  - **Installation**
    ```
    npm install --save react-native-drawer
    ```

## react-native-fast-image

- Used as an Image engine for our app. includes (image caching).

  - **Install** :
    ```
    yarn add react-native-fast-image
    ```

## react-native-reanimated and react-native-gesture-handler and react-native-screens@^1.0.0-alpha.23

- Used for react-native-navigation

  - **Installation**
    ```
    yarn add react-native-reanimated react-native-gesture-handler react-native-screens@^1.0.0-alpha.23
    ```
  
  - **Linking**
    ```
    react-native link react-native-gesture-handler
    ```

  - **Android extra step**

    Update your MainActivity.java file (or wherever you create an instance of ReactActivityDelegate), so that it overrides the method responsible for creating ReactRootView instance and then use the root view wrapper provided by this library. Do not forget to import ReactActivityDelegate, ReactRootView, and RNGestureHandlerEnabledRootView:
    ```diff
    package com.swmansion.gesturehandler.react.example;

    import com.facebook.react.ReactActivity;
    + import com.facebook.react.ReactActivityDelegate;
    + import com.facebook.react.ReactRootView;
    + import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

    public class MainActivity extends ReactActivity {

      @Override
      protected String getMainComponentName() {
        return "Example";
      }

    +  @Override
    +  protected ReactActivityDelegate createReactActivityDelegate() {
    +    return new ReactActivityDelegate(this, getMainComponentName()) {
    +      @Override
    +      protected ReactRootView createRootView() {
    +       return new RNGestureHandlerEnabledRootView(MainActivity.this);
    +      }
    +    };
    +  }
    }
    ```

## react-native-keyboard-aware-scroll-view

- A ScrollView component that handles keyboard appearance and automatically scrolls to focused TextInput.

- Used in our base component `Content`

  - **Installation**
    ```
    yarn add react-native-keyboard-aware-scroll-view
    ```

  - **Android extra step**

    On Android `android/app/src/main/Androidmanifest.xml` change `adjustResize` to `adjustPan`

    ```diff
    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme">
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
    +    android:windowSoftInputMode="adjustPan"
        android:launchMode="singleTop">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
    </application>
    ```

## react-native-modal

- An enhanced, animated and customizable react-native modal.

- The goal of react-native-modal is expanding the original react-native Modal component by adding animations and styles customization options while still providing a plain-simple API.

  - **Installation**
    ```
    yarn add react-native-modal
    ```

## react-native-linear-gradient

- A `<LinearGradient>` component for react-native

  - **Installation**
    ```
    yarn add react-native-linear-gradient
    ```

## react-native-responsive-screen

- `react-native-responsive-screen` is a small library that provides 2 simple methods so that React Native developers can code their UI elements fully responsive. No media queries needed.

  - **Installation**
    ```
    npm install react-native-responsive-screen --save
    ```

## react-native-vector-icons

- Icons for our project

  - **Installation**
    ```
    npm install --save react-native-vector-icons
    ```

  - **Linking**
    ```
    react-native link react-native-vector-icons
    ```

## react-navigation-stack

- Stack navigator for use on iOS and Android.

  - **Installation**
    ```
    yarn add react-navigation-stack
    ```

## redux

- Redux is a predictable state container for JavaScript apps.

  - **Installation**
    ```
    npm install --save redux
    ```

## react-redux

- React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

  - **Installation**
    ```
    yarn add react-redux
    ```

## redux-saga

- `redux-saga` is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

  - **Installation**
    ```
    yarn add redux-saga
    ```

## react-navigation

- Used for app navigation

  - **Installation**
    ```
    yarn add react-navigation
    ```

## react-native-config

- Used to read .env variables

  - **Install** :
    ```
    yarn add react-native-config
    ```

  - **Extra Step for Android** :
    You'll also need to manually apply a plugin to your app, from android/app/build.gradle:

    After
    ```
    apply from: "../../node_modules/react-native/react.gradle"
    ```
    add :
    ```
    apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
    ```
    > Keep in mind that this module doesn't obfuscate or encrypt secrets for packaging, so do not store sensitive keys in .env. It's basically impossible to prevent users from reverse engineering mobile app secrets, so design your app (and APIs) with that in mind.

## react-native-onesignal

- **[Optional]** Used for **Push notifications**.

  ### Installation
  - See **[OneSignal installation](../../others/push-notification/one-signal)** for the full flow of installation.