# Getting started

The goal of the *Fundamentals* section is to help you gain a strong foundation on the core concepts of Reanimated and give you the confidence to explore more advanced use cases on your own. This section is packed with interactive examples, code snippets and explanations. Are you ready? Let's dive in!

## What is React Native Reanimated?

React Native Reanimated is a powerful animation library built by Software Mansion.

With Reanimated, you can easily create smooth animations and interactions that run on the UI thread.

## Quick start

If you don't have an existing project, you can create a new Expo app using a template:

* NPM
* YARN

npx create-expo-app\@latest my-app -e with-reanimated

yarn create expo-app my-app -e with-reanimated

Alternatively, you can dive into our examples on GitHub.

## Installation

It takes three steps to add Reanimated to a project:

### Step 1: Install the package

Install `react-native-reanimated` package from npm:

* EXPO
* NPM
* YARN

npx expo install react-native-reanimated

npm install react-native-reanimated

yarn add react-native-reanimated

### Step 2: Add Reanimated's babel plugin

Add `react-native-reanimated/plugin` plugin to your `babel.config.js`.

```
  module.exports = {
    presets: [
      ... // don't add it here :)
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
```

caution

`react-native-reanimated/plugin` has to be listed last.

### Step 3: Wrap metro config with reanimated wrapper (recommended)

Wrap your existing Metro configuration in the `metro.config.js` file with the `wrapWithReanimatedMetroConfig` function.

```
// metro.config.js
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const config = {
  // Your existing Metro configuration options
};

module.exports = wrapWithReanimatedMetroConfig(config);
```

### Step 4: Clear Metro bundler cache (recommended)

* EXPO
* NPM
* YARN

npx expo start -c

npm start -- --reset-cache

yarn start --reset-cache

### Expo development build

When using an Expo development build, run prebuild to update the native code in the `ios` and `android` directories.

```
npx expo prebuild
```

### Platform specific setup

#### Android

No additional steps are necessary.

#### iOS

While developing for iOS, make sure to install pods first before running the app:

```
cd ios && pod install && cd ..
```

#### Web

For building apps that target web using react-native-web we highly recommend to use Expo.

To use Reanimated on the web all you need to do is to install and add `@babel/plugin-proposal-export-namespace-from` Babel plugin to your `babel.config.js`.

* EXPO
* NPM
* YARN

npx expo install @babel/plugin-proposal-export-namespace-from

npm install @babel/plugin-proposal-export-namespace-from

yarn add @babel/plugin-proposal-export-namespace-from

```
  module.exports = {
      presets: [
        ... // don't add it here :)
      ],
      plugins: [
          ...
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
      ],
  };
```

Make sure to list `react-native-reanimated/plugin` last.

More advanced use cases such as running Reanimated with `webpack` or with `Next.js` are explained in a separate Web Support guide.
