# StatusBar

Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons.

### Usage with Navigator

It is possible to have multiple `StatusBar` components mounted at the same time. The props will be merged in the order the `StatusBar` components were mounted.

* TypeScript
* JavaScript

### Imperative API

For cases where using a component is not ideal, there is also an imperative API exposed as static functions on the component. It is however not recommended to use the static API and the component for the same prop because any value set by the static API will get overridden by the one set by the component in the next render.

## Reference

## Constants

### `currentHeight`Android

The height of the status bar, which includes the notch height, if present.

## Props

### `animated`

If the transition between status bar property changes should be animated. Supported for `backgroundColor`, `barStyle` and `hidden` properties.

* Type
  boolean
* Required
  No
* Default
  `false`

### `backgroundColor`Android

The background color of the status bar.

warning

Due to edge-to-edge enforcement introduced in Android 15, setting background color of the status bar is deprecated in API level 35.

* Type
  color
* Required
  No
* Default
  default system StatusBar background color, or 
  `'black'`
   if not defined

### `barStyle`

Sets the color of the status bar text.

On Android, this will only have an impact on API versions 23 and above.

* Type
  StatusBarStyle
* Required
  No
* Default
  `'default'`

### `hidden`

If the status bar is hidden.

* Type
  boolean
* Required
  No
* Default
  `false`

### `networkActivityIndicatorVisible`iOS

If the network activity indicator should be visible.

* Type
  boolean
* Default
  `false`

### `showHideTransition`iOS

The transition effect when showing and hiding the status bar using the `hidden` prop.

* Type
  StatusBarAnimation
* Default
  `'fade'`

### `translucent`Android

If the status bar is translucent. When translucent is set to `true`, the app will draw under the status bar. This is useful when using a semi transparent status bar color.

* Type
  boolean
* Default
  `false`

## Methods

### `popStackEntry()`

```
static popStackEntry(entry: StatusBarProps);
```

Get and remove the last StatusBar entry from the stack.

**Parameters:**

* Name
  entry
  Required
* Type
  any
* Description
  Entry returned from 
  `pushStackEntry`
  .

### `pushStackEntry()`

```
static pushStackEntry(props: StatusBarProps): StatusBarProps;
```

Push a StatusBar entry onto the stack. The return value should be passed to `popStackEntry` when complete.

**Parameters:**

* Name
  props
  Required
* Type
  any
* Description
  Object containing the StatusBar props to use in the stack entry.

### `replaceStackEntry()`

```
static replaceStackEntry(
  entry: StatusBarProps,
  props: StatusBarProps
): StatusBarProps;
```

Replace an existing StatusBar stack entry with new props.

**Parameters:**

|Name|Type|Description|
|-|-|-|
|entryRequired|any|Entry returned from `pushStackEntry` to replace.|
|propsRequired|any|Object containing the StatusBar props to use in the replacement stack entry.|

### `setBackgroundColor()`Android

```
static setBackgroundColor(color: ColorValue, animated?: boolean);
```

Set the background color for the status bar.

warning

Due to edge-to-edge enforcement introduced in Android 15, setting background color of the status bar is deprecated in API level 35.

**Parameters:**

|Name|Type|Description|
|-|-|-|
|colorRequired|string|Background color.|
|animated|boolean|Animate the style change.|

### `setBarStyle()`

```
static setBarStyle(style: StatusBarStyle, animated?: boolean);
```

Set the status bar style.

**Parameters:**

|Name|Type|Description|
|-|-|-|
|styleRequired|StatusBarStyle|Status bar style to set.|
|animated|boolean|Animate the style change.|

### `setHidden()`

```
static setHidden(hidden: boolean, animation?: StatusBarAnimation);
```

Show or hide the status bar.

**Parameters:**

|Name|Type|Description|
|-|-|-|
|hiddenRequired|boolean|Hide the status bar.|
|animationiOS|StatusBarAnimation|Animation when changing the status bar hidden property.|

### `setNetworkActivityIndicatorVisible()`iOS

```
static setNetworkActivityIndicatorVisible(visible: boolean);
```

Control the visibility of the network activity indicator.

**Parameters:**

* Name
  visible
  Required
* Type
  boolean
* Description
  Show the indicator.

### `setTranslucent()`Android

```
static setTranslucent(translucent: boolean);
```

Control the translucency of the status bar.

**Parameters:**

* Name
  translucent
  Required
* Type
  boolean
* Description
  Set as translucent.

## Type Definitions

### StatusBarAnimation

Status bar animation type for transitions on the iOS.

* Type
  enum

**Constants:**

|Value|Type|Description|
|-|-|-|
|`'fade'`|string|Fade animation|
|`'slide'`|string|Slide animation|
|`'none'`|string|No animation|

### StatusBarStyle

Status bar style type.

* Type
  enum

**Constants:**

|Value|Type|Description|
|-|-|-|
|`'default'`|string|Default status bar style (dark for iOS, light for Android)|
|`'light-content'`|string|White texts and icons|
|`'dark-content'`|string|Dark texts and icons (requires API>=23 on Android)|
