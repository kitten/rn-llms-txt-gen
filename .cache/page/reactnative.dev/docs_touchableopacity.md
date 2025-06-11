# TouchableOpacity

> If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.

A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.

Opacity is controlled by wrapping the children in an `Animated.View`, which is added to the view hierarchy. Be aware that this can affect layout.

## Example

## Reference

## Props

### TouchableWithoutFeedback Props

Inherits TouchableWithoutFeedback Props.

### `style`

* Type
  View.style

### `activeOpacity`

Determines what the opacity of the wrapped view should be when touch is active. Defaults to `0.2`.

* Type
  number

### `hasTVPreferredFocus`iOS

*(Apple TV only)* TV preferred focus (see documentation for the View component).

* Type
  bool

### `nextFocusDown`Android

TV next focus down (see documentation for the View component).

* Type
  number

### `nextFocusForward`Android

TV next focus forward (see documentation for the View component).

* Type
  number

### `nextFocusLeft`Android

TV next focus left (see documentation for the View component).

* Type
  number

### `nextFocusRight`Android

TV next focus right (see documentation for the View component).

* Type
  number

### `nextFocusUp`Android

TV next focus up (see documentation for the View component).

* Type
  number
