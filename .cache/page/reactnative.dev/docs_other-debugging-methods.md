On this page

# Other Debugging Methods

This page covers how to use legacy JavaScript debugging methods. If you are getting started with a new React Native or Expo app, we recommend using React Native DevTools.

## Safari Developer Tools (direct JSC debugging)

You can use Safari to debug the iOS version of your app when using JavaScriptCore (JSC) as your app's runtime.

1. **Physical devices only**: Open the Settings app, and navigate to Safari > Advanced, and make sure "Web Inspector" is turned on.
1. On your Mac, open Safari and enable the Develop menu. This can be found under Safari > Settings..., then the Advanced tab, then selecting "Show features for web developers".
1. Find your device under the Develop menu, and select the "JSContext" item from the submenu. This will open Safari's Web Inspector, which includes Console and Sources panels similar to Chrome DevTools.

tip

While source maps may not be enabled by default, you can follow this guide or video to enable them and set break points at the right places in the source code.

tip

Every time the app is reloaded, a new JSContext is created. Choosing "Automatically Show Web Inspectors for JSContexts" saves you from having to select the latest JSContext manually.

## Remote JavaScript Debugging (removed)

Important

* Safari Developer Tools (direct JSC debugging)
* Remote JavaScript Debugging (removed)
