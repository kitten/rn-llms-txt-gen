# Layout transitions

Layout transitions allows you to replace layout changes with smooth transitions. Each layout change may include changes of size and position and both of them can be animated.

## Predefined Transitions

Below we listed all of the currently available predefined layout transitions with their layout animation modifiers.

## Linear transition

Linear transition animates both position and dimension in the same way.

### Reference

```
import { LinearTransition } from 'react-native-reanimated';

function App() {
  return <Animated.View layout={LinearTransition} />;
}
```

### Modifiers

#### EasingOptional

Easing modifiers are time-based modifiers that relay on `withTiming` function.

```
LinearTransition.easing(Easing.ease);
```

* `.easing(easingFunction: EasingFunction)` is an easing function which defines the animation curve. Defaults to `Easing.inOut(Easing.quad)`

note

The `.easing(...)` modifiers have no effect when `.springify()` is used.

#### Spring-basedOptional

Spring-based modifiers relay on `withSpring` function. Just as in `withSpring` config, spring-based modifiers can be physics-based (have `mass` and `damping` modifiers) or duration-based (have `duration` and `dampingRatio` modifiers).

info

The `mass` and `damping` (physics-based) properties can't be used at the same time as `duration` and `dampingRatio` (duration-based).

When used together `duration` and `dampingRatio` overrides `mass` and `damping` props.

```
LinearTransition.springify()
  .damping(30)
  .mass(5)
  .rotate(20)
  .stiffness(10)
  .overshootClamping(false)
  .restDisplacementThreshold(0.1)
  .restSpeedThreshold(5);
```

* `.springify()` enables the spring-based animation configuration.
* `.damping(value: number)` decides how quickly a spring stops moving. Higher damping means the spring will come to rest faster. Defaults to `10`.
* `.dampingRatio(value: number)` decides how damped the spring is. Value `1` means the spring is critically damped, and value `>1` means the spring is overdamped. Defaults to `0.5`.
* `.mass(value: number)` is the weight of the spring. Reducing this value makes the animation faster. Defaults to `1`.
* `.rotate(degree: string)` lets you rotate the element.
* `.stiffness(value: number)` decides how bouncy the spring is - the higher the number, the less bouncy it is. Defaults to `100`.
* `.overshootClamping(value: boolean)` decides whether a spring can bounce over the designated position. Defaults to `false`.
* `.restDisplacementThreshold(value: number)` is the displacement below which the spring will snap to the designated position without further oscillations. Defaults to `0.001`.
* `.restSpeedThreshold(value: number)` is the speed in pixels per second below which the spring will snap to the designated position without further oscillations. Defaults to `2`.

#### CommonOptional

```
LinearTransition.delay(500)
  .reduceMotion(ReduceMotion.Never)
  .withInitialValues({ transform: [{ translateY: 420 }] })
  .withCallback((finished) => {
    console.log(`finished without interruptions: ${finished}`);
  });
```

* `.duration(duration: number)` sets length of the animation (in milliseconds). Defaults to '300'.
* `.delay(duration: number)` is the delay before the animation starts (in milliseconds). Defaults to `0`.
* `.reduceMotion(reduceMotion: ReduceMotion)` determines how the animation responds to the device's reduced motion accessibility setting.
* `.withInitialValues(values: StyleProps)` allows to override the initial config of the animation.
* `.withCallback(callback: (finished: boolean) => void)` is the callback that will fire after the animation ends. Sets `finished` to `true` when animation ends without interruptions, and `false` otherwise.

### Remarks

* The animation will end if **both** the animation speed is below `restSpeedThreshold` and the distance to its end is less than `restDisplacementThreshold`. Keep in mind that if you haven't set one of the thresholds, its value will be set to the default.

### Example

Your browser does not support the video tag.

Your browser does not support the video tag.

## Sequenced Transition

Sequenced transition animates x-position and width first, then y-position and height.

### Reference

```
import { SequencedTransition } from 'react-native-reanimated';

function App() {
  return <Animated.View layout={SequencedTransition} />;
}
```

### Modifiers

```
SequencedTransition.duration(1000)
  .delay(500)
  .reverse()
  .reduceMotion(ReduceMotion.Never)
  .withCallback((finished) => {
    console.log(`finished without interruptions: ${finished}`);
  });
```

* `.duration(duration: number)` sets length of the animation (in milliseconds). Defaults to '500'.
* `.delay(duration: number)` is the delay before the animation starts (in milliseconds). Defaults to `0`.
* `.reverse()` determines if the animation should run in reverse. Defaults to `false`.
* `.reduceMotion(reduceMotion: ReduceMotion)` determines how the animation responds to the device's reduced motion accessibility setting.
* `.withCallback(callback: (finished: boolean) => void)` is the callback that will fire after the animation ends. Sets `finished` to `true` when animation ends without interruptions, and `false` otherwise.

### Example

Your browser does not support the video tag.

Your browser does not support the video tag.

## Fading Transition

Fading transition animates the opacity of component. It will disappear while having previous position and dimensions and appear with new ones.

### Reference

```
import { FadingTransition } from 'react-native-reanimated';

function App() {
  return <Animated.View layout={FadingTransition} />;
}
```

### Modifiers

```
FadingTransition.duration(1000)
  .delay(500)
  .reduceMotion(ReduceMotion.Never)
  .withCallback((finished) => {
    console.log(`finished without interruptions: ${finished}`);
  });
```

* `.duration(duration: number)` sets length of the animation (in milliseconds). Defaults to '500'.
* `.delay(duration: number)` is the delay before the animation starts (in milliseconds). Defaults to `0`.
* `.reduceMotion(reduceMotion: ReduceMotion)` determines how the animation responds to the device's reduced motion accessibility setting.
* `.withCallback(callback: (finished: boolean) => void)` is the callback that will fire after the animation ends. Sets `finished` to `true` when animation ends without interruptions, and `false` otherwise.

### Example

Your browser does not support the video tag.

Your browser does not support the video tag.

## Jumping Transition

Jumping transition makes components "jump" to the new position.

### Reference

```
import { JumpingTransition } from 'react-native-reanimated';

function App() {
  return <Animated.View layout={JumpingTransition} />;
}
```

### Modifiers

```
JumpingTransition.duration(1000)
  .delay(500)
  .reduceMotion(ReduceMotion.Never)
  .withCallback((finished) => {
    console.log(`finished without interruptions: ${finished}`);
  });
```

* `.duration(duration: number)` sets length of the animation (in milliseconds). Defaults to '300'.
* `.delay(duration: number)` is the delay before the animation starts (in milliseconds). Defaults to `0`.
* `.reduceMotion(reduceMotion: ReduceMotion)` determines how the animation responds to the device's reduced motion accessibility setting.
* `.withCallback(callback: (finished: boolean) => void)` is the callback that will fire after the animation ends. Sets `finished` to `true` when animation ends without interruptions, and `false` otherwise.

### Example

Your browser does not support the video tag.

Your browser does not support the video tag.

## Curved Transition

Curved transition enables animation of all parameters (`X`, `Y`, `width`, `height`) with different easing each. It makes component movement path look curved.

### Reference

```
import { CurvedTransition } from 'react-native-reanimated';

function App() {
  return <Animated.View layout={CurvedTransition} />;
}
```

### Modifiers

```
CurvedTransition.duration(1000)
  .delay(500)
  .easingX(Easing.in(Easing.exp))
  .easingY(Easing.out(Easing.quad))
  .easingWidth(Easing.in(Easing.ease))
  .easingHeight(Easing.out(Easing.exp))
  .reduceMotion(ReduceMotion.Never)
  .withCallback((finished) => {
    console.log(`finished without interruptions: ${finished}`);
  });
```

* `.duration(duration: number)` sets length of the animation (in milliseconds). Defaults to '300'.
* `.delay(duration: number)` is the delay before the animation starts (in milliseconds). Defaults to `0`.
* `.easingX(easing: EasingFunction)` defines easing animation for x-position.
* `.easingY(easing: EasingFunction)` defines easing animation for y-position.
* `.easingWidth(easing: EasingFunction)` defines easing animation for width.
* `.easingHeight(easing: EasingFunction)` defines easing animation for height.
* `.reduceMotion(reduceMotion: ReduceMotion)` determines how the animation responds to the device's reduced motion accessibility setting.
* `.withCallback(callback: (finished: boolean) => void)` is the callback that will fire after the animation ends. Sets `finished` to `true` when animation ends without interruptions, and `false` otherwise.

### Remarks

* Length of the duration is shared for all of the easings.

### Example

Your browser does not support the video tag.

Your browser does not support the video tag.

## Entry/Exit Transition

Entry/Exit transition lets you choose layout animations for entering and exiting. It combines both of them into a one and applies to the layout. Moreover, instead of picking currently available animations, you are welcome to create your own one.

### Reference

```
import { EntryExitTransition } from 'react-native-reanimated';

function App() {
  return <Animated.View layout={EntryExitTransition} />;
}
```

### Modifiers

```
EntryExitTransition.duration(1000)
  .delay(500)
  .entering(FlipInEasyX)
  .exiting(FlipOutEasyY)
  .reduceMotion(ReduceMotion.Never)
  .withCallback((finished) => {
    console.log(`finished without interruptions: ${finished}`);
  });
```

* `.duration(duration: number)` sets length of the animation (in milliseconds). Default depends on entry/exit animation.
* `.delay(duration: number)` is the delay before the animation starts (in milliseconds). Defaults to `0`.
* `.exiting(animation)` determines animation shown when element is removed from position. Defaults to `FadeOut`.
* `.entering(animation)` determines animation shown when element is added to new position. Defaults to `FadeIn`.
* `.reduceMotion(reduceMotion: ReduceMotion)` determines how the animation responds to the device's reduced motion accessibility setting.
* `.withCallback(callback: (finished: boolean) => void)` is the callback that will fire after the animation ends. Sets `finished` to `true` when animation ends without interruptions, and `false` otherwise.

### Remarks

* Duration equals sum of entering and exiting durations.

### Example

Your browser does not support the video tag.

Your browser does not support the video tag.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
