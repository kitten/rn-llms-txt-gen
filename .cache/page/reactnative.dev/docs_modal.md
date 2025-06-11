# Modal

The Modal component is a basic way to present content above an enclosing view.

## Example

## Reference

## Props

### View Props

Inherits View Props.

### `animated`

> **Deprecated.** Use the `animationType` prop instead.

### `animationType`

The `animationType` prop controls how the modal animates.

Possible values:

* `slide` slides in from the bottom
* `fade` fades into view
* `none` appears without an animation

- Type
  enum(
  `'none'`
  , 
  `'slide'`
  , 
  `'fade'`
  )
- Default
  `none`

### `backdropColor`

The `backdropColor` of the modal (or background color of the modal's container.) Defaults to `white` if not provided and transparent is `false`. Ignored if `transparent` is `true`.

* Type
  color
* Default
  white

### `hardwareAccelerated`Android

The `hardwareAccelerated` prop controls whether to force hardware acceleration for the underlying window.

* Type
  bool
* Default
  `false`

### `navigationBarTranslucent`Android

The `navigationBarTranslucent` prop determines whether your modal should go under the system navigation bar. However, `statusBarTranslucent` also needs to be set to `true` to make navigation bar translucent.

* Type
  bool
* Default
  `false`

### `onDismiss`iOS

The `onDismiss` prop allows passing a function that will be called once the modal has been dismissed.

* Type
  function

### `onOrientationChange`iOS

The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed. The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.

* Type
  function

### `onRequestClose`

The `onRequestClose` callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that `BackHandler` events will not be emitted as long as the modal is open. On iOS, this callback is called when a Modal is being dismissed using a drag gesture when `presentationStyle` is `pageSheet or formSheet`

* Type
  function
  Required

  Android

  TV
  ***
  function
  iOS

### `onShow`

The `onShow` prop allows passing a function that will be called once the modal has been shown.

* Type
  function

### `presentationStyle`iOS

The `presentationStyle` prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See https\://developer.apple.com/reference/uikit/uimodalpresentationstyle for details.

Possible values:

* `fullScreen` covers the screen completely
* `pageSheet` covers portrait-width view centered (only on larger devices)
* `formSheet` covers narrow-width view centered (only on larger devices)
* `overFullScreen` covers the screen completely, but allows transparency

- Type
  enum(
  `'fullScreen'`
  , 
  `'pageSheet'`
  , 
  `'formSheet'`
  , 
  `'overFullScreen'`
  )
- Default
  `fullScreen`
   if 
  `transparent={false}`
  ***
  `overFullScreen`
   if 
  `transparent={true}`

### `statusBarTranslucent`Android

The `statusBarTranslucent` prop determines whether your modal should go under the system statusbar.

* Type
  bool
* Default
  `false`

### `supportedOrientations`iOS

The `supportedOrientations` prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field.

> When using `presentationStyle` of `pageSheet` or `formSheet`, this property will be ignored by iOS.

* Type
  array of enums(
  `'portrait'`
  , 
  `'portrait-upside-down'`
  , 
  `'landscape'`
  , 
  `'landscape-left'`
  , 
  `'landscape-right'`
  )
* Default
  `['portrait']`

### `transparent`

The `transparent` prop determines whether your modal will fill the entire view. Setting this to `true` will render the modal over a transparent background.

* Type
  bool
* Default
  `false`

### `visible`

The `visible` prop determines whether your modal is visible.

* Type
  bool
* Default
  `true`
