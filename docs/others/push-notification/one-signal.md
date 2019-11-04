---
id: one-signal
title: OneSignal
sidebar_label: OneSignal
---

## Installation

- Create/Login an account at **[OneSignal](https://onesignal.com/)**
- Once you logged in to `OneSignal` dashboard. Add an app.
- Select a platform(Android/iOS) to configure.
- Add the `Server Key` and `Sender ID` we got from `Firebase`.
- Select the `React Native` as the SDK.
- Take note of your `App ID` cause we will use it upon setting up `OneSignal`.

## Setup OneSignal

  ### Required for setup

  - #### [OneSignal account](https://onesignal.com/)
  - #### Your OneSignal `App ID`, available in **[Keys & IDs](https://documentation.onesignal.com/docs/accounts-and-keys#section-app-id)**.

  ### Add OneSignal library to project
  - run
    ```
    $ yarn add react-native-onesignal
    ```
    or
    ```
    $ npm install --save react-native-onesignal
    ```
  
  - link library to project
    ```
    $ react-native link react-native-onesignal
    ```

  ### Android Specific Instructions
  - In `android/app/src/main/AndroidManifest.xml`, add `android:launchMode="singleTop"` as an attribute to your main activity. You can also set `location permissions`.

    ```java
    ....
    <!-- Optional - Add the necessary permissions (Choose one of those) -->

    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/> <!-- Approximate location - If you want to use promptLocation for letting OneSignal know the user location. -->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/> <!--  Precise location If you want to use promptLocation for letting OneSignal know the user location. -->

    <!-- End optional permissions -->


    <application ....>
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:launchMode="singleTop"> <!-- Add this attribute to your main activity -->
      </activity>

      ....
    ```

    #### Adding the Gradle Plugin
    - In `android/app/build.gradle` add `apply plugin: 'com.onesignal.androidsdk.onesignal-gradle-plugin'` at the very top of the file.
    - Also add the buildscript under `android`.
      ```java
      apply plugin: 'com.onesignal.androidsdk.onesignal-gradle-plugin' <!-- Add this -->
      apply plugin: "com.android.application"

      import com.android.build.OutputFile

      .....

      android {
        .....
      }

      buildscript {
        repositories {
            maven { url 'https://plugins.gradle.org/m2/' } // Gradle Plugin Portal 
        }
        dependencies {
            classpath 'gradle.plugin.com.onesignal:onesignal-gradle-plugin:[0.12.1, 0.99.99]'
        }
      }

      .....
      ```

    - In `android/build.gradle` make sure that your `compileSdkVersion` and `buildToolsVersion` is at lease API level *26* or higher.
      ```java
      buildscript {
        ext {
            buildToolsVersion = "28.0.3" <!-- Check this -->
            minSdkVersion = 16
            compileSdkVersion = 28 <!-- Check this -->
            targetSdkVersion = 28
            supportLibVersion = "28.0.0"
        }
        repositories {
            google()
            jcenter()
        }
        dependencies {
            classpath 'com.android.tools.build:gradle:3.3.1'

            // NOTE: Do not place your application dependencies here; they belong
            // in the individual module build.gradle files
        }
      }
      ```

    ### Initializing the SDK
    OneSignal's react-native SDK now supports JavaScript initialization directly in react native, without having to write native Objective-C code or mess with gradle files.

    - In `src/App.jsx` add `OnSignal.init()` at the constructor.
      ```jsx
      constructor(properties) {
        super(properties);
        OneSignal.init("YOUR_ONESIGNAL_APPID");
      }
      ```

    ### Usage
    In `src/App.jsx` :
      ```jsx
      constructor(properties) {
        super(properties);
        OneSignal.init("YOUR_ONESIGNAL_APPID");

        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
      }

      componentDidMount = async () => {
        await this.preloadImages();
      }

      componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
      }

      onReceived(notification) {
        console.log("Notification received: ", notification);
      }

      onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
      }

      onIds(device) {
        console.log('Device info: ', device);
      }
      ```

    ### Test Push Notifications
    - On **[OneSignal dashboard](https://app.onesignal.com/)**, navigate to your project.
    - Then go to the `MESSAGES` tab.
    - Create a `New Push`.
    - Configure `Title` and `Message`.
    - On the `Schedule` module change the `Delivery` method to `Begin sending immediately` and `Per-User Optimization` to `Send Immediately`.
    - Click `CONFIRM`
    - `SEND MESSAGE`
    - Check your app for a notification.