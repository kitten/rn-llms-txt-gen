Functions & Directives

# Functions & Directives

## Overview

Nativewind allows the same functions and directives as Tailwind CSS. Please refer to the Tailwind CSS documentation.

These functions can be used within your theme, arbitrary class names, or within your custom CSS.

In addition to the functions and directives provided by Tailwind CSS, Nativewind polyfills the following CSS functions:

## var()

`var()` is a CSS function that allows you to use the value of a custom property (sometimes called a "CSS variable") inside the value of another property.

tailwind.config.js

```
module.exports = {
  theme: {
    extend: {
      color: {
        custom: "var(--my-custom-color)",
      },
    },
  },
};
```

```
// style: { color: "red" }
<Text className="text-custom [--my-custom-color:red]">
 
// style: { color: "green" }
<View style={vars({ "--my-custom-color": "green" })}>
  <Text className="text-custom">
</View>
```

## calc()

CAUTION

Support for `calc()` is limited and will be improved in the future.

`calc()` is a CSS function that allows you to perform calculations when specifying CSS property values. It can be used to perform addition, subtraction, multiplication, and division and can be used with other CSS functions such as `var()`

```
// Can be used to calculate a value
.element {
  width: calc(var(--my-variable) - (20px + 2rem));
}
 
// Or part of a value
.element {
  background-color: hsl(
    calc(var(--H) + 20),
    calc(var(--S) - 10%),
    calc(var(--L) + 30%)
  )
}
```

### Limitations

#### Mixing Units

On the web, `calc()` is a powerful tool that allows you to perform calculations with multiple units. However, React Native's layout engine is more limited and does not support mixing units. As a result, Nativewind only supports `calc()` in two modes: `numerical` and `percentage`.

```
.element {
  // ❌ This mixes `numerical` and `percentage` units
  width: calc(100% - 20px);
}
 
.element {
  // ❌ This mixes `numerical` and `percentage` units
  --width: 100%;
  width: calc(var(--width) - 20px);
}
 
.element {
  // ✅  This only uses `numerical` units
  --width: 100rem;
  width: calc(var(--width) - 20px);
}
 
.element {
  // ✅  This only uses `percentage` units
  --width: 100%;
  width: calc(var(--width) - 20%);
}
```

#### Custom Properties

Nativewind does not support operations in custom properties. Instead, you can use `calc()` with custom properties by first defining the custom property and then using `calc()` to perform the operation.

```
.element {
  // ❌ Operators cannot be in a custom property
  --width: 100% - 20%;
  width: calc(var(--width));
}
 
.element {
  // ✅  Operator is part of the `calc()` expression
  --width: 100%;
  width: calc(var(--width) - 20%);
}
```

Looking to contribute? We're looking for contributors to help improve support for `calc()` in Nativewind, such as adding support for other modes (e.g `deg`)

## env()

`env()` is a CSS function that allows you to access device specific environment information.

Nativewind supports:

```
env(safe-area-inset-top);
env(safe-area-inset-bottom);
env(safe-area-inset-left);
env(safe-area-inset-right);
```

Please see Safe Area Insets for more information.
