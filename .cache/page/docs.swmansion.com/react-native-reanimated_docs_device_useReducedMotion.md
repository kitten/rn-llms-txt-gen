React Native Reanimated

Version: 3.x

On this page

# useReducedMotion

`useReducedMotion` lets you query the reduced motion system setting. You can use it to disable animations.

## Reference

```
import { useReducedMotion } from 'react-native-reanimated';

function App() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    // display static content ✨
  } else {
    // run animations ✨
  }

  // ...
}
```

### Returns

`useReducedMotion` returns a boolean indicating whether the reduced motion setting was enabled when the app started.

## Example

## Remarks

* Changing the reduced motion system setting doesn't cause your components to rerender.
* In contrast to `AccessibilityInfo.isReduceMotionEnabled()` the `useReducedMotion` hook lets you get the value synchronously.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|

* Reference
  * Returns
* Example
* Remarks
* Platform compatibility
