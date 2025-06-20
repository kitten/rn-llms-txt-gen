# withTiming

`withTiming` lets you create an animation based on duration and easing.

## Reference

```
import { withTiming } from 'react-native-reanimated';

function App() {
  sv.value = withTiming(0);
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

The timing animation configuration.

Available properties:

|Name|Type|Default|Description|
|-|-|-|-|
|duration|`number`|300|Length of the animation (in milliseconds).|
|easing|`Easing`|`Easing.inOut(Easing.quad)`|An easing function which defines the animation curve.|
|reduceMotion|`ReduceMotion`|`ReduceMotion.System`|A parameter that determines how the animation responds to the device's reduced motion accessibility setting.|

##### `Easing`

The `easing` parameter lets you fine-tune the animation over the specified time duration. For example, you can make the animation begin with fast acceleration and then slow down towards the end, or start slowly, then pick up speed before slowing down again towards the end.

It will all start to make sense when you compare a `linear` easing side by side with the default `Easing.inOut(Easing.quad)` easing.

Reanimated provides a selection of ready-to-use easing functions in the `Easing` module. You can find a visualization of some common easing functions at http\://easings.net/.

You can use our built-in easings by passing them as the `easing` property to the `withTiming` config:

```
import { Easing } from 'react-native-reanimated';

withTiming(sv.value, {
  easing: Easing.bounce,
});
```

Available functions:

* `back` provides a simple animation where the object goes slightly back before moving forward
* `bezier(x1: number, y1: number, x2: number, y2: number)` provides a cubic bezier curve
* `bounce` provides a bouncing animation
* `circle` provides a circular function
* `cubic` provides a cubic function
* `ease` provides a simple inertial animation
* `elastic(bounciness?: number)` provides a simple spring interaction
* `exp` provides an exponential function
* `linear` provides a linear function
* `poly(n: number)` can be used to implement quartic, quintic, and other higher power functions
* `quad` provides a quadratic function
* `sin` provides a sinusoidal function

The following helpers are used to modify other easing functions.

* `in(easing: EasingFunction)` runs an easing function forwards
* `inOut(easing: EasingFunction)` makes any easing function symmetrical
* `out(easing: EasingFunction)` runs an easing function backwards

#### `callback`Optional

A function called upon animation completion. If the animation is cancelled, the callback will receive `false` as the argument; otherwise, it will receive `true`.

### Returns

`withTiming` returns an animation object which holds the current state of the animation. It can be either assigned directly to a shared value or can be used as a value for a style object returned from useAnimatedStyle.

## Example

## Remarks

* The callback passed to the 3rd argument is automatically workletized and ran on the UI thread.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
