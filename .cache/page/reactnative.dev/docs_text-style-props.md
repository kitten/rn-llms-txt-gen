# Text Style Props

### Example

* TypeScript
* JavaScript

## Reference

## Props

### `color`

* Type
  color

### `fontFamily`

* Type
  string

### `fontSize`

* Type
  number

### `fontStyle`

* Type
  enum(
  `'normal'`
  , 
  `'italic'`
  )

### `fontWeight`

Specifies font weight. The values `'normal'` and `'bold'` are supported for most fonts. Not all fonts have a variant for each of the numeric values, in that case the closest one is chosen.

* Type
  enum(
  `'normal'`
  , 
  `'bold'`
  , 
  `'100'`
  , 
  `'200'`
  , 
  `'300'`
  , 
  `'400'`
  , 
  `'500'`
  , 
  `'600'`
  , 
  `'700'`
  , 
  `'800'`
  , 
  `'900'`
  ) or number
* Default
  `'normal'`

### `includeFontPadding`Android

Set to `false` to remove extra font padding intended to make space for certain ascenders / descenders. With some fonts, this padding can make text look slightly misaligned when centered vertically. For best results also set `textAlignVertical` to `center`.

* Type
  bool
* Default
  `true`

### `fontVariant`

Allows you to set all the font variants for a font. Can be set by using an array of enums or a space-separated string e.g. `'small-caps common-ligatures'`.

* Type
  array of enum(
  `'small-caps'`
  , 
  `'oldstyle-nums'`
  , 
  `'lining-nums'`
  , 
  `'tabular-nums'`
  , 
  `'proportional-nums'`
  ) or string
* Default
  `[]`

### `letterSpacing`

Increase or decrease the spacing between characters. By default there is no extra letter spacing.

* Type
  number

### `lineHeight`

Numeric value that controls the vertical spacing between lines of text within a text element. It specifies the distance between the baselines of consecutive lines of text.

* Type
  number

### `textAlign`

Specifies text alignment. On Android, the value 'justify' is only supported on Oreo (8.0) or above (API level >= 26). The value will fallback to `left` on lower Android versions.

* Type
  enum(
  `'auto'`
  , 
  `'left'`
  , 
  `'right'`
  , 
  `'center'`
  , 
  `'justify'`
  )
* Default
  `'auto'`

### `textAlignVertical`Android

* Type
  enum(
  `'auto'`
  , 
  `'top'`
  , 
  `'bottom'`
  , 
  `'center'`
  )
* Default
  `'auto'`

### `textDecorationColor`iOS

* Type
  color

### `textDecorationLine`

* Type
  enum(
  `'none'`
  , 
  `'underline'`
  , 
  `'line-through'`
  , 
  `'underline line-through'`
  )
* Default
  `'none'`

### `textDecorationStyle`iOS

* Type
  enum(
  `'solid'`
  , 
  `'double'`
  , 
  `'dotted'`
  , 
  `'dashed'`
  )
* Default
  `'solid'`

### `textShadowColor`

* Type
  color

### `textShadowOffset`

* Type
  object: 
  `{width?: number, height?: number}`

### `textShadowRadius`

* Type
  number

### `textTransform`

* Type
  enum(
  `'none'`
  , 
  `'uppercase'`
  , 
  `'lowercase'`
  , 
  `'capitalize'`
  )
* Default
  `'none'`

### `verticalAlign`Android

* Type
  enum(
  `'auto'`
  , 
  `'top'`
  , 
  `'bottom'`
  , 
  `'middle'`
  )
* Default
  `'auto'`

### `writingDirection`iOS

* Type
  enum(
  `'auto'`
  , 
  `'ltr'`
  , 
  `'rtl'`
  )
* Default
  `'auto'`

### `userSelect`

It allows the user to select text and to use the native copy and paste functionality. Has precedence over the `selectable` prop.

* Type
  enum(
  `'auto'`
  , 
  `'text'`
  , 
  `'none'`
  , 
  `'contain'`
  , 
  `'all'`
  )
* Default
  `none`
