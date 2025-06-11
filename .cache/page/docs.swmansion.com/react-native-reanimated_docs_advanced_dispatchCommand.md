Version: 3.x

On this page

# dispatchCommand

`dispatchCommand` allows you to run commands on a native component from the UI thread directly.

## Reference

```
import { dispatchCommand } from 'react-native-reanimated';

function App() {
  const animatedRef = useAnimatedRef();

  const gesture = Gesture.Tap().onStart(() => {
    dispatchCommand(animatedRef, 'focus');
  });

  return (
    <>
      <AnimatedTextInput ref={animatedRef} style={styles.input} />
      <GestureDetector gesture={gesture}>
        <Button title="Focus" />
      </GestureDetector>
    </>
  );
}
```

### Arguments

#### `animatedRef`

An animated ref connected to the component you'd want to update. The animated ref has to be passed either to an Animated component or a React Native built-in component.

#### `commandName`

The name of the command to execute, e.g. `'focus'` or `'scrollToEnd'`.

#### `args`Optional

The array of command arguments. Defaults to an empty array.

## Example

Your browser does not support the video tag.

Your browser does not support the video tag.

Expand the full code

```
  const goDown = Gesture.Tap().onStart(() => {
    dispatchCommand(tosRef, 'scrollToEnd', [true]);
    dispatchCommand(loginRef, 'focus');
  });
```

## Remarks

* Commands differ from component to component. Check relevant sources i.e. React Native documentation on components to see which commands are available.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|❌|
