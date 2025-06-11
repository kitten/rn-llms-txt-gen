# useComposedEventHandler

This is a hook that lets you compose useEvent-based event handlers (such as useAnimatedScrollHandler or your own custom ones) into a single, combined event handler.

## Reference

```
import Animated, {
  useAnimatedScrollHandler,
  useComposedEventHandler,
} from 'react-native-reanimated';

function ComposedEventHandlerExample() {
  const onScrollHandler1 = useAnimatedScrollHandler({
    onScroll(e) {
      console.log('Scroll handler 1 onScroll event');
    },
  });

  const onScrollHandler2 = useAnimatedScrollHandler({
    onScroll(e) {
      console.log('Scroll handler 2 onScroll event');
    },
  });

  const composedHandler = useComposedEventHandler([
    onScrollHandler1,
    onScrollHandler2,
  ]);

  return (
    <View style={styles.container}>
      <Animated.ScrollView style={styles.scroll} onScroll={composedHandler}>
        <Content />
      </Animated.ScrollView>
    </View>
  );
}
```

### Arguments

#### `handlers`

An array of event handlers created using useEvent hook. `useComposedEventHandler` hook reacts to any changes in given handlers and rebuilds whenever it is needed.

### Returns

The hook returns a handler object that can be hooked into any `Animated component`. The handler should be passed to a corresponding `onEvent` prop (e.g. `onScroll` when working with scroll-related handlers). If your composed handler aggregates multiple events that have little in common, put it into a new property, e.g. "composedHandler". It will still work, but the best practice here would be to use several composed handlers for code clarity.

## Remarks

* The hook returns a handler that combines functionalities of all the handlers given as an argument. This way, you can have more than one handler responding to a given event, as well as handle many different type events using just one object.
* It will still work well when passed to multiple `Animated components`, firing event callbacks for each connected component.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
