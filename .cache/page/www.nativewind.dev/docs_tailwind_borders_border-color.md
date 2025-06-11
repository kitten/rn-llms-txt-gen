Border Color

# Border Color

## Usage

Please refer to the documentation on the Tailwind CSS website

## Compatibility

| Class                  | Support        |
| ---------------------- | -------------- |
| ```
border-{n}
```     | ✅ Full Support |
| ```
border-[n]
```     | ✅ Full Support |
| ```
border-inherit
``` | 🌐 Web only    |
| ```
border-current
``` | 🌐 Web only    |

borderOpacity (native only)

For performance reasons, Nativewind renders with the `corePlugin` `borderOpacity` disabled. This plugin allows the border color to dynamically change its opacity via the `--tw-border-opacity` variable. Instead, the opacity is set as a static value in the `color` property.

If you need to use this feature, you can enable it by adding the following to your `tailwind.config.js` file:

```
module.exports = {
  /* ...  */
  corePlugin: {
    borderOpacity: true,
  },
};
```
