---
id: installation
title: Installation
sidebar_label: Installation
---

---

## Install react-native

If you haven't installed react-native do: 
```
$ npm install -g react-native-cli
```

---
## Clone the repository

If not yet cloned. Clone Lowly repository.

> NOTE: **Do not use this repo as a new project.**

---

## Install packages

On the terminal. Navigate to the project and run
```
$ yarn
```

If you receive an error like this ![alt-text](assets/npm-install-error.png)

there are 2 ways of fixing it so npm install would work again
- remove .git folder from 'node_modules/react-native-onesignal'
- or you can do `yarn` to install other packages.

see **[this link](https://github.com/geektimecoil/react-native-onesignal/issues/762#issue-444839584)** for more information.

---

## Link packages to native app

Assuming you already did `$ yarn` or `$ npm install` in the project directory.

Next thing to do is link all the packages and dependencies to the app.

To achieve this run : 
```
$ react-native link
```
inside the project directory.

---

## Running

### react-native js bundler

Open a new terminal and navigate to the project then start the react-native packager by running :
```
react-native start
```

### running on device/emulator

Assuming the packager is already running with the terminal displaying with the following image attached.

Next thing to do is open the terminal and navigate to the project again and run

```
$ react-native run-android

or

$ react-native run-ios
```

check all connected devices by running :

```
$ adb devices
```
on the terminal

if it responds with list of devices + IP then you are good to go
else connect it by running
```
$ adb connect <DEVICE_IP:5555>
```
> port `:5555` is the default port