# ToastAndroid

React Native's ToastAndroid API exposes the Android platform's ToastAndroid module as a JS module. It provides the method `show(message, duration)` which takes the following parameters:

* *message* A string with the text to toast
* *duration* The duration of the toast—either `ToastAndroid.SHORT` or `ToastAndroid.LONG`

You can alternatively use `showWithGravity(message, duration, gravity)` to specify where the toast appears in the screen's layout. May be `ToastAndroid.TOP`, `ToastAndroid.BOTTOM` or `ToastAndroid.CENTER`.

The `showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)` method adds the ability to specify an offset with in pixels.

> Starting with Android 11 (API level 30), setting the gravity has no effect on text toasts. Read about the changes here.

## Reference

## Methods

### `show()`

```
static show(message: string, duration: number);
```

### `showWithGravity()`

This property will only work on Android API 29 and below. For similar functionality on higher Android APIs, consider using snackbar or notification.

```
static showWithGravity(message: string, duration: number, gravity: number);
```

### `showWithGravityAndOffset()`

This property will only work on Android API 29 and below. For similar functionality on higher Android APIs, consider using snackbar or notification.

```
static showWithGravityAndOffset(
  message: string,
  duration: number,
  gravity: number,
  xOffset: number,
  yOffset: number,
);
```

## Properties

### `SHORT`

Indicates the duration on the screen.

```
static SHORT: number;
```

### `LONG`

Indicates the duration on the screen.

```
static LONG: number;
```

### `TOP`

Indicates the position on the screen.

```
static TOP: number;
```

### `BOTTOM`

Indicates the position on the screen.

```
static BOTTOM: number;
```

### `CENTER`

Indicates the position on the screen.

```
static CENTER: number;
```
