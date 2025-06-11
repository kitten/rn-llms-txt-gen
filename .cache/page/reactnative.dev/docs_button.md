# Button

A basic button component that should render nicely on any platform. Supports a minimal level of customization.

If this button doesn't look right for your app, you can build your own button using Pressable. For inspiration, look at the source code for the Button component.

```
<Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
```

## Example

## Reference

## Props

### Require&#x64;**`onPress`**&#x200B;

Handler to be called when the user taps the button.

* Type
  `({nativeEvent: PressEvent})`

### Require&#x64;**`title`**&#x200B;

Text to display inside the button. On Android the given title will be converted to the uppercased form.

* Type
  string

### `accessibilityLabel`

Text to display for blindness accessibility features.

* Type
  string

### `accessibilityLanguage`iOS

A value indicating which language should be used by the screen reader when the user interacts with the element. It should follow the BCP 47 specification.

See the iOS `accessibilityLanguage` doc for more information.

* Type
  string

### `accessibilityActions`

Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. The `accessibilityActions` property should contain a list of action objects. Each action object should contain the field name and label.

See the Accessibility guide for more information.

* Type
  array
* Required
  No

### `onAccessibilityAction`

Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform.

See the Accessibility guide for more information.

* Type
  function
* Required
  No

### `color`

Color of the text (iOS), or background color of the button (Android).

* Type
  color
* Default
  `'#2196F3'`
  Android
  ***
  `'#007AFF'`
  iOS

### `disabled`

If `true`, disable all interactions for this component.

* Type
  bool
* Default
  `false`

### `hasTVPreferredFocus`TV

TV preferred focus.

* Type
  bool
* Default
  `false`

### `nextFocusDown`AndroidTV

Designates the next view to receive focus when the user navigates down. See the Android documentation.

* Type
  number

### `nextFocusForward`AndroidTV

Designates the next view to receive focus when the user navigates forward. See the Android documentation.

* Type
  number

### `nextFocusLeft`AndroidTV

Designates the next view to receive focus when the user navigates left. See the Android documentation.

* Type
  number

### `nextFocusRight`AndroidTV

Designates the next view to receive focus when the user navigates right. See the Android documentation.

* Type
  number

### `nextFocusUp`AndroidTV

Designates the next view to receive focus when the user navigates up. See the Android documentation.

* Type
  number

### `testID`

Used to locate this view in end-to-end tests.

* Type
  string

### `touchSoundDisabled`Android

If `true`, doesn't play system sound on touch.

* Type
  boolean
* Default
  `false`
