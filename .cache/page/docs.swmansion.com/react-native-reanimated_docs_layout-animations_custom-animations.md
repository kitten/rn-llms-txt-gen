# Custom animations

Custom animations give you a full control over the Entering/Exiting animations and Layout transitions. However, they tend to be hard to understand and maintain. We recommend starting with predefined Entering/Exiting, Keyframes and Layout presets first before using custom animations.

## Reference

```
function CustomAnimation(values) {
  'worklet';
  const animations = {
    // your animations
  };
  const initialValues = {
    // initial values for animations
  };
  const callback = (finished: boolean) => {
    // optional callback that will fire when layout animation ends
  };
  return {
    initialValues,
    animations,
    callback,
  };
}
```

## Custom Exiting Animation

### Arguments

* `values` - contains information about where view was displayed and what were its dimensions

  * `values.currentOriginX` - X coordinate of top left corner in parent's coordinate system
  * `values.currentOriginY` - Y coordinate of top left corner in parent's coordinate system
  * `values.currentWidth` - view's width
  * `values.currentHeight` - view's height
  * `values.currentBorderRadius` - view's border radius
  * `values.currentGlobalOriginX` - X coordinate of top left corner in global coordinate system
  * `values.currentGlobalOriginY` - Y coordinate of top left corner in global coordinate system

### Example

Your browser does not support the video tag.

Your browser does not support the video tag.

Expand the full code

```
const customExiting = (values) => {
  'worklet';
  const animations = {
    originX: withTiming(2 * WIDTH, { duration: 3000 }),
    opacity: withTiming(0, { duration: 2000 }),
    transform: [{ scale: withTiming(0.2, { duration: 3500 }) }],
  };
  const initialValues = {
    originX: values.currentOriginX,
    opacity: 1,
    transform: [{ scale: 1 }],
  };
  return {
    initialValues,
    animations,
  };
};
```

## Custom Entering Animation

### Arguments

* `values` - contains information about where view wants to be displayed and what are its dimensions

  * `values.targetOriginX` - X coordinate of top left corner in parent's coordinate system
  * `values.targetOriginY` - Y coordinate of top left corner in parent's coordinate system
  * `values.targetWidth` - view's width
  * `values.targetHeight` - view's height
  * `values.targetBorderRadius` - view's border radius
  * `values.targetGlobalOriginX` - X coordinate of top left corder in global coordinate system
  * `values.targetGlobalOriginY` - Y coordinate of top left corder in global coordinate system

### Example

Your browser does not support the video tag.

Your browser does not support the video tag.

Expand the full code

```
const customEntering = (targetValues) => {
  'worklet';
  const animations = {
    originX: withTiming(targetValues.targetOriginX, { duration: 3000 }),
    opacity: withTiming(1, { duration: 2000 }),
    borderRadius: withDelay(1500, withTiming(40, { duration: 3000 })),
    transform: [
      { rotate: withTiming('0deg', { duration: 4000 }) },
      { scale: withTiming(1, { duration: 3500 }) },
    ],
  };
  const initialValues = {
    originX: -WIDTH,
    opacity: 0,
    borderRadius: 10,
    transform: [{ rotate: '90deg' }, { scale: 0.2 }],
  };
  return {
    initialValues,
    animations,
  };
};
```

## Custom Layout Transition

### Arguments

* `values` - contains before and after information about the view's origin and dimensions

  * `values.targetOriginX` - X coordinate of top left corner in parent's coordinate system
  * `values.targetOriginY` - Y coordinate of top left corner in parent's coordinate system
  * `values.targetWidth` - view's width
  * `values.targetHeight` - view's height
  * `values.targetBorderRadius` - view's border radius
  * `values.targetGlobalOriginX` - X coordinate of top left corder in global coordinate system
  * `values.targetGlobalOriginY` - Y coordinate of top left corder in global coordinate system
  * `values.currentOriginX` - X coordinate of top left corner in parent's coordinate system (before)
  * `values.currentOriginY` - Y coordinate of top left corner in parent's coordinate system (before)
  * `values.currentWidth` - view's width (before)
  * `values.currentHeight` - view's height (before)
  * `values.currentBorderRadius` - view's border radius (before)
  * `values.currentGlobalOriginX` - X coordinate of top left corner in global coordinate system (before)
  * `values.currentGlobalOriginY` - Y coordinate of top left corner in global coordinate system (before)

### Example

Your browser does not support the video tag.

Your browser does not support the video tag.

Expand the full code

```
const customLayoutTransition = (values) => {
  'worklet';
  return {
    animations: {
      originX: withTiming(values.targetOriginX, { duration: 1000 }),
      originY: withDelay(
        1000,
        withTiming(values.targetOriginY, { duration: 1000 })
      ),
      width: withSpring(values.targetWidth),
      height: withSpring(values.targetHeight),
    },

    initialValues: {
      originX: values.currentOriginX,
      originY: values.currentOriginY,
      width: values.currentWidth,
      height: values.currentHeight,
    },
  };
};
```

## Remarks

* Each Reanimated component has a shared value that keeps the current animations assigned to that particular component. If you start a new animation for a specific property without providing an initial value for that property, the initial value will be taken from the last animation assigned to the component. The only exception is the `Entering` animation, as we have no way to get the previous animation values.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|❌|
