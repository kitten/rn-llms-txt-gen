# Animated.ValueXY

2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal `Animated.Value`, but multiplexed. Contains two regular `Animated.Value`s under the hood.

## Example

## Reference

## Methods

### `setValue()`

```
setValue(value: {x: number; y: number});
```

Directly set the value. This will stop any animations running on the value and update all the bound properties.

**Parameters:**

* Name
  value
* Type
  `{x: number; y: number}`
* Required
  Yes
* Description
  Value

### `setOffset()`

```
setOffset(offset: {x: number; y: number});
```

Sets an offset that is applied on top of whatever value is set, whether via `setValue`, an animation, or `Animated.event`. Useful for compensating things like the start of a pan gesture.

**Parameters:**

* Name
  offset
* Type
  `{x: number; y: number}`
* Required
  Yes
* Description
  Offset value

### `flattenOffset()`

```
flattenOffset();
```

Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged.

### `extractOffset()`

```
extractOffset();
```

Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged.

### `addListener()`

```
addListener(callback: (value: {x: number; y: number}) => void);
```

Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively.

Returns a string that serves as an identifier for the listener.

**Parameters:**

* Name
  callback
* Type
  function
* Required
  Yes
* Description
  The callback function which will receive an object with a 
  `value`
   key set to the new value.

### `removeListener()`

```
removeListener(id: string);
```

Unregister a listener. The `id` param shall match the identifier previously returned by `addListener()`.

**Parameters:**

* Name
  id
* Type
  string
* Required
  Yes
* Description
  Id for the listener being removed.

### `removeAllListeners()`

```
removeAllListeners();
```

Remove all registered listeners.

### `stopAnimation()`

```
stopAnimation(callback?: (value: {x: number; y: number}) => void);
```

Stops any running animation or tracking. `callback` is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout.

**Parameters:**

* Name
  callback
* Type
  function
* Required
  No
* Description
  A function that will receive the final value.

### `resetAnimation()`

```
resetAnimation(callback?: (value: {x: number; y: number}) => void);
```

Stops any animation and resets the value to its original.

**Parameters:**

* Name
  callback
* Type
  function
* Required
  No
* Description
  A function that will receive the original value.

### `getLayout()`

```
getLayout(): {left: Animated.Value, top: Animated.Value};
```

Converts `{x, y}` into `{left, top}` for use in style, e.g.

```
style={this.state.anim.getLayout()}
```

### `getTranslateTransform()`

```
getTranslateTransform(): [
  {translateX: Animated.Value},
  {translateY: Animated.Value},
];
```

Converts `{x, y}` into a useable translation transform, e.g.

```
style={{
  transform: this.state.anim.getTranslateTransform()
}}
```
