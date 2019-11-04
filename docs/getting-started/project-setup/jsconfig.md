---
id: jsconfig
title: Config jsconfig.json
sidebar_label: jsconfig.json
---

Create file `jsconfig.json` or copy from `Halcyon RN Starter Kit 0.61+`

## Contents

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": [
        "src/*"
      ],
      "@base-components": [
        "src/components/base"
      ],
      "@base-config": [
        "src/components/base/base-config"
      ],
      "@custom-components": [
        "src/components/custom"
      ],
      "@custom-config": [
        "src/components/custom/custom-config"
      ],
      "@themes": [
        "src/config/themes"
      ],
      "@screens": [
        "src/screens"
      ],
      "@styles": [
        "src/screens/styles"
      ],
      "@navigation-service": [
        "src/config/router/NavigationService"
      ],
      "@helpers": [
        "src/helpers"
      ],
      "@images": [
        "src/assets/images"
      ],
      "@animations": [
        "src/assets/animations"
      ],
      "@app-context": [
        "./src/config/AppContext"
      ]
    }
  }
}
```