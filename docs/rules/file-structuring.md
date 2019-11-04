---
id: file-structuring
title: File structuring
sidebar_label: File structuring
---

Inside the src folder.

Initially this is the contents of our src folder

```
.
├── ⚛ App.jsx         // the entry point of our project
├──📁 assets          // assets like images and fonts go here
├──📁 components      // global components / reusable components go here
├──📁 config          // router and theme-styles are here
├──📁 reducers        // redux reducer stuff is here
├──📁 sagas           // redux-saga stuff here
└──📁 screens         // all screen files go here
```

## assets

  all assets should be inside this folder. (fonts,images, etc..)

  - Usage
    - you can organize image files by adding folders inside `images`
    ```
    .📁 assets
    │
    ├──📁 fonts                     // all font files go here
    │   │
    │   ├── Roboto-Bold.ttf
    │   ├── Roboto-Light.ttf
    │   └── Roboto-Regular.ttf
    │
    └──📁 images                    // images here
        │
        ├──📁 app_icons
        │   ├── 1-nologo.gif
        │   ├── left-arrow.png
        │   └── lowly-icon.jpg
        ├── ⚛ index.js
        └──📁 large_images
            ├── cover_photo.png
            └── profile.gif
    ```

## components

  all custom components should be inside here. (excluding single use components).

  - Usage
    - Global components
      - if you are building components that are used onto multiple screens; you can add it here.
      > Be sure to put them to the proper folders. For example `TextInput` components should be inside `inputs` folder.

      ```
      .📁 components
      │
      ├──📁 buttons
      │   └── ⚛ CustomButton.jsx
      │
      ├──📁 icons
      │   ├── ⚛ BaseIcon.jsx
      │   └── ⚛ Chevron.jsx
      │
      ├── ⚛ index.jsx
      │
      ├──📁 inputs
      │   ├── ⚛ CustomInput.jsx
      │   └── ⚛ Input.jsx
      │
      ├──📁 layouts
      │   ├── ⚛ CustomHeader.jsx
      │   ├── ⚛ CustomImageBackground.jsx
      │   └── ⚛ Head.jsx
      │
      ├──📁 modals
      │   └── ⚛ ModalLoader.jsx
      │
      └──📁 texts
          ├── ⚛ GlobalText.jsx
          ├── ⚛ InfoText.jsx
          └── ⚛ Paragraph.jsx
      ```
    
    - Single use components
      - if you made a component that can only be used by a certain screen; you can add a folder on that screen folder and name it `components`. It will be easy for collaborators to find that file and modify them.

      ```
      // Tab
      .📁 Home    // you can add functions folder here too
      ├── ⚛ About.jsx
      ├──📁 components      // this folder
      │   ├── ⚛ HomeSocialLinks.jsx   // the component that you want to use on Home.jsx
      │   ├── ⚛ HomeTitle.jsx
      │   └── index.js
      ├── ⚛ Home.jsx
      ├── ⚛ Info.jsx
      └── ⚛ License.jsx
      ```
      then on your Home screen you can just import them like this
      ```js
      import { CategoryList } from "./HomeTabScreen/components/CategoryList";
      ```

## config

  inside this folder are the route config and constants(action-types, themes and Session).

  - Usage
    - adding a custom theme. Means styles that you use mostly on every screens/components.
      > add them to the themes folder

      ```
      .📁 constants
      ├──📁 action-types
      │   └── Authenticate.js
      ├── Sessions.js
      └──📁 themes
          ├── Colors.js
          ├── Dimensions.js
          ├── Fonts.js
          ├── GlobalStyles.js
          ├── Theme1.js // example
          └── index.js
          // add here then declare them on index.js
          // when you import them you can just do
          // import { Theme1 } from "config/constants/themes"
      ```
    
    - modify app routes
      > you can modify the routes on the `routes` folder

      ```
      . routes
      ├── NavigationService.js
      └── Router.js // all routes are here
      ```

## reducers

  you can modify/add reducers here

  - Usage
    - we mostly use redux for authentication

    ```
    .📁 reducers
    ├── Authenticate.js
    └── index.js

    ```

## sagas

  we can modify our saga effects on `Authenticate.js`

  - Usage
  
    ```
    .📁 sagas
    ├── Authenticate.js
    └── index.js
    ```

## screens

  this is the default structure
    
  ```
  .📁 screens
  ├──📁 auth
  │   ├── ⚛ Login.jsx
  │   └── ⚛ Signup.jsx
  ├── Splash.jsx
  └──📁 tabs
      ├──📁 Home
      │   ├── ⚛ About.jsx // Stack
      │   ├──📁 components
      │   │   ├── ⚛ HomeSocialLinks.jsx // Home Tab component
      │   │   ├── ⚛ HomeTitle.jsx // Home Tab component
      │   │   └── index.js
      │   ├── ⚛ Home.jsx  // Main screen
      │   ├── ⚛ Info.jsx  // Stack
      │   └── ⚛ License.jsx // Stack
      └──📁 Profile
          ├── ⚛ CommunityPosts.jsx
          ├──📁 components
          │   ├── index.js
          │   ├── ⚛ ProfileHeader.jsx
          │   ├── ⚛ ProfileSettings.jsx
          │   └── ⚛ ProfileSocialTab.jsx
          └── ⚛ Profile.jsx
  ```
  > you can add more folders in `tabs` if you want; but be sure to name it properly and it is a `tab`.

  - Usage
  ```diff
  .📁 screens
  ├──📁 auth
  │   ├── ⚛ Login.jsx
  │   └── ⚛ Signup.jsx
  ├── Splash.jsx
  └──📁 tabs
      ├──📁 Home
      │   ├── ⚛ About.jsx
      │   ├── components
      │   │   ├── ⚛ HomeSocialLinks.jsx
      │   │   ├── ⚛ HomeTitle.jsx
      │   │   └── index.js
      │   ├── ⚛ Home.jsx
      │   ├── ⚛ Info.jsx
      │   └── ⚛ License.jsx
      ├──📁 Profile
      |   ├── ⚛ CommunityPosts.jsx
      |   ├── components
      |   │   ├── index.js
      |   │   ├── ⚛ ProfileHeader.jsx
      |   │   ├── ⚛ ProfileSettings.jsx
      |   │   └── ⚛ ProfileSocialTab.jsx
      |   └── ⚛ Profile.jsx
  +   └──📁 Notifications
  +       ├── components
  +       │   ├── ⚛ NotificationList.jsx
  +       │   └── index.js
  +       └── ⚛ Notifications.jsx
  ```
