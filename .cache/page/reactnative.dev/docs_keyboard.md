# Keyboard

`Keyboard` module to control keyboard events.

### Usage

The Keyboard module allows you to listen for native events and react to them, as well as make changes to the keyboard, like dismissing it.

## Reference

## Methods

### `addListener()`

```
static addListener: (
  eventType: KeyboardEventName,
  listener: KeyboardEventListener,
) => EmitterSubscription;
```

The `addListener` function connects a JavaScript function to an identified native keyboard notification event.

This function then returns the reference to the listener.

**Parameters:**

|Name|Type|Description|
|-|-|-|
|eventNameRequired|string|The string that identifies the event you're listening for. See the list below.|
|callbackRequired|function|The function to be called when the event fires|

**`eventName`**

This can be any of the following:

* `keyboardWillShow`
* `keyboardDidShow`
* `keyboardWillHide`
* `keyboardDidHide`
* `keyboardWillChangeFrame`
* `keyboardDidChangeFrame`

> Note that only `keyboardDidShow` and `keyboardDidHide` events are available on Android. The events will not be fired when using Android 10 and under if your activity has `android:windowSoftInputMode` set to `adjustNothing`.

### `dismiss()`

```
static dismiss();
```

Dismisses the active keyboard and removes focus.

### `scheduleLayoutAnimation`

```
static scheduleLayoutAnimation(event: KeyboardEvent);
```

Useful for syncing TextInput (or other keyboard accessory view) size of position changes with keyboard movements.

### `isVisible()`

```
static isVisible(): boolean;
```

Whether the keyboard is last known to be visible.

### `metrics()`

```
static metrics(): KeyboardMetrics | undefined;
```

Return the metrics of the soft-keyboard if visible.
