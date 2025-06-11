# Background Color

| Class              | Support        |
| ------------------ | -------------- |
| ```
bg-{n}
```     | ✅ Full Support |
| ```
bg-[n]
```     | ✅ Full Support |
| ```
bg-inherit
``` | 🌐 Web only    |
| ```
bg-current
``` | 🌐 Web only    |

backgroundOpacity (native only)

For performance reasons, Nativewind renders with the `corePlugin` `backgroundOpacity` disabled. This plugin allows text to dynamically change its opacity via the `--tw-background-opacity` variable. Instead, the opacity is set as a static value in the `color` property.

If you need to use this feature, you can enable it by adding the following to your `tailwind.config.js` file:

```
module.exports = {
  /* ...  */
  corePlugins: {
    backgroundOpacity: true,
  },
};
```
