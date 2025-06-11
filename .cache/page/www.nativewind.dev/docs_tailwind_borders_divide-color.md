Divide Color

# Divide Color

## Usage

Please refer to the documentation on the Tailwind CSS website

CAUTION

`Divide Color` was temporary removed in `v4`. We are working to re-add it in the future.

## Compatibility

| Class                  | Support     |
| ---------------------- | ----------- |
| ```
divide-{n}
```     | 🌐 Web only |
| ```
divide-[n]
```     | 🌐 Web only |
| ```
divide-inherit
``` | 🌐 Web only |
| ```
divide-current
``` | 🌐 Web only |

divideOpacity (native only)

For performance reasons, Nativewind renders with the `corePlugin` `divideOpacity` disabled. This plugin allows the divide color to dynamically change its opacity via the `--tw-divide-opacity` variable. Instead, the opacity is set as a static value in the `color` property.

If you need to use this feature, you can enable it by adding the following to your `tailwind.config.js` file:

```
module.exports = {
  /* ...  */
  corePlugin: {
    divideOpacity: true,
  },
};
```
