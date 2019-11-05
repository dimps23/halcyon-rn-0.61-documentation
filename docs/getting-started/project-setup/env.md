---
id: env
title: Configure .env
sidebar_label: .env
---

> this module doesn't obfuscate or encrypt secrets for packaging, so do not store sensitive keys in .env. It's basically impossible to prevent users from reverse engineering mobile app secrets, so design your app (and APIs) with that in mind.

## Required fields

```
SESSION=halcyonRN
APP_VERSION_CODE=1
APP_VERSION=0.1.9-beta
```

- ### SESSION

  - Used as a key to save authentication data to device

    > See `src/redux/authentication/sagas`'s login function

- ### APP_VERSION_CODE

  - A positive integer used as an internal version number. This number is used only to determine whether one version is more recent than another, with higher numbers indicating more recent versions. This is not the version number shown to users; that number is set by the versionName setting, below. The Android system uses the versionCode value to protect against downgrades by preventing users from installing an APK with a lower versionCode than the version currently installed on their device.

  - Used as versionCode for android so you won't go to `android/src/build.gradle` to change it's value when you are updating the app.

    ```
    // android/src/build.gradle
    defaultConfig {
      ...
      versionCode project.env.get("APP_VERSION_CODE").toInteger()
      ...
    }
    ```
- ### APP_VERSION

  - Used as the version number shown to users.

    ```
    // android/src/build.gradle
    defaultConfig {
      ...
      versionName project.env.get("APP_VERSION")
    }
    ```