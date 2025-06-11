Safe Area Insets

# Safe Area Insets

## Overview

Safe Area Insets are the area of the screen that is not covered by the notch, home indicator, or rounded corners. This is the area where you should place your content to ensure it is not obscured by the system UI.

## Usage (native)

On native, the safe area measurements are provided by `react-native-safe-area-context`. You will need to wrap your app with the `SafeAreaProvider` and use the `useSafeAreaEnv` hook to get the safe area insets.

```
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
 
export function MyApp(props) {
  // Make sure you have the SafeAreaProvider at the root of your app
  return (
    <SafeAreaProvider>
      <View className="p-safe" {...props} />
    </SafeAreaProvider>
  );
}
```

Expo Router adds the \<SafeAreaProvider /> to every route. This setup is not needed

## Usage (web)

On web, your CSS StyleSheet will use the CSS `env()` function and no extra setup is needed.

The `h-screen-safe` and `min-h-screen-safe` utilities may not work as expected on Google Chrome. Add height: `-webkit-fill-available` on parent nodes:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer base {
  html {
    height: -webkit-fill-available;
  }
 
  body {
    height: -webkit-fill-available;
  }
 
  #root {
    height: -webkit-fill-available;
  }
}
```

## Compatibility

| Class                     | Support        | Comments                                                                                                                                                                                                                                                                      |
| ------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```
m-safe
```            | ✅ Full Support | `margin-top: env(safe-area-inset-top); margin-bottom: env(safe-area-inset-bottom); margin-left: env(safe-area-inset-left); margin-right: env(safe-area-inset-right);`                                                                                                         |
| ```
p-safe
```            | ✅ Full Support | `padding-top: env(safe-area-inset-top); padding-bottom: env(safe-area-inset-bottom); padding-left: env(safe-area-inset-left); padding-right: env(safe-area-inset-right);`                                                                                                     |
| ```
mx-safe
```           | ✅ Full Support | `margin-left: env(safe-area-inset-left); margin-right: env(safe-area-inset-right);`                                                                                                                                                                                           |
| ```
px-safe
```           | ✅ Full Support | `padding-left: env(safe-area-inset-left); padding-right: env(safe-area-inset-right);`                                                                                                                                                                                         |
| ```
my-safe
```           | ✅ Full Support | `margin-top: env(safe-area-inset-top); margin-bottom: env(safe-area-inset-bottom);`                                                                                                                                                                                           |
| ```
py-safe
```           | ✅ Full Support | `padding-top: env(safe-area-inset-top); padding-bottom: env(safe-area-inset-bottom);`                                                                                                                                                                                         |
| ```
mt-safe
```           | ✅ Full Support | `margin-top: env(safe-area-inset-top);`                                                                                                                                                                                                                                       |
| ```
pt-safe
```           | ✅ Full Support | `padding-top: env(safe-area-inset-top);`                                                                                                                                                                                                                                      |
| ```
mr-safe
```           | ✅ Full Support | `margin-right: env(safe-area-inset-top);`                                                                                                                                                                                                                                     |
| ```
pr-safe
```           | ✅ Full Support | `padding-right: env(safe-area-inset-top);`                                                                                                                                                                                                                                    |
| ```
mb-safe
```           | ✅ Full Support | `margin-bottom: env(safe-area-inset-top);`                                                                                                                                                                                                                                    |
| ```
pb-safe
```           | ✅ Full Support | `padding-bottom: env(safe-area-inset-top);`                                                                                                                                                                                                                                   |
| ```
ml-safe
```           | ✅ Full Support | `margin-left: env(safe-area-inset-top);`                                                                                                                                                                                                                                      |
| ```
pl-safe
```           | ✅ Full Support | `padding-left: env(safe-area-inset-top);`                                                                                                                                                                                                                                     |
| ```
*-safe-or-[n]
```     | ✅ Full Support | `*` can be substituted for any spacing utility. `[n]` can be substituted for any spacing value.`// example using mt-safe-or-4 margin-top: max(env(safe-area-inset-top), 1rem); // example using mt-safe-or-[2px] margin-top: max(env(safe-area-inset-top), 2px);`             |
| ```
h-screen-safe
```     | 🌐 Web only    | `height: calc(100vh - (env(safe-area-inset-top) + env(safe-area-inset-bottom)))`                                                                                                                                                                                              |
| ```
*-safe-offset-[n]
``` | 🌐 Web only    | `*` can be substituted for any spacing utility. `[n]` can be substituted for any spacing value.`// example using mt-safe-offset-4 margin-top: calc(env(safe-area-inset-top) + 1rem); // example using mt-safe-offset-[2px] margin-top: calc(env(safe-area-inset-top) + 2px);` |
