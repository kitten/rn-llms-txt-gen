# Native gesture

A gesture that allows other touch handling components to work within RNGH's gesture system. This streamlines interactions between gestures and the native component, allowing it to form relations with other gestures.

When used, the native component should be the direct child of a `GestureDetector`.

## Example

This example renders a `ScrollView` with multiple colored rectangles, where each rectangle has a black section. Starting a touch on a black section will disable the `ScrollView` for the duration of the `Pan` gesture.

```
import { View, ScrollView } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const COLORS = ['red', 'green', 'blue', 'purple', 'orange', 'cyan'];

export default function App() {
  const native = Gesture.Native();

  return (
    <GestureDetector gesture={native}>
      <ScrollView style={{ flex: 1 }}>
        <ScrollableContent scrollGesture={native} />
      </ScrollView>
    </GestureDetector>
  );
}

function ScrollableContent({ scrollGesture }) {
  return (
    <View>
      {COLORS.map((color) => (
        <Rectangle key={color} color={color} scrollGesture={scrollGesture} />
      ))}
    </View>
  );
}

function Rectangle({ color, scrollGesture }) {
  const pan = Gesture.Pan().blocksExternalGesture(scrollGesture);

  return (
    <View
      key={color}
      style={{ width: '100%', height: 250, backgroundColor: color }}>
      <GestureDetector gesture={pan}>
        <View style={{ width: '100%', height: 50, backgroundColor: 'black' }} />
      </GestureDetector>
    </View>
  );
}
```

## Remarks

* `Native` gesture can be used as part of gesture composition and cross-component interactions just like any other gesture. You can use this to block a native component for the duration of the gesture or to make it work alongside a gesture.

danger

Do not use `Native` gesture with components exported by React Native Gesture Handler. Those come with a native gesture handler preapplied. Attaching a native gesture twice will likely result in the components not working as intended.

## Config

### Properties specific to `NativeGesture`:

### `shouldActivateOnStart(value: boolean)` (**Android only**)

When `true`, underlying handler will activate unconditionally when it receives any touches in `BEGAN` or `UNDETERMINED` state.

### `disallowInterruption(value: boolean)`

When `true`, cancels all other gesture handlers when this `NativeViewGestureHandler` changes its state to `ACTIVE`.

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

## Event data

### Event attributes specific to `NativeGesture`:

### `pointerInside`

True if gesture was performed inside of containing view, false otherwise.

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
