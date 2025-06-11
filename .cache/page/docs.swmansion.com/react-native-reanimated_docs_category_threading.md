# createWorkletRuntime

createWorkletRuntime lets you create a new JS runtime which can be used to run worklets possibly on different threads than JS or UI thread. This function is supposed to be used by third-party libraries that need to integrate with worklets. The return value represents the runtime and it's supposed to be passed to C++ side using JSI (JavaScript Interface) for further operations.
