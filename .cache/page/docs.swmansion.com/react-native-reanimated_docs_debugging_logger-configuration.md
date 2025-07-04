# Logger configuration

Reanimated shows warnings that indicate misuses of the library API, such as modifying the shared value during component re-render. These logs can be configured to be more or less verbose.

The **default** logger configuration doesn't require any user setup and displays **all warnings and errors**. If you want to change this behavior, use the `configureReanimatedLogger` function.

## Reference

To modify the default Reanimated logger configuration, import `configureReanimatedLogger` from `react-native-reanimated` and call it with the desired configuration.

```
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: true, // Reanimated runs in strict mode by default
});
```

### Configuration options

#### `level`

A value of the `ReanimatedLogLevel` enum that defines the **minimum level** of the logs that will be shown.

#### `strict`

A boolean value that enables or disables **strict** mode. When **strict** mode is enabled, Reanimated will show more warnings that can help you to catch potential issues in your code.

## Remarks

* The logger configuration is global and affects all warnings and errors displayed by Reanimated. There's no option to configure the logger per file/component.

* The `configureReanimatedLogger` function should be called before any Reanimated animations are created, e.g. in the root file of your app.

* The `configureReanimatedLogger` function is intended for application developers. If you are creating a library that relies on Reanimated, don't include this function call in your library source code - users will inherit the configuration which will override the default configuration in the Reanimated library.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
