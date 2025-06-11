Version: 3.x

On this page

# runOnRuntime

`runOnRuntime` lets you asynchronously run workletized functions on a separate worklet runtime on a separate thread.

## Reference

```
import { createWorkletRuntime, runOnRuntime } from 'react-native-reanimated';

const workletRuntime = createWorkletRuntime('background');

function App() {
  // E.g. in event handler or in an effect
  runOnRuntime(workletRuntime, (greeting) => {
    console.log(`${greeting} from a separate thread`);
  })('Howdy');

  // ...
}
```

### Arguments

#### workletRuntime

A reference to worklet runtime created with `createWorkletRuntime`.

#### fn

A reference to a function you want to execute on the UI thread from the JavaScript thread. Arguments to your function have to be passed to the function returned from `runOnUI` i.e. `runOnUI(myWorklet)(10);`.

### Returns

`runOnRuntime` returns a function that accepts arguments for the function passed as the first argument.

info

Don't forget to call the function returned from `runOnRuntime`.

## Remarks

* It's a common mistake to execute function inside of `runOnRuntime` like this: ~~`runOnRuntime(myWorklet(10))()`~~. Here, the correct usage would be `runOnRuntime(myWorklet)(10)`.

* The callback passed as the argument will not be workletized automatically. You need to add `'worklet';` directive manually to allow the function to be run on the UI thread.

* You may call `runOnRuntime` on any runtime, including the RN runtime, UI runtime and other worklet runtimes.

* The function passed to `runOnRuntime` will be added to an execution queue on a separate thread and executed asynchronously on the specified worklet runtime. The functions will be executed in the order they were added to the queue.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|❌|
