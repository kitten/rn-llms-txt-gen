Dark Mode

# Dark Mode

Nativewind supports two primary approaches for implementing dark mode in your app:

1. **System Preference (Automatic)**
2. **Manual Selection (User Toggle)**

Both approaches use `colorScheme` from Nativewind, which provides a unified API for reading and setting the color scheme using React Native's appearance APIs. Under the hood, the `Appearance` API is used on native and `prefers-color-scheme` is used on web.

* To **read** the current system preference, use the `colorScheme` value returned from `useColorScheme`.
* To **manually set** the color scheme (e.g., via a user toggle), use the `colorScheme.set()` function.

Both `colorScheme` and `colorScheme.set()` are imported from Nativewind.

***

## 1. System Preference (Automatic)

By default, Nativewind will follow the device's system appearance (light, dark, or automatic). This is the recommended approach for most apps, as it provides a seamless experience for users who have set their device to a preferred mode.

To read the current system preference, use the `colorScheme` value from the `useColorScheme` hook:

**Expo Note:** Expo apps only follow the system appearance if `userInterfaceStyle` is set to `automatic` in your `app.json`. See the Expo color scheme guide for more details.

**Example (Expo Snack):** See a full example in the Expo Docs.

This will automatically update when the system appearance changes.

***

## 2. Manual Selection (User Toggle)

If you want to allow users to manually select between light, dark, or system mode, you should use the `colorScheme.set()` function. This is useful for apps that provide a theme toggle in their UI.

**Example:** See a full implementation at nativewind/theme-toggle on GitHub.

**Basic Toggle Example:**

```
import { useState } from "react";
import { SafeAreaView, Text, Pressable } from "react-native";
import { colorScheme } from "nativewind";
import { StatusBar } from 'expo-status-bar';
 
import './global.css';
 
export default function App() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");
 
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    colorScheme.set(newTheme);
  };
 
  return (
    <SafeAreaView
      className={`flex-1 ${currentTheme === 'dark' ? 'bg-gray-900' : 'bg-white'} justify-center items-center`}
    >
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      <Pressable
        onPress={toggleTheme}
        className="mt-4"
      >
        <Text className={currentTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'} style={{ fontSize: 16, fontWeight: 'bold' }}>
          {currentTheme === 'dark' ? 'Dark' : 'Light'}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
```

You can persist the user's choice using a storage solution like React Native Async Storage.

***

## Best Practice

* **Use the `colorScheme` value from `useColorScheme`** to read the current color scheme (system preference).
* **Use `colorScheme.set()`** to allow users to manually select a color scheme.
* For most apps, system preference is recommended.
* If you provide a manual toggle, always offer a "System" option as well.

***

## References

* Expo Color Schemes Guide
* Nativewind useColorScheme API
* Theme Toggle Example (GitHub)
