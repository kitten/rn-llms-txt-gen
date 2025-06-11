# KeyboardAvoidingView

This component will automatically adjust its height, position, or bottom padding based on the keyboard height to remain visible while the virtual keyboard is displayed.

## Example

## Reference

## Props

### View Props

Inherits View Props.

### `behavior`

Specify how to react to the presence of the keyboard.

> Android and iOS both interact with this prop differently. On both iOS and Android, setting `behavior` is recommended.

* Type
  enum(
  `'height'`
  , 
  `'position'`
  , 
  `'padding'`
  )

### `contentContainerStyle`

The style of the content container (View) when behavior is `'position'`.

* Type
  View Style

### `enabled`

Enabled or disabled KeyboardAvoidingView.

* Type
  boolean
* Default
  `true`

### `keyboardVerticalOffset`

This is the distance between the top of the user screen and the react native view, may be non-zero in some use cases.

* Type
  number
* Default
  `0`
