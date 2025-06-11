React Native Reanimated

Version: 3.x

On this page

# LayoutAnimationConfig

`LayoutAnimationConfig` is a component that lets you skip entering and exiting animations.

## Reference

```
import { LayoutAnimationConfig } from 'react-native-reanimated';

function App() {
  const [show, setShow] = React.useState(true);

  return (
    <LayoutAnimationConfig skipEntering>
      <View>
        {show && <Animated.View entering={PinwheelIn} exiting={PinwheelOut} />}
      </View>
    </LayoutAnimationConfig>
  );
}
```

### Arguments

#### `skipEntering`Optional

A boolean indicating whether children's entering animations should be skipped when `LayoutAnimationConfig` is mounted.

#### `skipExiting`Optional

A boolean indicating whether children's exiting animations should be skipped when `LayoutAnimationConfig` is unmounted.

## Example

Expand the full code

```
      <LayoutAnimationConfig skipEntering>
        {outer && (
          <Animated.View
            entering={PinwheelIn}
            exiting={PinwheelOut}
            style={styles.outerBox}>
            <LayoutAnimationConfig skipEntering skipExiting>
              {inner && (
                <Animated.View
                  style={styles.box}
                  entering={PinwheelIn}
                  exiting={PinwheelOut}
                />
              )}
            </LayoutAnimationConfig>
          </Animated.View>
        )}
      </LayoutAnimationConfig>
```

## Remarks

* You can nest the `LayoutAnimationConfig` component if you want to disable animations on a smaller subset of components.

* If you are working with a `FlatList` and want to skip animations in items when the list is mounted and unmounted you can use `skipEnteringExitingAnimations`. This prop automatically wraps your `FlatList` with `<LayoutAnimationConfig skipEntering skipExiting>`.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|❌|

* Reference
  * Arguments
* Example
* Remarks
* Platform compatibility
