---
id: generating-key
title: Generating Key
sidebar_label: Generating Key
---

Visit https://facebook.github.io/react-native/docs/signed-apk-android

### Generate keystore using Android Studio

- follow this [tutorial](https://developer.android.com/studio/publish/app-signing#generate-key)

- If you are having trouble with the tutorial. Do this instead

> Already ~~suffered~~ enough from it so here's what I came up with
>
> **IMPORTANT!!!!!!:** Make sure to add the keystore file inside android/app to avoid errors when generating the apk **[trust me]**

```
MYAPP_RELEASE_STORE_FILE=<keystore file name>
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

> NOTE: keystore filename could be .keystore or .jks

> Edit the file android/app/build.gradle in your project folder, and add the signing config,

```java
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
```

- Generate APK

```
$ cd android
$ ./gradlew assembleRelease
```

- APK directory
>`android/app/build/outputs/apk/release/`
