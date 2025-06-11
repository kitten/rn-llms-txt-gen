Installation

# Installation

Nativewind works with both Expo and framework-less React Native projects but Expo provides a more streamlined experience.

**Web**: If you'd like to use Metro to bundle for a website or App Clip and you are **not** using Expo, you will need either Expo's Metro config `@expo/metro-config` or to manually use Tailwind CLI to generate a CSS file.

Expo | Framework-less | Next.js

If you'd like to skip manual setup and use Nativewind with Expo, you can use the following command to initialize a new Expo project with Nativewind and Tailwind CSS.

```
npx rn-new@latest --nativewind
```

## Installation with Expo

### 1. Install Nativewind

You will need to install `nativewind` and its peer dependencies `tailwindcss`, `react-native-reanimated` and `react-native-safe-area-context`.

npmyarnpnpmbunexpo

```
npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npm install -D tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
```

### 2. Setup Tailwind CSS

Run `npx tailwindcss init` to create a `tailwind.config.js` file

Add the paths to all of your component files in your tailwind.config.js file.

tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create a CSS file and add the Tailwind directives.

global.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

From here onwards, replace `./global.css` with the relative path to the CSS file you just created.

### 3. Add the Babel preset

babel.config.js

```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

### 4. Create or modify your metro.config.js

Create a `metro.config.js` file in the root of your project if you don't already have one, then add the following configuration:

metro.config.js

```
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './global.css' })
```

### 5. Import your CSS file

App.js

```
import "./global.css"
 
export default App() {
  /* Your App */
}
```

### 6. Modify your `app.json`

Switch the bundler to use the Metro bundler

```
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}
```

### 7. TypeScript (optional)

Please follow the TypeScript guide.

## Additional Setup Guides

* Using with Monorepos - Learn how to set up Nativewind in monorepo environments like NX
* Other Bundlers - Learn how to use Nativewind with other bundlers
