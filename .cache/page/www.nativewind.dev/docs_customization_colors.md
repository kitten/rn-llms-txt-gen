Colors

# Colors

You can customize your colors in the same manner as Tailwind CSS. Please refer to the Tailwind CSS documentation for more information.

## Platform Colors

Unlike the web, which uses a common color palette, native platforms have their own unique system colors which are accessible through PlatformColor.

Nativewind allows you to use access PlatformColor via the `platformColor()` utility.

```
// tailwind.config.js
 
const { platformSelect, platformColor } = require("nativewind/theme");
 
module.exports = {
  theme: {
    extend: {
      colors: {
        error: platformSelect({
          // Now you can provide platform specific values
          ios: platformColor("systemRed"),
          android: platformColor("?android:colorError"),
          default: "red",
        }),
      },
    },
  },
};
```
