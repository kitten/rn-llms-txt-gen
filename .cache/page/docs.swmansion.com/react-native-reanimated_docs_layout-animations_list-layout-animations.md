React Native Reanimated

Version: 3.x

On this page

# List Layout Animations

`itemLayoutAnimation` lets you define a layout transition that's applied when list items layout changes. You can use one of the predefined transitions like `LinearTransition` or create your own transition.

## Example

```
import Animated, { LinearTransition } from 'react-native-reanimated';

function App() {
  return (
    <Animated.FlatList
      data={data}
      renderItem={renderItem}
      itemLayoutAnimation={LinearTransition}
    />
  );
}
```

## Remarks

* `itemLayoutAnimation` works only with a single-column `Animated.FlatList`, `numColumns` property cannot be greater than 1.
* You can change the `itemLayoutAnimation` on the fly or disable it by setting it to `undefined`.

```
function App() {
  const [transition, setTransition] = useState(LinearTransition);

  const changeTransition = () => {
    setTransition(
      transition === LinearTransition ? JumpingTransition : LinearTransition
    );
  };

  const toggleTransition = () => {
    setTransition(transition ? undefined : LinearTransition);
  };

  return (
    <Animated.FlatList
      data={data}
      renderItem={renderItem}
      itemLayoutAnimation={transition}
    />
  );
}
```

* If the list items contain neither a `key` nor `id` property (which are used by default by the FlatList keyExtractor to create list item keys), you must provide your own implementation of the `keyExtractor` function that returns a unique key for each list item.

```
function App() {
  return (
    <Animated.FlatList
      data={data}
      renderItem={renderItem}
      itemLayoutAnimation={LinearTransition}
      keyExtractor={customKeyExtractor}
    />
  );
}
```

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|

* Example
* Remarks
* Platform compatibility
