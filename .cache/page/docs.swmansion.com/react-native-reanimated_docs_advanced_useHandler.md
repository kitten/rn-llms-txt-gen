# useHandler

`useHandler` is a low-level hook. It returns a context object and a value that tells you if the worklet needs to be rebuilt. You can use it to create custom event handler hooks, like `useScrollViewOffset` or `useAnimatedScrollHandler`.

## Reference

```
import { useEvent, useHandler } from 'react-native-reanimated';

function useAnimatedPagerScrollHandler(handlers, dependencies) {
  const { context, doDependenciesDiffer, useWeb } = useHandler(
    handlers,
    dependencies
  );

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
```

### Arguments

#### `handlers`

Object containing custom keys matching native event names. The values in the object should be individual worklets. Each of the worklets will be triggered when the corresponding event is dispatched on the connected animated component.

Each of the event worklets will receive the following parameters when called:

* `event` - event object. The payload can differ depending on the type of the event.

* `context` - plain JS object that can be used to store some state. This object will persist in between event occurrences and you can read and write any data to it. When there are several event handlers provided in a form of an object of worklets, the `context` object will be shared in between the worklets allowing them to communicate with each other.

#### `dependencies`Optional

An optional array of dependencies.

Only relevant when using Reanimated without the Babel plugin on the Web.

### Returns

The hook returns a context that will be reused by event handlers and value that indicates whether worklets should be rebuilt. If different implementation is needed for web, `useWeb` boolean is returned to check for web environment

## Example

This example can be more easily implemented using `useScrollViewOffset`.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
