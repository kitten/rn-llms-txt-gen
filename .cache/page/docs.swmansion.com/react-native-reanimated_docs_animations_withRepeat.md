# withRepeat

`withRepeat` is an animation modifier that lets you repeat an animation given number of times or run it indefinitely.

## Reference

```
import { withRepeat } from 'react-native-reanimated';

function App() {
  sv.value = withRepeat(withSpring(0), 5);
  // ...
}
```

### Arguments

#### `animation`

An animation object you want to repeat.

#### `numberOfReps`Optional

The number of times the animation is going to be repeated. Defaults to `2`.

A non-positive value (e.g. `0` or `-1`) will cause the animation to repeat indefinitely until it is cancelled or torn down. For example, if the component unmounts or `cancelAnimation` was called.

#### `reverse`Optional

Whether the animation should run in reverse every other repetition. Defaults to `false`.

This option only supports animation functions (eg. `withSpring`) and doesn't work with animation modifiers (eg. `withSequence`).

#### `callback`Optional

A function called on animation complete. In case the animation is cancelled, the callback will receive `false` as the argument, otherwise it will receive `true`.

#### `reduceMotion`Optional

A parameter that determines how the animation responds to the device's reduced motion accessibility setting.

### Returns

`withRepeat` returns an animation object which holds the current state of the animation. It can be either assigned directly to a shared value or can be used as a value for a style object returned from useAnimatedStyle.

## Example

## Remarks

* The callback passed to the 4th argument is automatically workletized and ran on the UI thread.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
