Version: 3.x

On this page

# createWorkletRuntime

`createWorkletRuntime` lets you create a new JS runtime which can be used to run worklets possibly on different threads than JS or UI thread. This function is supposed to be used by third-party libraries that need to integrate with worklets. The return value represents the runtime and it's supposed to be passed to C++ side using JSI (JavaScript Interface) for further operations.

## Reference

### Usage in JavaScript

```
import { createWorkletRuntime } from 'react-native-reanimated';

function App() {
  const runtime = createWorkletRuntime('background');
}
```

### Usage in C++

```
auto runtime = reanimated::extractWorkletRuntime(rt, runtimeValue);

jsi::Runtime &rt = runtime->getJSIRuntime();

auto worklet = reanimated::extractShareableOrThrow<reanimated::ShareableWorklet>(rt, workletValue);

runtime->runGuarded(worklet, ...args);
```

### Arguments

#### `name`

A name used to identify the runtime which will appear in devices list in Chrome DevTools.

#### `initializer`

An optional worklet that will be run synchronously on the same thread immediately after the runtime is created. It can be used to inject some global variables or functions into the runtime.

### Returns

`createWorkletRuntime` returns `WorkletRuntime` which is a `jsi::HostObject<reanimated::WorkletRuntime>`.

## Remarks

* Worklet runtimes come with `performance.now` and `console.*` methods installed out-of-the-box. Other APIs are not available and need to be injected into the runtime or captured via worklet closure.

* In development mode, all unhandled errors thrown in the runtime (except for those thrown in `initializer`) will be caught and thus logged to the console and displayed in a LogBox.

* You can use Chrome DevTools to debug the runtime (Hermes only). The runtime will appear in the devices list as `name` passed to `createWorkletRuntime`.

* Shared values are only partially supported in worklet runtimes. If you want to write to a shared value from the RN runtime and read it on the worklet runtime, you need to perform the assignment using `runOnRuntime`. Otherwise, the value will be updated only in the RN and UI runtimes.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|❌|
