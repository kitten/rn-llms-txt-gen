# Keyframe animations

Keyframes are animation definition schemas that let you create complex animations. They allow you more flexibility than standard Entering and Exiting presets.

## Reference

```
import { Keyframe } from 'react-native-reanimated';

const keyframe = new Keyframe({
  0: {
    transform: [{ rotate: '0deg' }],
  },
  45: {
    transform: [{ rotate: '100deg' }],
    easing: Easing.exp,
  },
  100: {
    transform: [{ rotate: '45deg' }],
  },
});

function App() {
  return <Animated.View entering={keyframe} />;
}
```

### Arguments

#### `definitions`

An object, that contains definitions of your animation. The object keys should be within range `0-100` and correspond to animation progress. The object values should consist of style props and optionally of an easing function. If easing property is not provided, it defaults to `Easing.linear`.

The keys take the following values:

* `0` or `from`: Initial state of the object.
* Middle points (e.g., `45`): Intermediate states of the object.
* `100` or `to`: Final state of the object.

The key `0` (or `from`) should be assigned the style that you want for your object at the beginning of the animation. The key `100` (or `to`) should be assigned the style that you want for your object at the end of the animation.

## Modifiers

```
keyframe
  .duration(1000)
  .delay(500)
  .reduceMotion(ReduceMotion.Never)
  .withCallback((finished) => {
    console.log(`finished without interruptions: ${finished}`);
  });
```

* `.duration(durationMs: number)` is the length of the animation (in milliseconds). Defaults to `500`.
* `.delay(durationMs: number)` is the delay before the animation starts (in milliseconds). Defaults to `0`.
* `.reduceMotion(reduceMotion: ReduceMotion)` determines how the animation responds to the device's reduced motion accessibility setting.
* `.withCallback(callback: (finished: boolean) => void)` is the callback that will fire after the animation ends. Sets `finished` to `true` when animation ends without interruptions, and `false` otherwise.

## Remarks

* Providing keyframe `0` or `from` is required as it contains the initial state of the object you want to animate.
* Ensure you provide the initial value for all style properties you want to animate in other keyframes.
* If you want to add easing to an animation between two keyframes you have to pass it to the second one. As a result you should never provide any easing to keyframe `0`.
* Do not provide both `0` and `from`, or `100` and `to` keyframes, as it will result in a parsing conflict.
* If you want to animate transform style, make sure that all properties in the transformation array are in the same order in all keyframes.

## Example

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
