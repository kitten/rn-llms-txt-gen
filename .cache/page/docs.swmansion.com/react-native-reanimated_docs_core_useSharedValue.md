# useSharedValue

`useSharedValue` lets you define shared values in your components.

## Reference

```
import { useSharedValue } from 'react-native-reanimated';

function App() {
  const sv = useSharedValue(100);

  // read a shared value
  console.log(sv.value);

  // and modify it
  sv.value += 50;
}
```

### Arguments

#### `initialValue`

The value you want to store initially in the shared value. It can be any JavaScript value like `number`, `string` or `boolean` but also data structures such as `array` and `object`.

### Returns

`useSharedValue` returns a shared value initially set to the `initialValue`.

You can access data stored in the shared value with either its `value` property or `get` and `set` methods.

#### React Compiler support

When working with the React Compiler, you should refrain from accessing and modifying the `value` property directly. Instead, use the `get` and `set` methods. They're the alternative API for `useSharedValue`, compliant with the React Compiler standards.

```
function App() {
  const sv = useSharedValue(100);

  const animatedStyle = useAnimatedStyle(() => {
    'worklet';
    return { width: sv.get() * 100 };
  });

  const handlePress = () => {
    sv.set((value) => value + 1);
  };
}
```

## Example

## Remarks

* Don't read or modify the value of a shared value during a component's render. Access to `value` property or calling `get`/`set` methods is a side-effect. Triggering side-effects during render violates the Rules of React. All reads from and writes to a shared value should happen in relevant callbacks which aren't executed during render, i.e. in `useAnimatedStyle` or `useEffect` hooks.

* When you change the `sv.value` Reanimated will update the styles and keep the shared value in sync between the threads. However, this won't trigger a typical React re-render because a shared value is a plain JavaScript object.

* When you read the `sv.value` on the JavaScript thread, the thread will get blocked until the value is fetched from the UI thread. In most cases it will be negligible, but if the UI thread is busy or you are reading a value multiple times, the wait time needed to synchronize both threads may significantly increase.

* When you change the `sv.value` the update will happen synchronously on the UI thread. On the other hand, on the JavaScript thread the update is asynchronous. This means when you try to immediately log the `value` after the change it will log the previously stored value.

```
function App() {
  const sv = useSharedValue(100); // initially set 100

  sv.value += 50; // changing value stored in a shared value

  console.log(sv.value); // will still log 100
}
```

* Stay away from destructuring assignment when working with shared values. While this is a completely valid JavaScript code it will make Reanimated unable to keep the reactivity of a shared value.

```
function App() {
  let { value } = sv; // don't do this

  console.log(value); // you can read the value just fine

  value += 50; // but this won't update the styles
}
```

* When storing objects in a shared value, make sure to reassign an object instead of changing the properties individually.

```
function App() {
  const sv = useSharedValue({ x: 0, y: 0 });

  sv.value.x = 50; // Reanimated loses reactivity 🚨

  sv.value = { x: 50, y: 0 }; // ✅
}
```

* When storing large arrays or complex objects in a shared value, you can use `.modify` method to alter the existing value instead of creating a new one.

```
function App() {
  const sv = useSharedValue([1, 2, 3]);

  sv.value.push(1000); // Reanimated loses reactivity 🚨

  sv.value = [...sv.value, 1000]; // works, but creates a new copy ⚠️

  sv.modify((value) => {
    'worklet';
    value.push(1000); // ✅
    return value;
  });
}
```

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|
