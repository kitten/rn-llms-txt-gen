# View Style Props

### Example

## Reference

## Props

### `backfaceVisibility`

* Type
  enum(
  `'visible'`
  , 
  `'hidden'`
  )

### `backgroundColor`

* Type
  color

### `borderBottomColor`

* Type
  color

### `borderBottomEndRadius`

* Type
  number

### `borderBottomLeftRadius`

* Type
  number

### `borderBottomRightRadius`

* Type
  number

### `borderBottomStartRadius`

* Type
  number

### `borderStartEndRadius`

* Type
  number

### `borderStartStartRadius`

* Type
  number

### `borderEndEndRadius`

* Type
  number

### `borderEndStartRadius`

* Type
  number

### `borderBottomWidth`

* Type
  number

### `borderColor`

* Type
  color

### `borderCurve`iOS

On iOS 13+, it is possible to change the corner curve of borders.

* Type
  enum(
  `'circular'`
  , 
  `'continuous'`
  )

### `borderEndColor`

* Type
  color

### `borderLeftColor`

* Type
  color

### `borderLeftWidth`

* Type
  number

### `borderRadius`

If the rounded border is not visible, try applying `overflow: 'hidden'` as well.

* Type
  number

### `borderRightColor`

* Type
  color

### `borderRightWidth`

* Type
  number

### `borderStartColor`

* Type
  color

### `borderStyle`

* Type
  enum(
  `'solid'`
  , 
  `'dotted'`
  , 
  `'dashed'`
  )

### `borderTopColor`

* Type
  color

### `borderTopEndRadius`

* Type
  number

### `borderTopLeftRadius`

* Type
  number

### `borderTopRightRadius`

* Type
  number

### `borderTopStartRadius`

* Type
  number

### `borderTopWidth`

* Type
  number

### `borderWidth`

* Type
  number

### `boxShadow`

note

`boxShadow` is only available on the New Architecture. Outset shadows are only supported on **Android 9+**. Inset shadows are only supported on **Android 10+**.

Adds a shadow effect to an element, with the ability to control the position, color, size, and blurriness of the shadow. This shadow either appears around the outside or inside of the border box of the element, depending on whether or not the shadow is *inset*. This is a spec-compliant implementation of the web style prop of the same name. Read more about all the arguments available in the BoxShadowValue documentation.

These shadows can be composed together so that a single `boxShadow` can be comprised of multiple different shadows.

`boxShadow` takes either a string which mimics the web syntax or an array of BoxShadowValue objects.

* Type
  array of BoxShadowValue ojects | string

### `cursor`iOS

On iOS 17+, Setting to `pointer` allows hover effects when a pointer (such as a trackpad or stylus on iOS, or the users' gaze on visionOS) is over the view.

* Type
  enum(
  `'auto'`
  , 
  `'pointer'`
  )

### `elevation`Android

Sets the elevation of a view, using Android's underlying elevation API. This adds a drop shadow to the item and affects z-order for overlapping views. Only supported on Android 5.0+, has no effect on earlier versions.

* Type
  number

### `filter`

note

Adds a graphical filter to the `View`. This filter is comprised of any number of *filter functions*, which each represent some atomic change to the graphical composition of the `View`. The complete list of valid filter functions is defined below. `filter` will apply to descendants of the `View` as well as the `View` itself. `filter` implies `overflow: hidden`, so descendants will be clipped to fit the bounds of the `View`.

The following filter functions work across all platforms:

* `brightness`: Changes the brightness of the `View`. Takes a non-negative number or percentage.
* `opacity`: Changes the opacity, or alpha, of the `View`. Takes a non-negative number or percentage.

note

Due to issues with performance and spec compliance, these are the only two filter functions available on iOS. There are plans to explore some potential workarounds using SwiftUI instead of UIKit for this implementation.

Android

The following filter functions work on Android only:

* `blur`: Blurs the `View` with a Guassian blur, where the specified length represents the radius used in the blurring algorithm. Any non-negative DIP value is valid (no percents). The larger the value, the blurrier the result.
* `contrast`: Changes the contrast of the `View`. Takes a non-negative number or percentage.
* `dropShadow`: Adds a shadow around the alpha mask of the `View` (only non-zero alpha pixels in the `View` will cast a shadow). Takes an optional color representing the shadow color, and 2 or 3 lengths. If 2 lengths are specified they are interperted as `offsetX` and `offsetY` which will translate the shadow in the X and Y dimensions respectfully. If a 3rd length is given it is interpreted as the standard deviation of the Guassian blur used on the shadow - so a larger value will blur the shadow more. Read more about the arguments in DropShadowValue.
* `grayscale`: Converts the `View` to grayscale by the specified amount. Takes a non-negative number or percentage, where `1` or `100%` represents complete grayscale.
* `hueRotate`: Changes the hue of the View. The argument of this function defines the angle of a color wheel around which the hue will be rotated, so e.g., `360deg` would have no effect. This angle can have either `deg` or `rad` units.
* `invert`: Inverts the colors in the `View`. Takes a non-negative number or percentage, where `1` or `100%` represents complete inversion.
* `sepia`: Converts the `View` to sepia. Takes a non-negative number or percentage, where `1` or `100%` represents complete sepia.
* `saturate`: Changes the saturation of the `View`. Takes a non-negative number or percentage.

note

`blur` and `dropShadow` are only supported on **Android 12+**

`filter` takes either an array of objects comprising of the above filter functions or a string which mimics the web syntax.

* Type
  array of objects: 
  `{brightness: number|string}`
  , 
  `{opacity: number|string}`
  , 
  `{blur: number|string}`
  , 
  `{contrast: number|string}`
  , 
  `{dropShadow: DropShadowValue|string}`
  , 
  `{grayscale: number|string}`
  , 
  `{hueRotate: number|string}`
  , 
  `{invert: number|string}`
  , 
  `{sepia: number|string}`
  , 
  `{saturate: number|string}`
   or string

### `opacity`

* Type
  number

### `outlineColor`

note

Sets the color of an element's outline. See web documentation for more details.

* Type
  color

### `outlineOffset`

note

Sets the amount of space between an outline and the bounds of an element. Does not affect layout. See web documentation for more details.

* Type
  number

### `outlineStyle`

note

Sets the style of an element's outline. See web documentation for more details.

* Type
  enum(
  `'solid'`
  , 
  `'dotted'`
  , 
  `'dashed'`
  )

### `outlineWidth`

note

The width of an outline which is drawn around an element, outside the border. Does not affect layout. See web documentation for more details.

* Type
  number

### `pointerEvents`

Controls whether the `View` can be the target of touch events.

* `'auto'`: The View can be the target of touch events.
* `'none'`: The View is never the target of touch events.
* `'box-none'`: The View is never the target of touch events but its subviews can be.
* `'box-only'`: The view can be the target of touch events but its subviews cannot be.

- Type
  enum(
  `'auto'`
  , 
  `'box-none'`
  , 
  `'box-only'`
  , 
  `'none'`
   )
