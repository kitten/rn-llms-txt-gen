Font Family

# Font Family

## Usage

Please refer to the documentation on the Tailwind CSS website

React Native loads fonts differently between iOS and Android. We recommend following https\://github.com/jsamr/react-native-font-demo to use fonts that work consistently on all platforms and allow you to use Tailwind CSS as expected.

### Differences on Native

React Native does not support fallback fonts. If an array of fonts are provided, Nativewind will only use the first font.

### Adding fonts to your theme

Nativewind will not load/link fonts into your app. If you have any issues with the font family or weights not rendering, please first verify it works with inline styles.

tailwind.config.js

```
import { platformSelect } from "nativewind/theme";
 
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        example: ["ExampleFontFamily"],
        system: platformSelect({
          ios: "Georgia",
          android: "sans-serif",
          default: "ui-sans-serif",
        }),
      },
    },
  },
};
```

## Compatibility

| Class              | Support        |
| ------------------ | -------------- |
| ```
font-sans
```  | ✅ Full Support |
| ```
font-serif
``` | ✅ Full Support |
| ```
font-mono
```  | ✅ Full Support |
| ```
font-[n]
```   | ✅ Full Support |
| ```
font-{n}
```   | ✅ Full Support |
