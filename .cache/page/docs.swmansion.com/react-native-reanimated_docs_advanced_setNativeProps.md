Version: 3.x

On this page

# setNativeProps

`setNativeProps` lets you imperatively update component properties.

caution

`setNativeProps` is an escape hatch for specific edge-cases.

You should always reach for `useAnimatedStyle` and `useAnimatedProps` first when animating styles or properties.

## Reference

```
import { setNativeProps } from 'react-native-reanimated';

function App() {
  const animatedRef = useAnimatedRef();

  const tap = Gesture.Tap().onEnd(() => {
    setNativeProps(animatedRef, { text: '' });
  });

  return <TextInput ref={animatedRef} />;
}
```

### Arguments

#### `animatedRef`

An animated ref connected to the component you'd want to update. The animated ref has to be passed either to an Animated component or a React Native built-in component.

#### `updates`

An object with properties you want to update. These could be both style props (eg. `width`, `backgroundColor`) and regular props (eg. `text`).

### Returns

`setNativeProps` returns `undefined`.

## Example

## Remarks

* You should always reach for `useAnimatedStyle` and `useAnimatedProps` first when animating styles or properties.

* `setNativeProps` is supposed to only be used on the UI thread.

* `setNativeProps` function was created to allow updating props imperatively from gesture handlers. Because in other cases, you need to wrap `setNativeProps` with an additional `runOnUI` call, React Native's built-in `setNativeProps` proves to work better with fewer jumps between runtimes.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
