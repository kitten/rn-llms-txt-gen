# DropShadowValue Object Type

The `DropShadowValue` object is taken by the `filter` style prop for the `dropShadow` function. It is comprised of 2 or 3 lengths and an optional color. These values collectively define the drop shadow's color, position, and blurriness.

## Example

js

```
{
  offsetX: 10,
  offsetY: -3,
  standardDeviation: '15px',
  color: 'blue',
}
```

## Keys and values

### `offsetX`

The offset on the x-axis. This can be positive or negative. A positive value indicates right and negative indicates left.

* Type
  number | string
* Optional
  No

### `offsetY`

The offset on the y-axis. This can be positive or negative. A positive value indicates up and negative indicates down.

* Type
  number | string
* Optional
  No

### `standardDeviation`

Represents the standard deviation used in the Guassian blur algorithm. The larger the value the blurrier the shadow is. Only non-negative values are valid. The default is 0.

* Type
  numer | string
* Optional
  Yes

### `color`

The color of the shadow. The default is `black`.

* Type
  color
* Optional
  Yes

## Used by

* `filter`
