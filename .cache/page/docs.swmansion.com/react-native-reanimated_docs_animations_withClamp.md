# withClamp

`withClamp` is an animation modifier that lets you limit the scope of movement of your animation to make it stay within some predefined range. Use it with withSpring animation.

## Reference

```
import { withClamp } from 'react-native-reanimated';

function App() {
  sv.value = withClamp({ min: -1, max: 1 }, withSpring(0));
  // ...
}
```

### Arguments

#### `config`

An object with following properties:

\| Name | Type Description | | ---------------- | ---------------- | ------------------------------------------------ | | min

Optional

\| `number` | The lowest value your animation can ever reach | | max

Optional

\| `number` | The greatest value your animation can ever reach |

#### `animation`

The spring animation you want to clamp.

```
const clampedStyleWithDelay = useAnimatedStyle(() => {
  return {
    width: withClamp({ min: 0, max: 100 }, withSpring(randomWidth.value)),
  };
});
```

### Returns

`withClamp` returns an animation object. It can be either assigned directly to a shared value or can be used as a value for a style object returned from useAnimatedStyle.

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
