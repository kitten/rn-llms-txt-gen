# Shadow Props

* TypeScript
* JavaScript

## Reference

There are 3 sets of shadow APIs in React Native:

* `boxShadow`: A View style prop and a spec-compliant implementation of the web style prop of the same name.
* `dropShadow`: A specific filter function available as part of the `filter` View style prop.
* Various `shadow` props (`shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius`): These map directly to their native counterparts exposed by the platform-level APIs.

The difference between `dropShadow` and `boxShadow` are as follows:

* `dropShadow` exists as part of `filter`, whereas `boxShadow` is a standalone style prop.
* `dropShadow` is an alpha mask, so only pixels with a positive alpha value will "cast" a shadow. `boxShadow` will cast around the border box of the element no matter it's contents (unless it is inset).
* `dropShadow` is only available on Android, `boxShadow` is available on iOS and Android.
* `dropShadow` cannot be inset like `boxShadow`.
* `dropShadow` does not have the `spreadDistance` argument like `boxShadow`.

Both `boxShadow` and `dropShadow` are generally more capable than the `shadow` props. The `shadow` props, however, map to native platform-level APIs, so if you only need a straightforward shadow these props are recommended. Note that only `shadowColor` works on both Android and iOS, all other `shadow` props only work on iOS.

## Props

### `boxShadow`

See View Style Props for documentation.

### `dropShadow`Android

See View Style Props for documentation.

### `shadowColor`

Sets the drop shadow color.

This property will only work on Android API 28 and above. For similar functionality on lower Android APIs, use the `elevation` property.

* Type
  color

### `shadowOffset`iOS

Sets the drop shadow offset.

* Type
  object: 
  `{width: number,height: number}`

### `shadowOpacity`iOS

Sets the drop shadow opacity (multiplied by the color's alpha component).

* Type
  number

### `shadowRadius`iOS

Sets the drop shadow blur radius.

* Type
  number
