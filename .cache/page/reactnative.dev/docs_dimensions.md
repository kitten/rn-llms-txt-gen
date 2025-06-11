# Dimensions

> `useWindowDimensions` is the preferred API for React components. Unlike `Dimensions`, it updates as the window's dimensions update. This works nicely with the React paradigm.

```
import {Dimensions} from 'react-native';
```

You can get the application window's width and height using the following code:

```
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
```

> Although dimensions are available immediately, they may change (e.g due to device rotation, foldable devices etc) so any rendering logic or styles that depend on these constants should try to call this function on every render, rather than caching the value (for example, using inline styles rather than setting a value in a `StyleSheet`).

If you are targeting foldable devices or devices which can change the screen size or app window size, you can use the event listener available in the Dimensions module as shown in the below example.

## Example

## Reference

## Methods

### `addEventListener()`

```
static addEventListener(
  type: 'change',
  handler: ({
    window,
    screen,
  }: DimensionsValue) => void,
): EmitterSubscription;
```

Add an event handler. Supported events:

* `change`: Fires when a property within the `Dimensions` object changes. The argument to the event handler is a `DimensionsValue` type object.

### `get()`

```
static get(dim: 'window' | 'screen'): ScaledSize;
```

Initial dimensions are set before `runApplication` is called so they should be available before any other require's are run, but may be updated later.

Example: `const {height, width} = Dimensions.get('window');`

**Parameters:**

* Name
  dim
  Required
* Type
  string
* Description
  Name of dimension as defined when calling 
  `set`
  . Returns value for the dimension.

> For Android the `window` dimension will exclude the size used by the `status bar` (if not translucent) and `bottom navigation bar`

## Type Definitions

### DimensionsValue

**Properties:**

|Name|Type|Description|
|-|-|-|
|window|ScaledSize|Size of the visible Application window.|
|screen|ScaledSize|Size of the device's screen.|

### ScaledSize

* Type
  object

**Properties:**

|Name|Type|
|-|-|
|width|number|
|height|number|
|scale|number|
|fontScale|number|
