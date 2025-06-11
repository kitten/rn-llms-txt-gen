Font Size

# Font Size

## Usage

Please refer to the documentation on the Tailwind CSS website

## `rem` scaling

Tailwind CSS using `rem` units for font sizes by default. To improve performance Nativewind will inline `rem` values on all platforms, except for Web. Nativewind uses the following `rem` for each platform

* **Web**: `16px`
* **All other platforms**: `14px` (matches React Native's default Text size)

If you need dynamically scaling text for a section of your app, we recommend using a CSS variable.

tailwind.config.js

```
module.exports = {
  theme: {
    extend: {
      fontSize: {
        dynamic: "var(--font-size-dynamic)",
      },
    },
  },
};
```

### Scaling text based upon screen width

A common use case for dynamically scaling text is to scale text based upon the screen width. You can do this by using CSS variables and media queries.

Nativewind currently does not support media queries on `:root`, so you'll need to use a class.

global.css

```
@media (min-width: 640px) {
  .text-root {
    --font-size-dynamic: 16px;
  }
}
 
@media (min-width: 768px) {
  .text-root {
    --font-size-dynamic: 18px;
  }
}
```

App.tsx

```
export default App() {
  return (
    <Text className="text-root">
      <Text className="text-[--font-size-dynamic]">I scale with screen width</Text>
    </Text>
  )
}
```

### Changing the default inlined `rem` value

You can the change the default `rem` value by setting `rem` in your `metro.config.js`

metro.config.js

```
module.exports = withNativeWind({
  input: "./global.css"
  inlineRem: 16,
});
```

### Disabling `inlineRem`

You can disable the inlining behaviour by passing `false`

metro.config.js

```
module.exports = withNativeWind({
  inline: "./global.css"
  inlineRem: false,
});
```

You will then need to specify your own `rem` value in your CSS.

global.css

```
:root {
  font-size: 16px;
}
```

## Compatibility

| Class             | Support        |
| ----------------- | -------------- |
| ```
text-{n}
```  | ✅ Full Support |
| ```
text-[n]
```  | ✅ Full Support |
| ```
text-base
``` | ✅ Full Support |
