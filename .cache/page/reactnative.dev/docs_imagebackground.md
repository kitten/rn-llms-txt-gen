# ImageBackground

A common feature request from developers familiar with the web is `background-image`. To handle this use case, you can use the `<ImageBackground>` component, which has the same props as `<Image>`, and add whatever children to it you would like to layer on top of it.

You might not want to use `<ImageBackground>` in some cases, since the implementation is basic. Refer to `<ImageBackground>`'s source code for more insight, and create your own custom component when needed.

Note that you must specify some width and height style attributes.

## Example

## Reference

## Props

### Image Props

Inherits Image Props.

### `imageStyle`

* Type
  Image Style

### `imageRef`

Allows to set a reference to the inner `Image` component

* Type
  Ref

### `style`

* Type
  View Style
