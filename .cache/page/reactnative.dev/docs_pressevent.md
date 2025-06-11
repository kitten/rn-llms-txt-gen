# PressEvent Object Type

`PressEvent` object is returned in the callback as a result of user press interaction, for example `onPress` in Button component.

## Example

js

```
{
    changedTouches: [PressEvent],
    identifier: 1,
    locationX: 8,
    locationY: 4.5,
    pageX: 24,
    pageY: 49.5,
    target: 1127,
    timestamp: 85131876.58868201,
    touches: []
}
```

## Keys and values

### `changedTouches`

Array of all PressEvents that have changed since the last event.

* Type
  array of PressEvents
* Optional
  No

### `force`iOS

Amount of force used during the 3D Touch press. Returns the float value in range from `0.0` to `1.0`.

* Type
  number
* Optional
  Yes

### `identifier`

Unique numeric identifier assigned to the event.

* Type
  number
* Optional
  No

### `locationX`

Touch origin X coordinate inside touchable area (relative to the element).

* Type
  number
* Optional
  No

### `locationY`

Touch origin Y coordinate inside touchable area (relative to the element).

* Type
  number
* Optional
  No

### `pageX`

Touch origin X coordinate on the screen (relative to the root view).

* Type
  number
* Optional
  No

### `pageY`

Touch origin Y coordinate on the screen (relative to the root view).

* Type
  number
* Optional
  No

### `target`

The node id of the element receiving the PressEvent.

* Type
  number, 
  `null`
  , 
  `undefined`
* Optional
  No

### `timestamp`

Timestamp value when a PressEvent occurred. Value is represented in milliseconds.

* Type
  number
* Optional
  No

### `touches`

Array of all current PressEvents on the screen.

* Type
  array of PressEvents
* Optional
  No

## Used by

* `Button`
* `PanResponder`
* `Pressable`
* `ScrollView`
* `Text`
* `TextInput`
* `TouchableHighlight`
* `TouchableOpacity`
* `TouchableNativeFeedback`
* `TouchableWithoutFeedback`
* `View`
