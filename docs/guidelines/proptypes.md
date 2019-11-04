---
id: proptypes
title: PropTypes
sidebar_label: PropTypes
---

Imagine you are working in a bigger project with many, more complex components.
Say a fellow developer is going to build a feature and he needs to use ChildComponent, how is he going to know ChildComponent needs a property message and id to function properly?
Yes, he will need to search the components code for usages of the this.props object.
He will also need to figure out what type those properties need to be.
In more complex components this can be a time consuming activity.


This is where Reacts propTypes come in. It’s essentially a dictionary where you define what props your component needs and what type(s) they should be. How does this look like?


```js
import Proptypes from 'prop-types'

class TextComponent extends PureComponent {

  render() {
    const {
      size,
      color,
      text,
      textStyle,
    } = this.props;

    const {
      ...props
    } = this.props;

    return (
      <Text
        style={{
          fontSize: size,
          fontFamily: this.identifyFontFamily(),
          color,
          ...textStyle,
        }}
        {...props}
      >
        {text}

      </Text>
    );
  }
}

/* Validate props here */
Paragraph.propTypes = {
  fontFamily: Proptypes.string,
  size: Proptypes.number,
  color: Proptypes.string,

  // Required prop. This will display a warning when this prop is not passed on this component.
  text: Proptypes.string.isRequired,

  textStyle: Proptypes.object,
}

/* Default props of this component */
Paragraph.defaultProps = {
  fontFamily: 'roboto-regular',
  size: 12,
  color: COLOR.BLACK,
  textStyle: {},
}

export default Paragraph;
```
> More info on [Typechecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

> Be sure `prop-types` are installed!
> Make sure you followed **[Project Setup](../getting-started/project-setup/overview.md)**