# GestureDetector

`GestureDetector` is the main component of the RNGH2. It is responsible for creating and updating native gesture handlers based on the config of provided gesture. The most significant difference between it and old gesture handlers is that the `GestureDetector` can recognize more than one gesture at the time thanks to gesture composition. Keep in mind that `GestureDetector` is not compatible with the Animated API, nor with Reanimated 1.

## Reference

```
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

function App() {
  const tap = Gesture.Tap();
  return (
    <GestureDetector gesture={tap}>
      <Animated.View />
    </GestureDetector>
  );
}
```

## Properties

### `gesture`

A gesture object containing the configuration and callbacks. Can be any of the base gestures (`Tap`, `Pan`, `LongPress`, `Fling`, `Pinch`, `Rotation`, `ForceTouch`) or any `ComposedGesture` (`Race`, `Simultaneous`, `Exclusive`).

info

GestureDetector will decide whether to use Reanimated to process provided gestures based on callbacks they have. If any of the callbacks is a worklet, tools provided by the Reanimated will be utilized bringing ability to handle gestures synchronously.

Starting with Reanimated 2.3.0 Gesture Handler will provide a StateManager in the touch events that allows for managing the state of the gesture.

### `userSelect` (Web only)

This parameter allows to specify which `userSelect` property should be applied to underlying view. Possible values are `"none" | "auto" | "text"`. Default value is set to `"none"`.

### `touchAction` (Web only)

This parameter allows to specify which `touchAction` property should be applied to underlying view. Supports all CSS `touch-action` values (e.g. `"none"`, `"pan-y"`). Default value is set to `"none"`.

### `enableContextMenu(value: boolean)` (Web only)

Specifies whether context menu should be enabled after clicking on underlying view with right mouse button. Default value is set to `false`.

## Remarks

* Gesture Detector will use first native view in its subtree to recognize gestures, however if this view is used only to group its children it may get automatically collapsed. Consider this example:

  ```
  export default function Example() {
    const tap = Gesture.Tap().onStart(() => {
      console.log('tap');
    });

    return (
      <GestureDetector gesture={tap}>
        <FunctionalComponent>
          <View style={styles.box} />
        </FunctionalComponent>
      </GestureDetector>
    );
  }

  function FunctionalComponent(props) {
    return <View collapsable={false}>{props.children}</View>;
  }
  ```

  If we were to remove the collapsable prop from the View, the gesture would stop working because it would be attached to a view that is not present in the view hierarchy. Gesture Detector adds this prop automatically to its direct child but it's impossible to do automatically for more complex view trees.

* Using the same instance of a gesture across multiple Gesture Detectors is not possible. Have a look at the code below:

  ```
  export default function Example() {
    const pan = Gesture.Pan();

    return (
      <View>
        <GestureDetector gesture={pan}>
          <View>
            <GestureDetector gesture={pan}> {/* Don't do this! */}
              <View />
            </GestureDetector>
          </View>
        </GestureDetector>
      </View>
    );
  }
  ```

  This example will throw an error, becuse we try to use the same instance of `Pan` in two different Gesture Detectors.
