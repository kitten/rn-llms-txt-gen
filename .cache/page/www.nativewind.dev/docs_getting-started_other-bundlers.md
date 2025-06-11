Other bundlers

# Other bundlers

Nativewind provides installation instructions for the two most common React Native bundlers, Metro and Next.js. but you can use Nativewind with any bundler. To use Nativewind, three conditions need to be met:

1. Tailwind CSS is setup with the Nativewind preset
2. React Native is setup and you are using React Native Web >=0.17
3. The JSX runtime is changed to `'automatic'` and `jsxImportSource` set to `'nativewind'`

## Troubleshooting Web bundlers

**Is TailwindCSS setup?**

You can test Tailwind CSS by rendering `<div class="w-10 h-10 bg-red-500" />`. You should see see a red square if setup correctly. Please follow the Tailwind CSS installation instructions for setup and troubleshooting.

**Is React Native Web setup?**

Replace your `div` with:

```
<View style={{ $$css: true, test: "w-10 h-10 bg-blue-500" }} />
```

You should see a blue square if setup correctly.

**Is JSX runtime set to `automatic` dn `jsxImportSource` set to `'nativewind'`**

Replace your `View` with

```
<View className="w-10 h-10 bg-blue-500" />
```
