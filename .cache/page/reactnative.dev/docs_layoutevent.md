# LayoutEvent Object Type

`LayoutEvent` object is returned in the callback as a result of component layout change, for example `onLayout` in View component.

## Example

js

```
{
    layout: {
        width: 520,
        height: 70.5,
        x: 0,
        y: 42.5
    },
    target: 1127
}
```

## Keys and values

### `height`

Height of the component after the layout changes.

* Type
  number
* Optional
  No

### `width`

Width of the component after the layout changes.

* Type
  number
* Optional
  No

### `x`

Component X coordinate inside the parent component.

* Type
  number
* Optional
  No

### `y`

Component Y coordinate inside the parent component.

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

## Used by

* `Image`
* `Pressable`
* `ScrollView`
* `Text`
* `TextInput`
* `TouchableWithoutFeedback`
* `View`
