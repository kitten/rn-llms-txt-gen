Version: 3.x

On this page

# useScrollViewOffset

`useScrollViewOffset` lets you to create animations based on the offset of a `ScrollView`. The hook automatically detects if the `ScrollView` is horizontal or vertical.

## Reference

```
import { useScrollViewOffset } from 'react-native-reanimated';

function App() {
  const animatedRef = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(animatedRef);
  return (
    <Animated.ScrollView ref={animatedRef}>{/* ... */}</Animated.ScrollView>
  );
}
```

### Arguments

#### `animatedRef`

An animated ref connected to the ScrollView component you'd want to scroll on. The animated ref has to be passed either to an Animated component or a React Native built-in component.

#### `initialRef`Optional

An optional shared value to be updated with the scroll offset. If not provided a new shared value will be created internally.

### Returns

`useScrollViewOffset` returns a shared value which holds the current offset of the `ScrollView`.

## Example

## Remarks

* The `animatedRef` argument can be changed at will and the hook will correctly return values based on the ScrollView component it is connected to, for example:

  `useScrollViewOffset(someState ? someScrollRefA : someScrollRefB)`

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
