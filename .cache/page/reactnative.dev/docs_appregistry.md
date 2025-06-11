# AppRegistry

### Project with Native Code Required

If you are using the managed Expo workflow there is only ever one entry component registered with `AppRegistry` and it is handled automatically (or through registerRootComponent). You do not need to use this API.

`AppRegistry` is the JS entry point to running all React Native apps. App root components should register themselves with `AppRegistry.registerComponent`, then the native system can load the bundle for the app and then actually run the app when it's ready by invoking `AppRegistry.runApplication`.

```
import {Text, AppRegistry} from 'react-native';

const App = () => (
  <View>
    <Text>App1</Text>
  </View>
);

AppRegistry.registerComponent('Appname', () => App);
```

To "stop" an application when a view should be destroyed, call `AppRegistry.unmountApplicationComponentAtRootTag` with the tag that was passed into `runApplication`. These should always be used as a pair.

`AppRegistry` should be required early in the `require` sequence to make sure the JS execution environment is setup before other modules are required.

## Reference

## Methods

### `getAppKeys()`

```
static getAppKeys(): string[];
```

Returns an array of strings.

### `getRegistry()`

```
static getRegistry(): {sections: string[]; runnables: Runnable[]};
```

Returns a Registry object.

### `getRunnable()`

```
static getRunnable(appKey: string): : Runnable | undefined;
```

Returns a Runnable object.

**Parameters:**

* Name
  appKey
  Required
* Type
  string

### `getSectionKeys()`

```
static getSectionKeys(): string[];
```

Returns an array of strings.

### `getSections()`

```
static getSections(): Record<string, Runnable>;
```

Returns a Runnables object.

### `registerCancellableHeadlessTask()`

```
static registerCancellableHeadlessTask(
  taskKey: string,
  taskProvider: TaskProvider,
  taskCancelProvider: TaskCancelProvider,
);
```

Register a headless task which can be cancelled. A headless task is a bit of code that runs without a UI.

**Parameters:**

|Name|Type|Description|
|-|-|-|
|taskKeyRequired|string|The native id for this task instance that was used when startHeadlessTask was called.|
|taskProviderRequired|TaskProvider|A promise returning function that takes some data passed from the native side as the only argument. When the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context.|
|taskCancelProviderRequired|TaskCancelProvider|a void returning function that takes no arguments; when a cancellation is requested, the function being executed by taskProvider should wrap up and return ASAP.|

### `registerComponent()`

```
static registerComponent(
  appKey: string,
  getComponentFunc: ComponentProvider,
  section?: boolean,
): string;
```

**Parameters:**

|Name|Type|
|-|-|
|appKeyRequired|string|
|componentProviderRequired|ComponentProvider|
|section|boolean|

### `registerConfig()`

```
static registerConfig(config: AppConfig[]);
```

**Parameters:**

* Name
  config
  Required
* Type
  AppConfig
  \[]

### `registerHeadlessTask()`

```
static registerHeadlessTask(
  taskKey: string,
  taskProvider: TaskProvider,
);
```

Register a headless task. A headless task is a bit of code that runs without a UI.

This is a way to run tasks in JavaScript while your app is in the background. It can be used, for example, to sync fresh data, handle push notifications, or play music.

**Parameters:**

|Name|Type|Description|
|-|-|-|
|taskKeyRequired|string|The native id for this task instance that was used when startHeadlessTask was called.|
|taskProviderRequired|TaskProvider|A promise returning function that takes some data passed from the native side as the only argument. When the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context.|

### `registerRunnable()`

```
static registerRunnable(appKey: string, func: Runnable): string;
```

**Parameters:**

|Name|Type|
|-|-|
|appKeyRequired|string|
|runRequired|function|

### `registerSection()`

```
static registerSection(
  appKey: string,
  component: ComponentProvider,
);
```

**Parameters:**

|Name|Type|
|-|-|
|appKeyRequired|string|
|componentRequired|ComponentProvider|

### `runApplication()`

```
static runApplication(appKey: string, appParameters: any): void;
```

Loads the JavaScript bundle and runs the app.

**Parameters:**

|Name|Type|
|-|-|
|appKeyRequired|string|
|appParametersRequired|any|

### `setComponentProviderInstrumentationHook()`

```
static setComponentProviderInstrumentationHook(
  hook: ComponentProviderInstrumentationHook,
);
```

**Parameters:**

* Name
  hook
  Required
* Type
  function

A valid `hook` function accepts the following as arguments:

|Name|Type|
|-|-|
|componentRequired|ComponentProvider|
|scopedPerformanceLoggerRequired|IPerformanceLogger|

The function must also return a React Component.

### `setWrapperComponentProvider()`

```
static setWrapperComponentProvider(
  provider: WrapperComponentProvider,
);
```

**Parameters:**

* Name
  provider
  Required
* Type
  ComponentProvider

### `startHeadlessTask()`

```
static startHeadlessTask(
  taskId: number,
  taskKey: string,
  data: any,
);
```

Only called from native code. Starts a headless task.

**Parameters:**

|Name|Type|Description|
|-|-|-|
|taskIdRequired|number|The native id for this task instance to keep track of its execution.|
|taskKeyRequired|string|The key for the task to start.|
|dataRequired|any|The data to pass to the task.|

### `unmountApplicationComponentAtRootTag()`

```
static unmountApplicationComponentAtRootTag(rootTag: number);
```

Stops an application when a view should be destroyed.

**Parameters:**

* Name
  rootTag
  Required
* Type
  number

## Type Definitions

### AppConfig

Application configuration for the `registerConfig` method.

* Type
  object

**Properties:**

|Name|Type|
|-|-|
|appKeyRequired|string|
|component|ComponentProvider|
|run|function|
|section|boolean|

> **Note:** Every config is expected to set either `component` or `run` function.

### Registry

* Type
  object

**Properties:**

|Name|Type|
|-|-|
|runnables|array of Runnables|
|sections|array of strings|

### Runnable

* Type
  object

**Properties:**

|Name|Type|
|-|-|
|component|ComponentProvider|
|run|function|

### Runnables

An object with key of `appKey` and value of type of `Runnable`.

* Type
  object

### Task

A `Task` is a function that accepts any data as argument and returns a Promise that resolves to `undefined`.

* Type
  function

### TaskCanceller

A `TaskCanceller` is a function that accepts no argument and returns void.

* Type
  function

### TaskCancelProvider

A valid `TaskCancelProvider` is a function that returns a `TaskCanceller`.

* Type
  function

### TaskProvider

A valid `TaskProvider` is a function that returns a `Task`.

* Type
  function
