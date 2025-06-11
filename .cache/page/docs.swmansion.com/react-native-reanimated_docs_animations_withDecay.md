# withDecay

`withDecay` lets you create animations that mimic objects in motion with friction. The animation will start with the provided velocity and slow down over time according to the given deceleration rate until it stops.

## Reference

```
import { withDecay } from 'react-native-reanimated';

function App() {
  sv.value = withDecay({ velocity: 1 });
  // ...
}
```

### Arguments

#### `config`

The decay animation configuration.

Available properties:

|Name|Type|Default|Description|
|-|-|-|-|
|velocityOptional|`number`|0|Initial velocity of the animation.|
|decelerationOptional|`number`|0.998|The rate at which the velocity decreases over time.|
|clampOptional\*|`[number, number]`|\[]|Array of two numbers which restricts animation's range. Animation stops when either bound is reached unless the `rubberBandEffect` option is set to `true`. \*Required when `rubberBandEffect` is set to `true`.|
|velocityFactorOptional|`number`|1|Velocity multiplier.|
|rubberBandEffectOptional|`boolean`|false|Makes the animation bounce over the limit specified in `clamp`.|
|rubberBandFactorOptional|`number`|0.6|Strength of the rubber band effect.|
|reduceMotionOptional|`ReduceMotion`|`ReduceMotion.System`|A parameter that determines how the animation responds to the device's reduced motion accessibility setting.|

#### `callback`Optional

A function called on animation complete. In case the animation is cancelled, the callback will receive `false` as the argument, otherwise it will receive `true`.

### Returns

`withDecay` returns an animation object which holds the current state of the animation. It can be either assigned directly to a shared value or can be used as a value for a style object returned from useAnimatedStyle.

## Example

## Remarks

* The callback passed to the 2nd argument is automatically workletized and ran on the UI thread.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
