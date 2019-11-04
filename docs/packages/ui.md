---
id: ui
title: UI
sidebar_label: UI
---

## Native Base
main UI theme / package used. See **[native-base](http://docs.nativebase.io/)** for more info.

---

> **React Native Elements [`Concealed`]**
>
> https://react-native-training.github.io/react-native-elements/
>
> **Warning!**
>
> `This package has been concealed but still usable.`
> Please refer to [this update](https://trello.com/c/yBws5xL9/50-concealed-react-native-elements-components)
> ##### Issue :
> `**Slow to render.**`
> ###### Suggestions are much appreciated!

---

## Icons

mainly I prefer to use FontAwesome5

See **[react-native-vector-icons](https://js.coach/react-native-vector-icons?search=vector&collection=React+Native)** for more info

---

## Modal

I prefer to use react-native-root-modal instead of the react-native modal since the native API got some issues like not covering the footer and header when the modal is open.

- Docs
[react-native-modal](https://js.coach/react-native-modal?search=modal&collection=React+Native)

---

## Animation

Just some animations package if you need to use it

- Docs
[react-native-animatable](https://js.coach/react-native-animatable?search=anima&collection=React+Native)

---

## Keyboard UI stuff

[react-native-keyboard-aware-scroll-view](https://js.coach/react-native-keyboard-aware-scroll-view?search=keyboard)

- useful on a screen with multiple inputs

  > Android natively has this feature, you can easily enable it by setting windowSoftInputMode in AndroidManifest.xml. Check **[here](https://developer.android.com/guide/topics/manifest/activity-element.html#wsoft)**.
  > But if you want to use feature like `extraHeight`, you need to enable Android Support with the following steps:
  - Make sure you are using react-native `0.46` or above.
  - Set windowSoftInputMode to `adjustPan` in `AndroidManifest.xml`.
  - Set `enableOnAndroid` property to true.