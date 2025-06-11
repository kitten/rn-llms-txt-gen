# useAnimatedStyle

`useAnimatedStyle` lets you create a styles object, similar to `StyleSheet` styles, which can be animated using shared values.

Styles defined using `useAnimatedStyle` have to be passed to `style` property of an Animated component. Styles are automatically updated whenever an associated shared value or React state changes.

In contrast to the inline styling, `useAnimatedStyle` allows to access values stored in shared values in the styles object it defines.

For animating properties use `useAnimatedProps` instead.

## Reference

```
import { useAnimatedStyle } from 'react-native-reanimated';

function App() {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: sv.value ? 1 : 0,
    };
  });

  return <Animated.View style={[styles.box, animatedStyles]} />;
}
```

### Arguments

#### `updater`

A function returning an object with style properties you want to animate. You can animate any style property available in React Native.

#### `dependencies`Optional

An optional array of dependencies.

Only relevant when using Reanimated without the Babel plugin on the Web.

## Returns

`useAnimatedStyle` returns an animated style object which has to be passed to the `style` property of an Animated component that you want to animate.

`useAnimatedStyle` mimics the behavior of `StyleSheet` as much as possible. `updater` callback returns a value that looks like a regular style object in which you can also use shared values.

## Example

## Remarks

* Animated styles take precedence over React Native's static styles. All values specified in animated styles override values from static styles.

```
function App() {
  const animatedStyles = useAnimatedStyle(() => ({
    width: sv.value,
  }));

  return (
    <Animated.View
      style={[
        animatedStyles, // ⚠️ overrides the static style width
        { width: 100 },
      ]}
    />
  );
}
```

* Animated styles don't follow the order in which they are specified in the style array. The last updated animated style is the one that takes effect.

* Removing the animated style from the view doesn't unset values that were applied in the animated style. To unset these values, you need to manually set them to `undefined` in the animated style.

* Mutating shared values in `useAnimatedStyle`'s callback is an undefined behavior which may lead to infinite loops.

```
function App() {
  const sv = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    sv.value = withTiming(1); // Don't do this!
    return { opacity: sv.value };
  });
}
```

* You can apply the value returned from `useAnimatedStyle` only to `Animated` components. Passing the animated styles to non-animated component will result in an error.

* Only define the dynamic part of your styles with `useAnimatedStyle` and keep the static ones separately using `StyleSheet` API or (if you really have to) with inline styles. That way you avoid lots of unnecessary style recalculations. Static and dynamic styles can be easily merged using the `[]` syntax:

```
function App() {
  const animatedStyles = useAnimatedStyle(() => ({
    offset: sv.value,
  }));

  return <Animated.View style={[styles.box, animatedStyles]} />;
}

const styles = StyleSheet.create({
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
  },
});
```

* You can share animated styles between components to avoid code duplication.

* The callback passed to the `useAnimatedStyle` is first run on the JavaScript thread and immediately after on the UI thread. This may cause an error if you write your code as if it's running on UI thread only. To avoid this, you can use the `global._WORKLET` variable to check if the code is running on the UI thread:

```
function App() {
  const animatedStyles = useAnimatedStyle(() => {
    if (global._WORKLET) {
      // UI thread only code
    } else {
      // JS thread fallback code
    }
  });
}
```

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
