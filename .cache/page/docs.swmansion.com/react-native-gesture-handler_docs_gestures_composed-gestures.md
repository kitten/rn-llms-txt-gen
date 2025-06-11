# Composed gestures

Composed gestures (`Race`, `Simultaneous`, `Exclusive`) provide a simple way of building relations between gestures. See Gesture Composition for more details.

## Reference

```
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

function App() {
  const pan = Gesture.Pan();
  const longPress = Gesture.LongPress();

  const composed = Gesture.Race(pan, longPress);

  return (
    <GestureDetector gesture={composed}>
      <Animated.View />
    </GestureDetector>
  );
}
```
