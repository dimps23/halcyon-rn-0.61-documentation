---
id: redux
title: Redux
sidebar_label: Redux
---

Official docs of redux:

- https://redux.js.org/basics/usagewithreact

### Subscribing to dispatch with/without accessing to Store

 - Usage with dispatch + store subscription

```js
import { addTodo, deleteTodo } from './actionCreators'

function mapStateToProps(state) {
  return { todos: state.todos }
}

const mapDispatchToProps = {
  addTodo,
  deleteTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
```

 - Usage with dispatch without subscribing to store

```js
import * as actionCreators from './actionCreators'

export default connect(
  null,
  actionCreators
)(TodoApp)
```

**NOTE:** 

- Redux maybe hard to understand at first but you will see the benefits of it when debugging some issues or errors in your code.
- React redux of web is similar to react native the only difference of react web and react native is the **UI API components** because react native doesn't use **web html elements**

Tutorials of React with Redux:

- https://medium.com/@relferreira/react-native-redux-react-navigation-ecec4014d648
- https://blog.cloudboost.io/getting-started-with-react-native-and-redux-6cd4addeb29 (use react-native init instead of create-react-native-app in this tutorial)
- https://egghead.io/courses/getting-started-with-redux
