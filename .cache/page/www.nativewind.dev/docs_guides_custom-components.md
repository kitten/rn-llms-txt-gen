How to write custom components

This guide is about writing your own components. If you are looking for a guide on how to use Nativewind with third-party components, see the third-party components guide.

Unless you are styling a custom native component, you should never have to use `cssInterop` or `remapProps` when writing your own components. These are only used when working with third-party components.

# Your first component

Nativewind works by passing class names to components. This is the same pattern as Tailwind CSS, which uses utility classes to style elements.

To create a component with default styles, simply merge the className string.

```
function MyComponent({ className }) {
  const defaultStyles = "text-black dark:text-white";
  return <Text className={`${defaultStyles} ${className}`} />;
}
 
<MyComponent className="font-bold" />;
```

You can expand this pattern to create more complex components. For example, you can create a `Button` component with different variants.

```
const variantStyles = {
  default: "rounded",
  primary: "bg-blue-500 text-white",
  secondary: "bg-white-500 text-black",
};
 
function MyComponent({ variant, className, ...props }) {
  return (
    <Text
      className={`
        ${variantStyles.default}
        ${variantStyles[variant]}
        ${className}
      `}
      {...props }
    />
  );
}
```

Creating your own variants can quickly become complex. We recommend using a class name management library to simplify the process.

* tailwind-variants
* cva
* tw-classed
* clsx
* classnames

## Merging with inline styles

Nativewind will automatically merge with inline-styles. Read more about style specificity documentation.

```
<Text className="text-white" style={{ color: "black" }} /> // Will be black
```

## Handling components with multiple style props

Custom components can have multiple style props. For example, a `Button` component may have an `outerClassName` and an `innerClassName`.

```
function MyComponent({ className, textClassName }) {
  return (
    <View className={className}>
      <Text className={textClassName}>Hello, Nativewind!</Text>
    </View>
  );
}
```
