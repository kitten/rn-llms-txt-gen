# InputAccessoryView

A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a `TextInput` has focus. This component can be used to create custom toolbars.

To use this component wrap your custom toolbar with the InputAccessoryView component, and set a `nativeID`. Then, pass that `nativeID` as the `inputAccessoryViewID` of whatever `TextInput` you desire. A basic example:

This component can also be used to create sticky text inputs (text inputs which are anchored to the top of the keyboard). To do this, wrap a `TextInput` with the `InputAccessoryView` component, and don't set a `nativeID`. For an example, look at InputAccessoryViewExample.js.

## Reference

## Props

### `backgroundColor`

* Type
  color

### `nativeID`

An ID which is used to associate this `InputAccessoryView` to specified TextInput(s).

* Type
  string

### `style`

* Type
  View Style

## Known issues

* react-native#18997: Doesn't support multiline `TextInput`
* react-native#20157: Can't use with a bottom tab bar
