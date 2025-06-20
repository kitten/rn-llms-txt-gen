# LayoutAnimation

Automatically animates views to their new positions when the next layout happens.

A common way to use this API is to call it before updating the state hook in functional components and calling `setState` in class components.

Note that in order to get this to work on **Android** you need to set the following flags via `UIManager`:

js

```
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
```

## Example

## Reference

## Methods

### `configureNext()`

```
static configureNext(
  config: LayoutAnimationConfig,
  onAnimationDidEnd?: () => void,
  onAnimationDidFail?: () => void,
);
```

Schedules an animation to happen on the next layout.

#### Parameters:

|Name|Type|Required|Description|
|-|-|-|-|
|config|object|Yes|See config description below.|
|onAnimationDidEnd|function|No|Called when the animation finished.|
|onAnimationDidFail|function|No|Called when the animation failed.|

The `config` parameter is an object with the keys below. `create` returns a valid object for `config`, and the `Presets` objects can also all be passed as the `config`.

* `duration` in milliseconds
* `create`, optional config for animating in new views
* `update`, optional config for animating views that have been updated
* `delete`, optional config for animating views as they are removed

The config that's passed to `create`, `update`, or `delete` has the following keys:

* `type`, the animation type to use
* `property`, the layout property to animate (optional, but recommended for `create` and `delete`)
* `springDamping` (number, optional and only for use with `type: Type.spring`)
* `initialVelocity` (number, optional)
* `delay` (number, optional)
* `duration` (number, optional)

### `create()`

```
static create(duration, type, creationProp)
```

Helper that creates an object (with `create`, `update`, and `delete` fields) to pass into `configureNext`. The `type` parameter is an animation type, and the `creationProp` parameter is a layout property.

**Example:**

## Properties

### Types

An enumeration of animation types to be used in the `create` method, or in the `create`/`update`/`delete` configs for `configureNext`. (example usage: `LayoutAnimation.Types.easeIn`)

|Types|
|-|
|spring|
|linear|
|easeInEaseOut|
|easeIn|
|easeOut|
|keyboard|

### Properties

An enumeration of layout properties to be animated to be used in the `create` method, or in the `create`/`update`/`delete` configs for `configureNext`. (example usage: `LayoutAnimation.Properties.opacity`)

|Properties|
|-|
|opacity|
|scaleX|
|scaleY|
|scaleXY|

### Presets

A set of predefined animation configs to pass into `configureNext`.

|Presets|Value|
|-|-|
|easeInEaseOut|`create(300, 'easeInEaseOut', 'opacity')`|
|linear|`create(500, 'linear', 'opacity')`|
|spring|`{duration: 700, create: {type: 'linear', property: 'opacity'}, update: {type: 'spring', springDamping: 0.4}, delete: {type: 'linear', property: 'opacity'} }`|

### `easeInEaseOut`

Calls `configureNext()` with `Presets.easeInEaseOut`.

### `linear`

Calls `configureNext()` with `Presets.linear`.

### `spring`

Calls `configureNext()` with `Presets.spring`.

**Example:**
