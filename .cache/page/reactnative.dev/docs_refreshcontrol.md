# RefreshControl

This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at `scrollY: 0`, swiping down triggers an `onRefresh` event.

## Example

> Note: `refreshing` is a controlled prop, this is why it needs to be set to `true` in the `onRefresh` function otherwise the refresh indicator will stop immediately.

## Reference

## Props

### View Props

Inherits View Props.

### Require&#x64;**`refreshing`**&#x200B;

Whether the view should be indicating an active refresh.

* Type
  boolean

### `colors`Android

The colors (at least one) that will be used to draw the refresh indicator.

* Type
  array of 
  colors

### `enabled`Android

Whether the pull to refresh functionality is enabled.

* Type
  boolean
* Default
  `true`

### `onRefresh`

Called when the view starts refreshing.

* Type
  function

### `progressBackgroundColor`Android

The background color of the refresh indicator.

* Type
  color

### `progressViewOffset`

Progress view top offset.

* Type
  number
* Default
  `0`

### `size`Android

Size of the refresh indicator.

* Type
  enum(
  `'default'`
  , 
  `'large'`
  )
* Default
  `'default'`

### `tintColor`iOS

The color of the refresh indicator.

* Type
  color

### `title`iOS

The title displayed under the refresh indicator.

* Type
  string

### `titleColor`iOS

The color of the refresh indicator title.

* Type
  color
