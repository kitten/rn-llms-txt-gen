# withSpring

`withSpring` lets you create spring-based animations.

## Reference

```
import { withSpring } from 'react-native-reanimated';

function App() {
  sv.value = withSpring(0);
  // ...
}
```

### Arguments

#### `toValue`

The value on which the animation will come at rest. Supported categories:

* **numbers** - number can be a either a number or a string

* **suffixed numbers** - strings being a number with a unit, like `"5.5%"`, `"90deg"` or even `"3bananas`". Just make sure there is no space between number and suffix, also suffix should consist of basic english letters only.

* **colors**

  * Hexadecimal integer - e.g. `0xff1234`,
  * RGB (Red, Green, Blue) - e.g. `"rgb(100, 50, 0)"`,
  * RGBA (Red, Green, Blue, Alpha) - e.g. `"rgba(255, 105, 180, 0)`",
  * RGB Hexadecimal - e.g. `"#53575E"`,
  * HSL (Hue, Saturation, Lightness) - e.g.`"hsl(0, 50%, 50%)"`,
  * Named colors - e.g. `"dodgerblue"`.

* **objects** - object with properties that will be animated separately,

* **array** - array of numbers, each value will be animated separately.

* **transformation matrix** - an array consisting of exactly 16 numerical values is by default animated as a transformation matrix. The numbers in the matrix aren't animated separately. Instead, the array gets decomposed into 3 basic transformations - rotation, scale, and translation – which are then animated separately.

Please mind, that `toValue` and the animated shared value have to share the same category (e.g. you can't animate `width` from `100px` to `50%`).

#### `config`Optional

The spring animation configuration.

Available for physics-based spring:

|Name|Type|Default|Description|
|-|-|-|-|
|massOptional|`number`|1|The weight of the spring. Reducing this value makes the animation faster.|
|dampingOptional|`number`|10|How quickly a spring slows down. Higher damping means the spring will come to rest faster.|

Available for duration-based spring:

|Name|Type|Default|Description|
|-|-|-|-|
|durationOptional|`number`|2000|Length of the animation (in milliseconds). Available in Reanimated ≥ 3.2.x|
|dampingRatioOptional|`number`|0.5|How damped the spring is. Value `1` means the spring is critically damped, and value `>1` means the spring is overdamped. Available in Reanimated ≥ 3.2.x|

info

The `mass` and `damping` (physics-based) properties can't be used at the same time as `duration` and `dampingRatio` (duration-based).

When used together `duration` and `dampingRatio` overrides `mass` and `damping` props.

Available for every spring animation:

|Name|Type|Default|Description|
|-|-|-|-|
|stiffnessOptional|`number`|100|How bouncy the spring is.|
|velocityOptional|`number`|0|Initial velocity applied to the spring equation.|
|overshootClampingOptional|`boolean`|false|Whether a spring can bounce over the `toValue`.|
|restDisplacementThresholdOptional|`number`|0.01|The displacement below which the spring will snap to `toValue` without further oscillations.|
|restSpeedThresholdOptional|`number`|2|The speed in pixels per second from which the spring will snap to `toValue` without further oscillations.|
|reduceMotionOptional|`ReduceMotion`|`ReduceMotion.System`|A parameter that determines how the animation responds to the device's reduced motion accessibility setting. Available in Reanimated ≥ 3.5.x|
|clampOptional|`[number, number]`|`undefined`|Limit of the scope of movement. If your spring would exceed this limit, then `dampingRatio` will be reduced (to make the spring less bouncy) Available in Reanimated ≥ 3.6.x|

#### `callback`Optional

A function called upon animation completion. If the animation is cancelled, the callback will receive `false` as the argument; otherwise, it will receive `true`.

### Returns

`withSpring` returns an animation object which holds the current state of the animation. It can be either assigned directly to a shared value or can be used as a value for a style object returned from useAnimatedStyle.

## Example

## Remarks

* The callback passed to the 3rd argument is automatically workletized and ran on the UI thread.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
