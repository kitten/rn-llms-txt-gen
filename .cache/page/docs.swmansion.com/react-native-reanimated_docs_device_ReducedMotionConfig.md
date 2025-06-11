React Native Reanimated

Version: 3.x

On this page

# ReducedMotionConfig

`ReducedMotionConfig` component let's you change behavior in response to the device's reduced motion accessibility setting. By default it disables all animation when the reduced motion is enabled on a device. You can adjust it for your specific use case. You can learn more about Accessibility and `useReducedMotion` in Reanimated.

caution

The new configuration will be applied globally across the entire application.

## Reference

```
import { ReducedMotionConfig, ReduceMotion } from 'react-native-reanimated';

function App() {
  return (
    // ...
    <ReducedMotionConfig mode={ReduceMotion.Never} />
    // ...
  );
}
```

### Arguments

#### `mode`

A parameter that determines how animations should behave in response to the device's reduce motion accessibility setting.

* `ReduceMotion.System` - This value adjusts the animation behavior based on whether the reduced motion accessibility setting is activated on the device. When enabled, the animation is disabled; otherwise, it remains active.
* `ReduceMotion.Always` - With this setting, the animation is consistently disabled, regardless of the device's accessibility configuration.
* `ReduceMotion.Never` - This option ensures that the animation remains enabled at all times.

## Example

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|

* Reference
  * Arguments
* Example
* Platform compatibility
