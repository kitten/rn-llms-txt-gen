Text Color

# Text Color

## Usage

Please refer to the documentation on the Tailwind CSS website

## Compatibility

| Class                | Support        |
| -------------------- | -------------- |
| ```
text-{n}
```     | ✅ Full Support |
| ```
text-[n]
```     | ✅ Full Support |
| ```
text-inherit
``` | 🌐 Web only    |
| ```
text-current
``` | 🌐 Web only    |

textOpacity (native only)

For performance reasons, Nativewind renders with the `corePlugin` `textOpacity` disabled. This plugin allows text to dynamically change its opacity via the `--tw-text-opacity` variable. Instead, the opacity is set as a static value in the `color` property.

If you need to use this feature, you can enable it by adding the following to your `tailwind.config.js` file:

```
module.exports = {
  /* ...  */
  corePlugin: {
    textOpacity: true,
  },
};
```
