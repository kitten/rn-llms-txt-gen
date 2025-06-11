Version: 3.x

On this page

# withSequence

`withSequence` is an animation modifier that lets you run animations in a sequence.

## Reference

```
import { withSequence } from 'react-native-reanimated';

function App() {
  sv.value = withSequence(withTiming(50), withTiming(0));
  // ...
}
```

### Arguments

#### `reduceMotion`Optional

A parameter that determines how the animation responds to the device's reduced motion accessibility setting.

#### `...animations`

Any number of animation objects to be run in a sequence.

### Returns

`withSequence` returns an animation object which holds the current state of the animation. It can be either assigned directly to a shared value or can be used as a value for a style object returned from useAnimatedStyle.

## Example

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
