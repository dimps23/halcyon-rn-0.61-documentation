---
id: copy-src-folder
title: Copy src folder
sidebar_label: Copy src folder
---

To use the starter kit we **must**

- copy src folder from **lowly** repository to your project
- See **[File Structuring](../../rules/file-structuring.md)** to get a grip on our File Structuring method.

---

## Configure your index.js to use src/App


`import App from './App';` should be changed to:

```diff
/**
 * @format
 */

import { AppRegistry } from 'react-native';
- import App from './App';
+ import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
```