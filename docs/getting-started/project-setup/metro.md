---
id: metro
title: Configure metro.config.js
sidebar_label: metro.config.js
---

Metro is a JavaScript bundler. It takes in options, an entry file, and gives you a JavaScript file including all JavaScript files back. See **[Metro](https://facebook.github.io/metro/docs/en/concepts)** to learn more.

---

  ## Configure metro
  We need metro to accept jsx files.

  ### Configure metro.config.js
  - Add resolver
    ```js
    resolver: {
      sourceExts: ["jsx", "js", "ts"],
    },
    ```

    - metro.config.js should look like this :
    ```diff
    module.exports = {
      transformer: {
        getTransformOptions: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: false,
          },
        }),
      },

    + resolver: {
    +   sourceExts: ["jsx", "js", "ts"],
    + },
    };
    ```