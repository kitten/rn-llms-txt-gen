# Typescript

Nativewind extends the React Native types via declaration merging. The simplest method to include the types is to create a new `nativewind-env.d.ts` file and add a triple-slash directive referencing the types.

```
/// <reference types="nativewind/types" />
```

CAUTION

Do not call this file:

* `nativewind.d.ts`
* The same name as a file or folder in the same directory e.g `app.d.ts` when an `/app` folder exists
* The same name as a folder in `node_modules`, e.g `react.d.ts`

By doing so, your types will not be picked up by the TypeScript compiler.
