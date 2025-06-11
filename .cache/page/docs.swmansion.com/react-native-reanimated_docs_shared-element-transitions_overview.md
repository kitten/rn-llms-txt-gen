# Shared Element Transitions

caution

Shared Element Transitions is an experimental feature, not recommended for production use yet. We are waiting for your feedback to improve implementation.

Shared Element Transition allows you to smoothly transform a component from one screen into a component on another screen.

## Reference

```
import Animated from 'react-native-reanimated';

const Stack = createNativeStackNavigator();

function One({ navigation }) {
  return (
    <>
      <Animated.View
        sharedTransitionTag="sharedTag"
      />
      <Button title="Two" onPress={() => navigation.navigate('Two')} />
    </>
  );
}

function Two({ navigation }) {
  return (
    <>
      <Animated.View
        sharedTransitionTag="sharedTag"
      />
      <Button title="One" onPress={() => navigation.navigate('One')} />
    </>
  );
}

export default function SharedElementExample() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## Overview

When Reanimated detects that a component with a `sharedTransitionTag` is being mounted or unmounted, it tries to find the last registered view with the same `sharedTransitionTag`.

If it finds two matching components, it takes a snapshot of the styles for both components, and both shared views are detached from their parent and attached to a temporary transition container for the duration of the animation.

After the animation is complete, they are attached back to their original parent.

If you don't create a custom animation, all snapshot properties, including `width`, `height`, `originX`, `originY`, and `transformMatrix`, are animated by default with a duration of 500ms using the `withTiming` animation.

## Implementation

To create a shared transition animation between two components on different screens, simply assign the same `sharedTransitionTag` to both components. When you navigate between screens, the shared transition animation will automatically play.

If you want to use more than one shared view on the same screen, be sure to assign a **unique** shared tag to each component.

**Screen A**

```
<View
  sharedTransitionTag="sharedTag"
  style={{ width: 150, height: 150, backgroundColor: 'green' }}
/>
```

**Screen B**

```
<View
  sharedTransitionTag="sharedTag"
  style={{ width: 100, height: 100, backgroundColor: 'green' }}
/>
```

## Custom animation

You can create a custom animation by using `SharedTransition.custom` for regular animations or `SharedTransition.progressAnimation` for progress-based animations.

```
import { SharedTransition } from 'react-native-reanimated';

const transition = SharedTransition.custom((values) => {
  'worklet';
  return {
    height: withSpring(values.targetHeight),
    width: withSpring(values.targetWidth),
  };
})
  .progressAnimation((values, progress) => {
    'worklet';
    const getValue = (
      progress: number,
      target: number,
      current: number
    ): number => {
      return progress * (target - current) + current;
    };
    return {
      width: getValue(progress, values.targetWidth, values.currentWidth),
      height: getValue(progress, values.targetHeight, values.currentHeight),
    };
  })
  .defaultTransitionType(SharedTransitionType.ANIMATION);
```

By combining these methods and setting `defaultTransitionType(SharedTransitionType.ANIMATION)`, you specify that the custom animation will be used for screen transitions, while the progress-based animation will be applied during swipe back gesture (**iOS only**).

Setting `defaultTransitionType(SharedTransitionType.PROGRESS_ANIMATION)` will apply progress-based animation in both scenarios.

Then, to use it, simply pass your custom animation as `sharedTransitionStyle` prop to both your screen's components.

If you want even more customization, you can pass two different custom animations to two different component, as long as the components share the same `sharedTransitionTag`. In that case animation passed to component A will run when switching from A -> B, and animations passed to component B will run when switching from B -> A.

```
<View
  sharedTransitionTag="reanimatedTransition"
  sharedTransitionStyle={transition}
  style={{ backgroundColor: 'blue', width: 200, height: 100 }}
/>
```

## Example

Your browser does not support the video tag.

Your browser does not support the video tag.

Expand the full code

```
      <Pressable onPress={() => goToDetails('countryside')}>
        <Animated.View
          sharedTransitionTag={'countryside'}
          style={[
            styles.imageOne,
            { backgroundColor: gallery.countryside.color },
          ]}
        />
      </Pressable>
      <View style={styles.row}>
        <Pressable onPress={() => goToDetails('florence')}>
          <Animated.View
            sharedTransitionTag={'florence'}
            style={[
              { width: width / 2 - 35 },
              styles.imageTwo,
              { backgroundColor: gallery.florence.color },
            ]}
          />
        </Pressable>
        <Pressable onPress={() => goToDetails('dawn')}>
          <Animated.View
            sharedTransitionTag={'dawn'}
            style={[
              { width: width / 2 - 35 },
              styles.imageThree,
              { backgroundColor: gallery.dawn.color },
            ]}
          />
        </Pressable>
      </View>
```

## Remarks

* Only the native stack is supported.
* You can only animate `width`, `height`, `originX`, `originY`, and `transformMatrix` properties when using the shared transition.
* The layout for shared view children is not computed during the transition.
* The current implementation supports **only** the old React Native architecture (**Paper**).
* In the future we will introduce support for the new React Native architecture (Fabric).

## Platform Compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|❌|
