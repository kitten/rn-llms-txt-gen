# BackHandler

The Backhandler API detects hardware button presses for back navigation, lets you register event listeners for the system's back action, and lets you control how your application responds. It is Android-only.

The event subscriptions are called in reverse order (i.e. the last registered subscription is called first).

* **If one subscription returns true,** then subscriptions registered earlier will not be called.
* **If no subscription returns true or none are registered,** it programmatically invokes the default back button functionality to exit the app.

> **Warning for modal users:** If your app shows an opened `Modal`, `BackHandler` will not publish any events (see `Modal` docs).

## Pattern

```
const subscription = BackHandler.addEventListener(
  'hardwareBackPress',
  function () {
    /**
     * this.onMainScreen and this.goBack are just examples,
     * you need to use your own implementation here.
     *
     * Typically you would use the navigator here to go to the last state.
     */

    if (!this.onMainScreen()) {
      this.goBack();
      /**
       * When true is returned the event will not be bubbled up
       * & no other back action will execute
       */
      return true;
    }
    /**
     * Returning false will let the event to bubble up & let other event listeners
     * or the system's default back action to be executed.
     */
    return false;
  },
);

// Unsubscribe the listener on unmount
subscription.remove();
```

## Example

The following example implements a scenario where you confirm if the user wants to exit the app:

`BackHandler.addEventListener` creates an event listener & returns a `NativeEventSubscription` object which should be cleared using `NativeEventSubscription.remove` method.

## Usage with React Navigation

If you are using React Navigation to navigate across different screens, you can follow their guide on Custom Android back button behaviour

## Backhandler hook

React Native Hooks has a nice `useBackHandler` hook which will simplify the process of setting up event listeners.

## Reference

## Methods

### `addEventListener()`

```
static addEventListener(
  eventName: BackPressEventName,
  handler: () => boolean | null | undefined,
): NativeEventSubscription;
```

### `exitApp()`

```
static exitApp();
```
