React Native Reanimated

Version: 3.x

On this page

# useAnimatedKeyboard

`useAnimatedKeyboard` lets you create animations based on state and height of the virtual keyboard.

caution

Android implementation of `useAnimatedKeyboard` has drawbacks on Android SDK < 30, for more details see remarks section.

## Reference

```
import { useAnimatedKeyboard, useAnimatedStyle } from 'react-native-reanimated';

export default function App() {
  const keyboard = useAnimatedKeyboard();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value }],
  }));
}
```

### Arguments

#### `options`Optional

Optional object containing additional configuration:

* `isStatusBarTranslucentAndroid` - removes top inset on Android i.e. to use translucent status bar on Android, set this option to `true`. Defaults to `false`. Ignored on iOS.

### Returns

Hook `useAnimatedKeyboard` returns an object containing these fields:

|Name|Type|Description|
|-|-|-|
|height|`SharedValue<number>`|A shared value containing current height of the keyboard.|
|state|`SharedValue<KeyboardState>`|A shared value containing current state of the keyboard. Possible states: `{ CLOSED, OPEN, CLOSING, OPENING }`|

## Example

## Remarks

* On Android, make sure to set `android:windowSoftInputMode` in your `AndroidManifest.xml` to `adjustResize`. Then, using the `useAnimatedKeyboard` hook disables the default Android behavior (resizing the view to accommodate keyboard) in the whole app. Using values from `useAnimatedKeyboard` hook you can handle the keyboard yourself. Unmounting all components that use `useAnimatedKeyboard` hook brings back the default Android behavior.

* On Android, using the `useAnimatedKeyboard` hook expands root view to full screen (immersive mode) and takes control over insets management.

  * When `isStatusBarTranslucentAndroid` is `false` it applies the top margin according to the insets.

  * When `isStatusBarTranslucentAndroid` is `true` it sets top margin to `0`.

  * When `isNavigationBarTranslucentAndroid` is `false` it applies the bottom margin according to the insets.

  * When `isNavigationBarTranslucentAndroid` is `true` it sets bottom margin to `0`.

* On Android, when using navigation with native header, `isStatusBarTranslucentAndroid` doesn't affect the top inset.

* On Android SDK < 30, when status bar is hidden, the keyboard reverts to the default Android behavior.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|❌|

* Reference

  * Arguments
  * Returns

* Example

* Remarks

* Platform compatibility
