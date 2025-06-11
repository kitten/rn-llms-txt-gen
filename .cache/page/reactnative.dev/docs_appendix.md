On this page

# Appendix

## I. Terminology

* **Spec** - TypeScript or Flow code that describes the API for a Turbo Native Module or Fabric Native component. Used by **Codegen** to generate boilerplate code.

* **Native Modules** - Native libraries that have no User Interface (UI) for the user. Examples would be persistent storage, notifications, network events. These are accessible to your JavaScript application code as functions and objects.

* **Native Component** - Native platform views that are available to your application JavaScript code through React Components.

* **Legacy Native Components** - Components which are running on the old React Native architecture.

* **Legacy Native Modules** - Modules which are running on the old React Native architecture.

## II. Codegen Typings

You may use the following table as a reference for which types are supported and what they map to in each platform:

|Flow|TypeScript|Flow Nullable Support|TypeScript Nullable Support|Android (Java)|iOS (ObjC)|
|-|-|-|-|-|-|
|`string`|`string`|`?string`|`string \| null`|`string`|`NSString`|
|`boolean`|`boolean`|`?boolean`|`boolean \| null`|`Boolean`|`NSNumber`|
|Object Literal `{\| foo: string, ...\|}`|`{ foo: string, ...} as const`|`?{\| foo: string, ...\|}`|`?{ foo: string, ...} as const`|-|-|
|Object \[1]|Object \[1]|`?Object`|`Object \| null`|`ReadableMap`|`@` (untyped dictionary)|
|`Array<T>`|`Array<T>`|`?Array<T>`|`Array<T> \| null`|`ReadableArray`|`NSArray` (or `RCTConvertVecToArray` when used inside objects)|
|`Function`|`Function`|`?Function`|`Function \| null`|-|-|
|`Promise<T>`|`Promise<T>`|`?Promise<T>`|`Promise<T> \| null`|`com.facebook.react.bridge.Promise`|`RCTPromiseResolve` and `RCTPromiseRejectBlock`|
|Type Unions `'SUCCESS'\|'FAIL'`|Type Unions `'SUCCESS'\|'FAIL'`|Only as callbacks||-|-|
|Callbacks `() =>`|Callbacks `() =>`|Yes||`com.facebook.react.bridge.Callback`|`RCTResponseSenderBlock`|
|`number`|`number`|No||`double`|`NSNumber`|

### Notes:

**\[1]** We strongly recommend using Object literals instead of Objects.

info

You may also find it useful to refer to the JavaScript specifications for the core modules in React Native. These are located inside the `Libraries/` directory in the React Native repository.

* I. Terminology
* II. Codegen Typings
  * Notes:
