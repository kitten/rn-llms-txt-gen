# useAnimatedScrollHandler

`useAnimatedScrollHandler` is a hook that returns an event handler reference. It can be used with React Native's scrollable components.

## Reference

```
import { useAnimatedScrollHandler } from 'react-native-reanimated';

function App() {
  const offsetY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    offsetY.value = event.contentOffset.y;
  });

  // ...

  return <Animated.ScrollView onScroll={scrollHandler} />;
}
```

### Arguments

#### `handlers`

Object containing custom keys matching native event names. Following keys are available:

* `onScroll`
* `onBeginDrag`
* `onEndDrag`
* `onMomentumBegin`
* `onMomentumEnd`

The values in the object should be individual worklets. Each of the worklet will be triggered when the corresponding event is dispatched on the connected Scrollable component.

Each of the event worklets will receive the following parameters when called:

* `event` - event object carrying the information about the scroll. The payload can differ depending on the type of the event. Please consult React Native's ScrollView documentation to learn about scroll event structure.

* `context` - plain JS object that can be used to store some state. This object will persist in between scroll event occurrences and you can read and write any data to it. When there are several event handlers provided in a form of an object of worklets, the `context` object will be shared in between the worklets allowing them to communicate with each other.

#### `dependencies`Optional

An optional array of dependencies.

Only relevant when using Reanimated without the Babel plugin on the Web.

### Returns

The hook returns a handler object that can be hooked into a scrollable container. The returned handler should be passed under `onScroll` parameter regardless of whether it is configured to receive only scroll or also momentum or drag events. In order for the returned handler to be properly triggered, you should use containers that are wrapped with `Animated` (e.g. `Animated.ScrollView` and not just `ScrollView`).

## Example

## Remarks

* The returned handler may be passed to multiple components. In such situation, the handler will invoke for the given events each time any of the components dispatches them.
* If a single worklet function of type `(event) => void` is passed instead of a map of functions matched to event keys, it's treated as a handler for the `onScroll` event.
* Only `onScroll` event works on Web.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
