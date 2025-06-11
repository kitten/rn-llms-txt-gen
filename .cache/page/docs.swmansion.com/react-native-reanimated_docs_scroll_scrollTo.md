# scrollTo

`scrollTo` lets you synchronously scroll to a given X or Y offset.

## Reference

```
import { scrollTo } from 'react-native-reanimated';

function App() {
  const animatedRef = useAnimatedRef();
  const scrollY = useSharedValue(0);

  useDerivedValue(() => {
    scrollTo(animatedRef, 0, scrollY.value, true);
  });

  return (
    <Animated.ScrollView ref={animatedRef}>{/* ... */}</Animated.ScrollView>
  );
}
```

### Arguments

#### `animatedRef`

An animated ref connected to the ScrollView (or other scrollable) component you'd want to scroll on. The animated ref has to be passed either to an Animated component or a React Native built-in component.

#### `x`

Value in pixels to scroll to on the horizontal X axis.

#### `y`

Value in pixels to scroll to on the vertical Y axis.

#### `animated`

Whether the scroll should be smooth (`true`) or instant (`false`).

### Returns

`scrollTo` returns `undefined`.

## Example

## Remarks

* The `scrollTo` function can only be called from the UI thread.
* Supports `Animated.FlatList`.
* Usually works with other ScrollView-like and FlatList-like components if they use a `ScrollView` under the hood and are made animated.
* Scrollable components must implement `getScrollableNode` method (and `getNativeScrollRef` method for the New Architecture) to be compatible with `scrollTo`.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
