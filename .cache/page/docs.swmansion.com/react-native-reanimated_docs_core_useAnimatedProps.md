# useAnimatedProps

`useAnimatedProps` lets you create an animated props object which can be animated using shared values. This object is used to animate properties of third-party components.

For animating style use `useAnimatedStyle` instead.

## Reference

```
import { useAnimatedProps } from 'react-native-reanimated';

function App() {
  const animatedProps = useAnimatedProps(() => {
    return {
      opacity: sv.value ? 1 : 0,
    };
  });

  return <Animated.View animatedProps={animatedProps} />;
}
```

### Arguments

#### `updater`

A function returning an object with properties you want to animate.

#### `dependencies`Optional

An optional array of dependencies.

Only relevant when using Reanimated without the Babel plugin on the Web.

#### `adapters`Optional

An optional function or an array of functions.

Sometimes when working with third-party libraries properties might be named differently on the API surface from what they really represent on the native side. Adapters make it possible to handle these cases by defining a way to convert these props.

Reanimated comes with two built-in adapters:

* `SVGAdapter` for handling `transform` property in `react-native-svg`
* `TextInputAdapter`.

You can create your own adapters using `createAnimatedPropAdapter` function.

Here's an example of adapting `fill` and `stroke` properties from `react-native-svg` to be able to animate them with Reanimated.

Expand the full code

```
const adapter = createAnimatedPropAdapter(
  (props) => {
    if (Object.keys(props).includes('fill')) {
      props.fill = { type: 0, payload: processColor(props.fill) };
    }
    if (Object.keys(props).includes('stroke')) {
      props.stroke = { type: 0, payload: processColor(props.stroke) };
    }
  },
  ['fill', 'stroke']
);
```

### Color-related properties

Color-related properties that come from custom components won't work in most cases as these props are in a format incomprehensible for native side. For most commonly used color-related properties we integrated the color processing to our code, managed by our predefined list in Colors.ts file.

However, when your desired color property is not on the list and you want to use it with `useAnimatedProps` - manual processing is necessary. You need to explicitly wrap such color properties with `processColor` function to ensure they are correctly interpreted by the native side.

You can check full list of automatically processed props here - Colors.ts

```
import { processColor } from 'react-native-reanimated';

function App() {
  const animatedProps = useAnimatedProps(() => {
    const mainColor = interpolateColor(
      colorProgress.value,
      [0, 1],
      ['red', 'blue']
    );

    const bgColor = interpolateColor(
      colorProgress.value,
      [0, 1],
      ['green', 'yellow']
    );

    return {
      // `colors` prop is not on our list - we need to process it manually
      colors: processColor([mainColor, bgColor]),
    };
  });
}
```

## Returns

`useAnimatedProps` returns an animated props object which has to be passed to `animatedProps` property of an Animated component that you want to animate.

## Example

## Remarks

* You can share animated props between components to avoid code duplication.
* We recommend to create adapters outside of the component's body to avoid unnecessary recalculations.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
