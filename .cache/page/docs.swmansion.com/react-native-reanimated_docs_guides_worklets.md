# Worklets

Worklets are short-running JavaScript functions that can run on the UI thread. Reanimated uses worklets to calculate view styles and react to events on the UI thread.

You can create your own worklets using the `'worklet';` directive at the top of a function.

```
function myWorklet() {
  'worklet';
  console.log('Hello from a worklet');
}
```

The Reanimated Babel Plugin looks for functions marked with the `'worklet'` directive and converts them into serializable objects. We call this process workletization. These objects can then be copied and run over on the UI thread.

Most of the time when working with Reanimated and Gesture Handler the code is automatically workletized and run on the UI thread by default.

```
import { useAnimatedStyle } from 'react-native-reanimated';

function App() {
  const style = useAnimatedStyle(() => {
    // Running on the UI thread
    return { opacity: 0.5 };
  });
}
```

Functions marked with `'worklet';` aren't hoisted. Besides affecting hoisting, the `'worklet';` directive has no effect on the JavaScript thread.

You can use `runOnUI` to manually schedule worklet execution on the UI thread:

```
function myWorklet() {
  'worklet';
  console.log('Hello from the UI thread');
}

function onPress() {
  runOnUI(myWorklet)();
}
```

You can pass arguments to worklets.

```
function myWorklet(greeting) {
  'worklet';
  console.log(`${greeting} from the UI thread`);
}

function onPress() {
  runOnUI(myWorklet)('Howdy');
}
```

Worklets are closures. They can access variables declared outside of their own scope. Only variables referenced in the worklet body will be captured inside the worklet scope.

```
const width = 135.5;

function otherWorklet() {
  'worklet';
  console.log('Captured width is', width);
}
```

Capturing large JavaScript objects inside of a worklet can lead to performance issues.

```
const theme = {...}; // theme is a large object

function myWorklet() {
  'worklet';
  console.log(theme.color); // 🚨 referenced `color` but captured the whole `theme` object
}
```

You can get around this problem by first assigning the prop you want to use to a separate variable.

```
const theme = {...};
const color = theme.color;

function myWorklet() {
  'worklet';
  console.log(color); // ✅ captured only `color`
}
```

Worklets can return data within the same thread.

```
function returningWorklet() {
  'worklet';
  return "I'm back"; // on the UI thread
}

function someWorklet() {
  'worklet';
  const what = returningWorklet(); // still on the UI thread
  console.log('On the UI thread, other worklet says', what);
}
```

To pass data between UI and JS thread we use shared values.

```
import { useSharedValue } from 'react-native-reanimated';

function App() {
  const width = useSharedValue(100);

  function myWorklet() {
    'worklet';
    width.value += 50;
  }

  useEffect(() => {
    console.log(width.value); // available on both JS and UI thread
  }, []);
}
```

You can run functions on the JS thread from the UI thread with `runOnJS`. Most frequently used to call functions that aren't marked with a `'worklet';` directive (i.e. most third-party libraries) or to update the React state.

```
import { router } from 'expo-router';
import { Gesture } from 'react-native-gesture-handler';

function App() {
  const tap = Gesture.Tap().onEnd(() => {
    // i'm a worklet too!
    runOnJS(router.back)();
  });
}
```

Functions passed to `runOnJS` must be defined in the JavaScript thread scope, i.e. in the component body or the global scope. This code won't work because `myFunction` is defined in the `withTiming` callback, which is only executed in the UI thread:

```
function App() {
  const tap = Gesture.Tap().onEnd(() => {
    // myFunction is defined on the UI thread 🚨
    const myFunction = () => {};
    runOnJS(myFunction)(); // 💥
  });
}
```

Worklets can run in other runtimes than the one provided by Reanimated. For example VisionCamera and LiveMarkdown create their own worklet runtimes.

You can create your own worklet runtimes with `createWorkletRuntime` function.
