---
id: config-babelrc
title: Config .babelrc
sidebar_label: .babelrc
---

Create file `.babelrc` or copy from `Halcyon RN Starter Kit 0.61+`

## Contents

```json
{
  "plugins": [
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".es",
          ".es6",
          ".mjs"
        ],
        "alias": {
          "@base-components": "./src/components/base",
          "@base-config": "./src/components/base/base-config",
          "@custom-components": "./src/components/custom",
          "@custom-config": "./src/components/custom/custom-config",
          "@screens": "./src/screens",
          "@styles": "./src/screens/styles",
          "@themes": "./src/config/themes",
          "@navigation-service": "./src/config/router/NavigationService",
          "@helpers": "./src/helpers",
          "@images": "./src/assets/images",
          "@animations": "./src/assets/animations",
          "@app-context": "./src/config/AppContext"
        }
      }
    ]
  ]
}
```