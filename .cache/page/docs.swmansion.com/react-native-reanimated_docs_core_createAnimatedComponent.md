# createAnimatedComponent

`createAnimatedComponent` lets you create an Animated version of any React Native component. Wrapping a component with `createAnimatedComponent` allows Reanimated to animate any prop or style associated with that component.

Reanimated comes with five built-in Animated components:

* `Animated.FlatList`
* `Animated.Image`
* `Animated.View`
* `Animated.ScrollView`
* `Animated.Text`

Rest of the components you might want to animate in React Native have to be wrapped with a `createAnimatedComponent` function.

## Reference

```
import Animated from 'react-native-reanimated';
import { TextInput } from 'react-native';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
```

### Arguments

#### `component`

The component you want to make animatable. Function components have to be wrapped with `React.forwardRef()`.

### Returns

`createAnimatedComponent` returns a component that Reanimated is capable of animating.

## Example

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
