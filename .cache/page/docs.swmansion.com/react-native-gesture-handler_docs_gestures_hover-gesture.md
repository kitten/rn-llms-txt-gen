# Hover gesture

A continuous gesture that can recognize hovering above the view it's attached to. The hover effect may be activated by moving a mouse or a stylus over the view.

On iOS additional visual effects may be configured.

`Hover Gesture`

## Reference

```
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

function App() {
  const hover = Gesture.Hover();

  return (
    <GestureDetector gesture={hover}>
      <View />
    </GestureDetector>
  );
}
```

## Remarks

* Don't rely on `Hover` gesture to continue after the mouse button is clicked or the stylus touches the screen. If you want to handle both cases, compose it with `Pan` gesture.

## Config

### Properties specific to `HoverGesture`:

### `effect(effect: HoverEffect)` (iOS only)

```
import { HoverEffect } from 'react-native-gesture-handler';
```

Visual effect applied to the view while the view is hovered. The possible values are:

* `HoverEffect.None`
* `HoverEffect.Lift`
* `HoverEffect.Highlight`

Defaults to `HoverEffect.None`

### Properties common to all gestures:

### `enabled(value: boolean)`

Indicates whether the given handler should be analyzing stream of touch events or not. When set to `false` we can be sure that the handler's state will **never** become `ACTIVE`. If the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to `FAILED` or `CANCELLED` (depending on its current state). Default value is `true`.

### `shouldCancelWhenOutside(value: boolean)`

When `true` the handler will cancel or fail recognition (depending on its current state) whenever the finger leaves the area of the connected view. Default value of this property is different depending on the handler type. Most handlers' `shouldCancelWhenOutside` property defaults to `false` except for the `LongPressGesture` and `TapGesture` which default to `true`.

### `hitSlop(settings)`

This parameter enables control over what part of the connected view area can be used to begin recognizing the gesture. When a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly.

Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for `left`, `right`, `top` or `bottom` sides. You can alternatively provide `horizontal` or `vertical` instead of specifying directly `left`, `right` or `top` and `bottom`. Finally, the object can also take `width` and `height` attributes. When `width` is set it is only allow to specify one of the sides `right` or `left`. Similarly when `height` is provided only `top` or `bottom` can be set. Specifying `width` or `height` is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set `left: 0` and `width: 20` which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge.

**IMPORTANT:** Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except `width` and `height`) to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View hitSlop property.

### `withRef(ref)`

Sets a ref to the gesture object, allowing for interoperability with the old API.

### `withTestId(testID)`

Sets a `testID` property for gesture object, allowing for querying for it in tests.

### `cancelsTouchesInView(value)` (**iOS only**)

Accepts a boolean value. When `true`, the gesture will cancel touches for native UI components (`UIButton`, `UISwitch`, etc) it's attached to when it becomes `ACTIVE`. Default value is `true`.

### `runOnJS(value: boolean)`

When `react-native-reanimated` is installed, the callbacks passed to the gestures are automatically workletized and run on the UI thread when called. This option allows for changing this behavior: when `true`, all the callbacks will be run on the JS thread instead of the UI thread, regardless of whether they are worklets or not. Defaults to `false`.

### `simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)`

Adds a gesture that should be recognized simultaneously with this one.

**IMPORTANT:** Note that this method only marks the relation between gestures, without composing them. `GestureDetector` will not recognize the `otherGestures` and it needs to be added to another detector in order to be recognized.

### `requireExternalGestureToFail(otherGesture1, otherGesture2, ...)`

Adds a relation requiring another gesture to fail, before this one can activate.

### `blocksExternalGesture(otherGesture1, otherGesture2, ...)`

Adds a relation that makes other gestures wait with activation until this gesture fails (or doesn't start at all).

**IMPORTANT:** Note that this method only marks the relation between gestures, without composing them.`GestureDetector` will not recognize the `otherGestures` and it needs to be added to another detector in order to be recognized.

### `activeCursor(value)` (Web only)

This parameter allows to specify which cursor should be used when gesture activates. Supports all CSS cursor values (e.g. `"grab"`, `"zoom-in"`). Default value is set to `"auto"`.

## Callbacks

### Callbacks common to all gestures:

### `onBegin(callback)`

Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all.

### `onStart(callback)`

Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state.

### `onEnd(callback)`

Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state.

### `onFinalize(callback)`

Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize.

### `onTouchesDown(callback)`

Set the `onTouchesDown` callback which is called every time a finger is placed on the screen.

### `onTouchesMove(callback)`

Set the `onTouchesMove` callback which is called every time a finger is moved on the screen.

### `onTouchesUp(callback)`

Set the `onTouchesUp` callback which is called every time a finger is lifted from the screen.

### `onTouchesCancelled(callback)`

Set the `onTouchesCancelled` callback which is called every time a finger stops being tracked, for example when the gesture finishes.

### Callbacks common to all continuous gestures:

### `onUpdate(callback)`

Set the callback that is being called every time the gesture receives an update while it's active.

### `onChange(callback)`

Set the callback that is being called every time the gesture receives an update while it's active. This callback will receive information about change in value in relation to the last received event.

## Event data

### Event attributes specific to `HoverGesture`:

### `x`

X coordinate of the current position of the pointer relative to the view attached to the `GestureDetector`. Expressed in point units.

### `y`

Y coordinate of the current position of the pointer relative to the view attached to the `GestureDetector`. Expressed in point units.

### `absoluteX`

X coordinate of the current position of the pointer relative to the window. The value is expressed in point units. It is recommended to use it instead of `x` in cases when the original view can be transformed as an effect of the gesture.

### `absoluteY`

Y coordinate of the current position of the pointer relative to the window. The value is expressed in point units. It is recommended to use it instead of `y` in cases when the original view can be transformed as an effect of the gesture.

### `stylusData`

Object that contains additional information about `stylus`. It consists of the following fields:

* `tiltX` - angle in degrees between the Y-Z plane of the stylus and the screen.
* `tiltY` - angle in degrees between the X-Z plane of the stylus and the screen.
* `altitudeAngle` - angle between stylus axis and the X-Y plane of a device screen.
* `azimuthAngle` - angle between the Y-Z plane and the plane containing both the stylus axis and the Y axis.
* `pressure` - indicates the normalized pressure of the stylus.

### Event attributes common to all gestures:

### `state`

Current state of the handler. Expressed as one of the constants exported under `State` object by the library.

### `numberOfPointers`

Represents the number of pointers (fingers) currently placed on the screen.

### `pointerType`

Indicates the type of pointer device in use. This value is represented by the `PointerType` enum, which includes the following fields:

* `TOUCH` - represents finger
* `STYLUS` - represents stylus or digital pen
* `MOUSE` - represents computer mouse
* `KEY` - represents keyboard
* `OTHER` - represents unknown device type that is not relevant
