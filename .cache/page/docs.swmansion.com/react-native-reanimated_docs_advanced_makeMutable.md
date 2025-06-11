# makeMutable

caution

The usage of `makeMutable` is discouraged in most cases. It's recommended to use the `useSharedValue` hook instead unless you know what you're doing and you are aware of the consequences (see the Remarks section).

`makeMutable` is used internally and its behavior may change over time.

`makeMutable` is a function internally used by the `useSharedValue` hook to create a shared value.

It makes it possible to create mutable values without the use of the hook, which can be useful in some cases (e.g. in the global scope, as an array of mutable values, etc.).

The created object is, in fact, the same as the one returned by `useSharedValue` hook, so the further usage is the same.

## Reference

```
import { makeMutable } from 'react-native-reanimated';

const mv = makeMutable(100);
```

### Arguments

#### `initial`

The value you want to be initially stored in the mutable. It can be any JavaScript value like `number`, `string` or `boolean` but also data structures such as `array` and `object`.

### Returns

`makeMutable` returns a mutable value initially set to the `initial`.

You can access data stored in the mutable with either its `value` property or `get` and `set` methods.

## Example

## Remarks

info

We use *mutable value* name for an object created by `makeMutable` to distinguish it from the *shared value* created by `useSharedValue`. Technically, *shared value* is a *mutable value* with an automatic cleanup.

* All remarks from the useSharedValue hook apply to `makeMutable` as well.

* Don't call `makeMutable` directly in the component scope. When component re-renders, it will create the completely new object (with the new `initial` value if it was changed) and the state of the previous mutable value will be lost.

```
function App() {
  const [counter, setCounter] = useState(0);
  const mv = makeMutable(counter); // 🚨 creates a new mutable value on each render

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1); // updates the counter stored in the component state
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [mv]);

  useAnimatedReaction(
    () => mv.value,
    (value) => {
      console.log(value); // prints 0, 1, 2, ...
    }
  );
}
```

* Use `cancelAnimation` to stop all animations running on the mutable value if it's no longer needed and there are still some animations running. Be super careful with infinite animations, as they will never stop unless you cancel them manually.

```
function App() {
  const mv = useMemo(() => makeMutable(0), []);

  useEffect(() => {
    mv.value = withRepeat(withSpring(100), -1, true); // creates an infinite animation

    return () => {
      cancelAnimation(mv); // ✅ stops the infinite animation on component unmount
    };
  }, []);
}
```

* You don't have to use `cancelAnimation` when the value is not animated. It will be garbage collected automatically when no more references to it exist.

```
const someFlag = makeMutable(false);

function App() {
  someFlag.value = true; // ✅ no need to cancel the animation later on
}
```

* When you decide to use `makeMutable`, ensure that you follow Rules of React and avoid common `useRef` pitfalls, such as modifying the reference during rendering (see the **Pitfall** section in the useRef documentation for more details).

### Comparison with `useSharedValue`

|`makeMutable`|`useSharedValue`|
|-|-|
|Creates a new object on each call|Reuses the same object on each call|
|If `initial` value changes, a new object with the new value is created|If `initialValue` value changes, the initially created object is returned without any changes|
|Can be used outside of the component scope|Can be used only inside the component scope|
|Can be used in loops (also when the number of iterations is not constant)|Can be used in loops only if the number of rendered hooks (`useSharedValue` calls) is constant|
|Doesn't automatically cancel animations when the component is unmounted|Automatically cancels animations when the component is unmounted|

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
