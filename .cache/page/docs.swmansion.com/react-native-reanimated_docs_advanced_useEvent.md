# useEvent

`useEvent` is a low-level hook. It returns event handler that will be called when native event occurs. You can use it to create custom event handler hooks, like `useScrollViewOffset` or `useAnimatedScrollHandler`.

## Reference

```
import { useEvent } from 'react-native-reanimated';

function useAnimatedPagerScrollHandler(handlers, dependencies) {
  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);

  return useEvent(
    (event) => {
      'worklet';
      const { onPageScroll } = handlers;

      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {
        onPageScroll(event, context);
      }
    },
    ['onPageScroll'],
    doDependenciesDiffer
  );
}

return <Animated.View onScroll={useAnimatedPagerScrollHandler} />;
```

### Arguments

#### `handler`

Function that receives event object with native payload, that can be passed to custom handler hook's worklets.

* `event` - event object. The payload can differ depending on the type of the event.

#### `eventNames`Optional

Array of event names that will be handled by handler.

#### `rebuild`Optional

Value indicating whether handler should be rebuilt.

### Returns

The hook returns event handler that will be invoked when native event is dispatched. That handler may be connected to multiple components and will be invoked for each one's specific events.

## Example

This example can be more easily implemented using `useScrollViewOffset`.

## Remarks

* Keep in mind that not all scroll events are supported on the web, only `onScroll` is available across browsers.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
