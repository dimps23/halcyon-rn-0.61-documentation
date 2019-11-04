---
id: eslint-rules
title: Coding
sidebar_label: Eslint rules
---

## Eslint rules

### Rules

List of eslint rules:

https://eslint.org/docs/rules/

here are the list of rules I use :

```js
"react/jsx-filename-extension": "off"

"react/prefer-stateless-function": [0, { "ignorePureComponents": false }]

"react/prop-types": ["error", { "ignore": ["navigation"] }]

"quotes": [0, "double", { "avoidEscape": true }]

"no-underscore-dangle":  ["error", { "allow": ["_navigator"] }]

"arrow-parens": ["error", "as-needed"]

"import/no-unresolved": 2

"no-console": "off"

"max-len": 0

"react/forbid-prop-types": [0]

"no-unused-expressions":  ["error", { "allowShortCircuit": false, "allowTernary": true }]

'semi': [0, 'always']

"vars-on-top": 2

"require-await": 2

"no-await-in-loop": 2

"no-return-await": 2

"no-multi-spaces": ["error", { ignoreEOLComments: false }]

"func-style": ["error", "declaration", { "allowArrowFunctions": true }]

"react-native/no-inline-styles": 2

"react-native/no-color-literals": 2

"react-native/no-raw-text": 2
```

I also added

### Plugin eslint-plugin-react-native

https://www.npmjs.com/package/eslint-plugin-react-native

### Plugin documentation

https://github.com/intellicode/eslint-plugin-react-native

### Plugin Rules documentation

https://github.com/Intellicode/eslint-plugin-react-native/tree/master/docs/rules