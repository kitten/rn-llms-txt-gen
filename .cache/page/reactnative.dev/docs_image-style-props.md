# Image Style Props

## Examples

### Image Resize Mode

### Image Border

### Image Border Radius

### Image Tint

## Reference

## Props

### `backfaceVisibility`

The property defines whether or not the back face of a rotated image should be visible.

* Type
  enum(
  `'visible'`
  , 
  `'hidden'`
  )
* Default
  `'visible'`

### `backgroundColor`

* Type
  color

### `borderBottomLeftRadius`

* Type
  number

### `borderBottomRightRadius`

* Type
  number

### `borderColor`

* Type
  color

### `borderRadius`

* Type
  number

### `borderTopLeftRadius`

* Type
  number

### `borderTopRightRadius`

* Type
  number

### `borderWidth`

* Type
  number

### `opacity`

Set an opacity value for the image. The number should be in the range from `0.0` to `1.0`.

* Type
  number
* Default
  `1.0`

### `overflow`

* Type
  enum(
  `'visible'`
  , 
  `'hidden'`
  )
* Default
  `'visible'`

### `overlayColor`Android

When the image has rounded corners, specifying an overlayColor will cause the remaining space in the corners to be filled with a solid color. This is useful in cases which are not supported by the Android implementation of rounded corners:

* Certain resize modes, such as `'contain'`
* Animated GIFs

A typical way to use this prop is with images displayed on a solid background and setting the `overlayColor` to the same color as the background.

For details of how this works under the hood, see Fresco documentation.

* Type
  string

### `resizeMode`

Determines how to resize the image when the frame doesn't match the raw image dimensions. Defaults to `cover`.

* `cover`: Scale the image uniformly (maintain the image's aspect ratio) so that:

  * Both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding)
  * At least one dimension of the scaled image will be equal to the corresponding dimension of the view (minus padding)

* `contain`: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).

* `stretch`: Scale width and height independently, This may change the aspect ratio of the src.

* `repeat`: Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view.

* `center`: Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.

- Type
  enum(
  `'cover'`
  , 
  `'contain'`
  , 
  `'stretch'`
  , 
  `'repeat'`
  , 
  `'center'`
  )
- Default
  `'cover'`

### `objectFit`

Determines how to resize the image when the frame doesn't match the raw image dimensions.

* Type
  enum(
  `'cover'`
  , 
  `'contain'`
  , 
  `'fill'`
  , 
  `'scale-down'`
  )
* Default
  `'cover'`

### `tintColor`

Changes the color of all the non-transparent pixels to the tintColor.

* Type
  color
