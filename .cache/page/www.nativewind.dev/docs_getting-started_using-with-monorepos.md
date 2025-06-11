Using with Monorepos

# Using with Monorepos

Learn how to set up Nativewind in monorepo environments like NX

Nativewind can be used in an Nx Monorepo that is already configured to use Expo and the corresponding plugin @nx/expo

## NX Monorepo Setup

When working with Nativewind in an NX monorepo, there are some specific configurations needed to ensure proper integration. The main challenge is correctly configuring the Metro bundler to work with both NX and Nativewind.

### Prerequisites

Simply configure your Expo project in Nx as per the Expo setup guide

Skip the `metro.config.js` setup as we will address this part here.

### Modify your metro.config.js

Add the Nativewind plugin to your `metro.config.js` using a promise chain as shown below:

metro.config.js

```
const { withNativeWind } = require("nativewind/metro");
 
// ... existing Nx configuration
 
module.exports = withNxMetro(mergeConfig(defaultConfig, customConfig), {
  // ... existing Nx config
}).then((config) => withNativeWind(config, { input: "./global.css" }));
```

## Additional Resources

For more complex monorepo setups or specific issues, refer to:

* NX documentation for React Native
* NX documentation for Expo
* Expo documentation for monorepos
