# interpolateColor

`interpolateColor` maps input range to output colors using linear interpolation.

## Reference

```
import { interpolateColor } from 'react-native-reanimated';

function App() {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        ['red', 'green']
      ),
    };
  });

  // ...

  return <Animated.View style={[{ width: 100, height: 100 }, animatedStyle]} />;
}
```

### Arguments

#### `value`

A number from the input range that is going to be mapped to the output range.

#### `input`

An array of numbers specifying the input range of the interpolation. Values in the input range should be increasing.

#### `output`

An array of output colors values in form of strings (like `'red'`, `'#ff0000'`, `'rgba(255, 0, 0, 0.5)'` etc.). It should have at least the same number of points as the input range.

#### `colorSpace`Optional

The color space to use for interpolation. Can be either `'HSV'` or `'RGB'`. Defaults to `'RGB'`.

#### `options`Optional

Color interpolation options. Allowed parameters:

|Options|Type|Default|Description|
|-|-|-|-|
|gammaOptional|`number`|2.2|Gamma parameter used in gamma correction.|
|useCorrectedHSVInterpolationOptional|`boolean`|true|Whether to reduce the number of colors the interpolation has to go through.|

#### Options explanation

* *gamma* - Colors on web / mobile are expressed in sRGB colorspace which is gamma-corrected, that is non-linear. Operations on colors in non-linear space like addition will give wrong results. For example the interpolated color may appear darker than it should. That's why when interpolating we convert sRGB to linear space first and then convert the result back into non-linear sRGB space. Gamma correction is device-dependent but for most devices to convert from non-linear to linear space raising components to the power of gamma=2.2 is a good approximation. If you'd like to disable that you can always set gamma=1. A nice article on that if you'd like to know more: https\://observablehq.com/@sebastien/srgb-rgb-gamma
* *useCorrectedHSVInterpolation* - Sometimes (for example when interpolating from yellow to purple) HSV interpolation goes through many other hues. This option allows to reduce the number of hues in such cases by treating HSV hues like a circular spectrum and choosing the shortest arc (so instead of going from yellow to purple through green and blue, it goes only through red).

### Returns

`interpolateColor` returns the color after interpolation from within the output range in `rgba(r, g, b, a)` format.

## Example

## Remarks

* It works just like `interpolate` function but the output is color string in `rgba(r, g, b, a)` notation.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
