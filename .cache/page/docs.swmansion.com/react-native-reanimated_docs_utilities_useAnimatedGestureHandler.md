# useAnimatedGestureHandler

danger

`useAnimatedGestureHandler` lets you create animations based on gesture handlers.

You need to pass the object defined using `useAnimatedGestureHandler` to the `onGestureEvent` property of a gesture handler component.

This hook requires `react-native-gesture-handler` installed and configured in your project.

## Reference

```
import { useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

function App() {
  const x = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View />
    </PanGestureHandler>
  );
}
```

### Arguments

#### `gestureHandlers`

The first argument is an object that can carry one or more handlers. You can set the handlers under the following keys: `onStart`, `onActive`, `onEnd`, `onFail`, `onCancel`, `onFinish`.

Each of the specified handlers will be triggered depending on the current state of the attached gesture handler. Read more about gesture handling states in the Gesture Handler documentation. The handler receives the following arguments:

* `event` \[object] - an event object carrying the event payload. The payload will be different depending on the type of the gesture handler to which the callback is attached to (`PanGestureHandler`, `RotationGestureHandler`, etc.).

* `context` \[object] - a JavaScript object that can be used to store some state. You can read and write any data to it. This object persists between events and across handlers for all the selected states.

#### `dependencies`Optional

An optional array of dependencies.

Only relevant when using Reanimated without the Babel plugin on the Web.

### Returns

`useAnimatedGestureHandler` returns a handler object that can be attached to one of the gesture handler components provided by the `react-native-gesture-handler` library. You need to pass this object to the `onGestureEvent` property of a gesture handler.

## Example

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|⚠️|

\* On Web, you have to pass returned handler object to both `onGestureEvent` and `onHandlerStateChange` parameters.
