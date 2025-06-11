Version: 3.x

# Advanced APIs

## measure

measure lets you synchronously get the dimensions and position of a view on the screen, all on the UI thread.

## useAnimatedReaction

useAnimatedReaction allows you to respond to changes in a shared value. It's especially useful when comparing values previously stored in the shared value with the current one.

## useFrameCallback

useFrameCallback lets you run a function on every frame update.

## useEvent

useEvent is a low-level hook. It returns event handler that will be called when native event occurs. You can use it to create custom event handler hooks, like useScrollViewOffset or useAnimatedScrollHandler.

## useHandler

useHandler is a low-level hook. It returns a context object and a value that tells you if the worklet needs to be rebuilt. You can use it to create custom event handler hooks, like useScrollViewOffset or useAnimatedScrollHandler.

## useComposedEventHandler

This is a hook that lets you compose useEvent-based event handlers (such as useAnimatedScrollHandler or your own custom ones) into a single, combined event handler.

## dispatchCommand

dispatchCommand allows you to run commands on a native component from the UI thread directly.

## setNativeProps

setNativeProps lets you imperatively update component properties.

## makeMutable

The usage of makeMutable is discouraged in most cases. It's recommended to use the useSharedValue hook instead unless you know what you're doing and you are aware of the consequences (see the Remarks section).
