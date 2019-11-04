---
id: image-caching
title: Fast Image
sidebar_label: Image Caching
---

### Image Caching

## Importance
Image caching is important because active data on the app is stored, then cut down on load time and improve performance. Apps uses cache for pages you frequently visit. The primary benefit to using cache is delivering faster performance, especially if the image's size is huge. It happens when the app is open.


## Usage

```jsx
import FastImage from 'react-native-fast-image'

const YourImage = () => (
    <FastImage
        style={styles.image}
        source={{
            uri: 'samplePhoto.jpg',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
)
  ```

 
  