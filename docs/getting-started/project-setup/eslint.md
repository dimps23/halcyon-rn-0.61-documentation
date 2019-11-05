---
id: eslint
title: Config .eslintrc.js
sidebar_label: .eslintrc.js
---

Create file `.eslintrc.js` or copy from `Halcyon RN Starter Kit 0.61+`

## Contents

```js
module.exports = {
  "env": {
      "es6": true,
      "node": true,
      "react-native/react-native": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "react-native"
  ],
  "rules": {
      "react/jsx-filename-extension": "off",
      "react/prefer-stateless-function": [0, { "ignorePureComponents": false }],
      "react/prop-types": [
        "error",
        {
          "ignore":
          [
            "navigation",
            "dispatch",
            "auth"
          ]
        }
      ],
      "quotes": [0, "double", { "avoidEscape": true }],
      "no-underscore-dangle":  ["error", { "allow": ["_navigator", "_id", "_root"] }],
      "arrow-parens": ["error", "as-needed"],
      "import/no-unresolved": 2,
      "no-console": "off",
      "max-len": 0,
      "react/forbid-prop-types": [0],
      "no-unused-expressions":  ["error", { "allowShortCircuit": false, "allowTernary": true }],
      'semi': [0, 'always'],
      "vars-on-top": 2,
      "require-await": 2,
      "no-await-in-loop": 2,
      "no-return-await": 2,
      "camelcase": [
        "error",
        {
          allow:
          [
            "UNSAFE_componentWillMount",
            "UNSAFE_componentWillUpdate",
            "UNSAFE_componentWillReceiveProps"
          ]
        }
      ],
      "no-multi-spaces": ["error", { ignoreEOLComments: false }],
      "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
      "react-native/no-inline-styles": 2,
      "react-native/no-color-literals": 2,
      "react-native/no-raw-text": 2,
      "linebreak-style": [0, "unix"],
      "react/jsx-props-no-spreading": [0, {
        "custom": "ignore",
      }],
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  }
};
```

## Rules
Here are the list of rules we use

  - ### react/jsx-filename-extension
    The following pattern is considered a warning:

    ```js
    // filename: MyComponent.js
    function MyComponent() {
      return <CustomComponent />;
    }
    ```

    The following pattern is **not** considered a warning:

    ```jsx
    // filename: MyComponent.jsx
    function MyComponent() {
      return <CustomComponent />;
    }
    ```

  - ### react/prefer-stateless-function
    Enforce stateless React Components to be written as a pure function.
    > Stateless functional components are simpler than class based components and will benefit from future React performance optimizations specific to these components.
    >
    > For more info visit **[react/prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)**

  - ### react/prop-types
    Prevent missing props validation in a React component definition (react/prop-types)
    > PropTypes improve the reusability of your component by validating the received data.
    >
    > It can warn other developers if they make a mistake while reusing the component with improper data type.

  - ### quotes
    enforce the consistent use of either backticks, double, or single quotes (quotes)

  - ### no-underscore-dangle
    disallow dangling underscores in identifiers (no-underscore-dangle)

  - ### arrow-parens
    Require parens in arrow function arguments (arrow-parens)

  - ### import/no-unresolved
    Ensures an imported module can be resolved to a module on the local filesystem, as defined by standard Node require.resolve behavior. See **[import/no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)**

  - ### max-len
    This rule enforces a maximum line length to increase code readability and maintainability. The length of a line is defined as the number of Unicode characters in the line.

  - ### react/forbid-prop-types
    By default this rule prevents vague prop types with more specific alternatives available (any, array, object), but any prop type can be disabled if desired. The defaults are chosen because they have obvious replacements. any should be replaced with, well, anything. array and object can be replaced with arrayOf and shape, respectively.

  - ### no-unused-expressions
    Disallow Unused Expressions (no-unused-expressions). See **[no-unused-expressions](Disallow Unused Expressions (no-unused-expressions))**

  - ### semi
    require or disallow semicolons instead of ASI (semi). See **[semi](https://eslint.org/docs/rules/semi)**

  - ### vars-on-top
    Require Variable Declarations to be at the top of their scope (vars-on-top).
    This rule aims to keep all variable declarations in the leading series of statements. Allowing multiple declarations helps promote maintainability and is thus allowed. See **[vars-on-top](https://eslint.org/docs/rules/vars-on-top)**

  - ### require-await
    Disallow async functions which have no await expression (require-await)

    Asynchronous functions in JavaScript behave differently than other functions in two important ways:

    - The return value is always a Promise.
    - You can use the await operator inside of them.

  - ### no-await-in-loop
    Disallow await inside of loops (no-await-in-loop)

    Performing an operation on each element of an iterable is a common task. However, performing an await as part of each operation is an indication that the program is not taking full advantage of the parallelization benefits of async/await.

    Usually, the code should be refactored to create all the promises at once, then get access to the results using Promise.all(). Otherwise, each successive operation will not start until the previous one has completed.

  - ### no-return-await
    This rule aims to prevent a likely common performance hazard due to a lack of understanding of the semantics of async function.

  - ### no-multi-spaces
    Disallow multiple spaces (no-multi-spaces).
    Multiple spaces in a row that are not used for indentation are typically mistakes. For example
    ```js
    if(varA  === "some value") {}
    ```
    It’s hard to tell, but there are two spaces between varA and ===.

  - ### func-style
    enforce the consistent use of either function declarations or expressions (func-style). See **[func-style](https://eslint.org/docs/rules/func-style)**

  - ### react-native/no-inline-styles
    It's (subjectively) good practice to separate styles from the view layout, when possible. This rule detects inline style objects when they contain literal values. If inline styles only contain variable values, the style is considered acceptable because it's sometimes necessary to set styles based on state or props.

  - ### react-native/no-color-literals
    When developing UIs, we often find ourselves reusing the same colors in multiple places in the UI. If the colors have to be updated, they likely have to be updated across the board. So it's a good practice to store the color definitions in variables instead of hardcoding them inside styles. This rule will detect color properties that have literals (ie strings) as values.

    The rule looks at all properties that contain color (case-insensitive) in their name in either StyleSheet definitions or JSX properties that have style in their name.

  - ### react-native/no-raw-text
    All strings in React Native should be wrapped with a Text component.


  #### eslint rules

  https://eslint.org/docs/rules/


  #### eslint react-native rules

  https://github.com/Intellicode/eslint-plugin-react-native/tree/master/docs/rules
