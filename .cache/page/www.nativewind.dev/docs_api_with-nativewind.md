withNativeWind

# withNativeWind

`withNativeWind` is a higher order component that updates your Metro configuration to support NativeWind.

The only required option is `input`, which is the relative path to your `.css` file.

```
import { withNativeWind } from "native-wind/metro";
 
module.exports = withNativeWind(config, {
  input: "<relative path to your .css file>",
});
```

## Options

* `output`: The relative path to the output file. Defaults to `<projectRoot>/node_modules/.cache/nativewind/`
* `projectRoot`: Abolsute path to your project root. Only used to set `output`
* `inlineRem`: The numeric value used to inline the value of `rem` units on native. `false` will disable the behaviour. Defaults to `14`. More information
* `configPath`: Relative path to your `tailwind.config` file. Defaults to `tailwind.config`. Recommended you use `@config` instead of this option.
* `hotServerOptions`: Options to pass to the hot server. Defaults to `{ port: 8089 }`

### Experimental Options

These options are available under the `experiments` key.

* `inlineAnimations`: Use `react-native-reanimated`'s inline shared values instead of hooks. This greatly improves performance, but has issues with fast-refresh
