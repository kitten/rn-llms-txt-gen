Version: 3.x

On this page

# withDelay

`withDelay` is an animation modifier that lets you start an animation with a delay.

## Reference

```
import { withDelay } from 'react-native-reanimated';

function App() {
  sv.value = withDelay(500, withTiming(0));
  // ...
}
```

### Arguments

#### `delayMs`

Duration (in milliseconds) before the animation starts.

#### `delayedAnimation`

Animation to delay.

#### `reduceMotion`Optional

A parameter that determines how the animation responds to the device's reduced motion accessibility setting.

### Returns

`withDelay` returns an animation object which holds the current state of the animation. It can be either assigned directly to a shared value or can be used as a value for a style object returned from useAnimatedStyle.

## Example

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
