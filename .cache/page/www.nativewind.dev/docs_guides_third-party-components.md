A third-party component is a component that is a dependency of your application and not a core React Native component. Nativewind works by passing the `className` prop to the core React Native components. Unfortunately, its not always obvious what third-party components implement this behavior without checking their source code.

This is an example of a 3rd party component that does not pass the `className` prop down:

```
// ❌ This component will not work with Nativewind
// This component is 'picking' the props.
// Any props that are not explicitly defined will not be passed down
function ThirdPartyComponent({ style }) {
  return <View style={style} />;
}
 
// ✅ This component will work with Nativewind
function ThirdPartyComponent({ style, ...props }) {
  return <View style={style} {...props} />;
}
```

# Improving 3rd party components

If you encounter a 3rd party component 'picks' its props, you should consider submitting a pull request to modify the component so it passes all props down. Components that 'pick' their props can be very limiting, and not just for Nativewind! React Native often adds new APIs and 'picking' props prevents you from using these new features.

```
function ThirdPartyComponent({ style }) {
  return <View style={style} />;
}
 
// aria-label was added in 0.71, but this component will not work with it!
<ThirdPartyComponent aria-label="My Label" />;
```

## Handling components with multiple style props

Some components will pass the `className` prop down, but they may also have multiple style props. For example, React Native's `<FlatList />` component has a `style` and `contentContainerStyle` prop. The `remapProps` function can be used to create new `className` props for these components.

```
// This component has two 'style' props
function ThirdPartyComponent({ style, contentContainerStyle, ...props }) {
  return (
    <FlatList
      style={style}
      contentContainerStyle={contentContainerStyle}
      {...props}
    />
  );
}
 
// Call this once at the entry point of your app
remapProps(ThirdPartyComponent, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
});
 
// Now you can use the component with Nativewind
<ThirdPartyComponent className="p-5" contentContainerClassName="p-2" />;
```

Nativewind's style objects are more complex than the objected created `StyleSheet.create`. To not break third-party components, `remapProps` will pass a special object to the target prop. To the third-party component this will appear as an empty object.

## Handling components with style attribute props

Some components may require style attributes to be passed as props (for example, React Native's `<StatusBar />` component accepts a `backgroundColor` prop), or they may access the `style` prop directly.

```
/*
 * This component will not work as expected with Nativewind
 *   - borderColor will not work as it is a prop
 *   - backgroundColor will not work as it is based on the style.color value
 */
function ThirdPartyComponent({ borderColor, style, ...props }) {
  // The background color is based on the style prop
  const backgroundColor = style.color === "white" ? "black" : "white";
  return (
    <View
      style={{
        ...style,
        borderColor,
        backgroundColor,
      }}
    />
  );
}
```

To support these components, you can use the `cssInterop` function. You can think of `cssInterop` as a "className termination". It a marker that Nativewind needs to convert the `className` props into style objects.

CAUTION

Enabling the `cssInterop` for a component comes at a performance cost. Nativewind will need to resolve the styles, add event handlers, inject context, etc.

## Handling multiple props with similar properties

Sometimes a component will have multiple props that are similar.

```
function ThirdPartyComponent({ labelColor, inputColor, ...props }) {
  return (
    <>
      <Text style={color: labelColor}>Label</Text>
      <TextInput style={color: labelColor} />
    </>
  );
}
```

You could creating a new mapping for each props, but it can be cumbersome to manage multiple props with className management libraries

```
// This is possible
cssInterop(ThirdPartyComponent, {
  labelColorClassName: {
    target: false
    nativeStyleToProps: { color: 'labelColor' }
  }
  inputColorClassName: {
    target: false
    nativeStyleToProps: { color: 'inputColor' }
  }
})
 
function Wrapper() {
  // Need to create a new className for each prop
  const labelStyle = cva('color-black')
  const inputStyle = cva('color-black')
 
  return (
    <ThirdPartyComponent
      labelColorClassName={labelStyle}
      inputColorClassName={inputStyle}
    />
  )
}
```

Instead, you can use the dynamic mapping modifier to move props.

```
cssInterop(ThirdPartyComponent, {
  className: "style",
});
 
function Wrapper() {
  // Need to create a new className for each prop
  const style = cva("{}-[inputColor]:color-black {}-[labelColor]:color-black");
 
  return <ThirdPartyComponent className={style} />;
}
```

## Dynamic mapping modifier

The dynamic mapping modifier allows you to move props from one prop to another. This is useful when you have multiple props that are similar, or you want to manage the styles in a single prop.

There are two ways to use the dynamic mapping modifier:

* `{}-[<propName>]`: This will move the values the style to the `propName` prop. If a className sets multiple properties, the last property will be used.
* `{}-[<propName>]:style-property`: This will move the `propName` prop to the `style-property` of the `className` prop, but only for the specified `style-property`

Both `propName` and `style-property` can be written using dot notation to access nested properties.

```
//This class
{}-[screenOptions.tabBarTintColor]/color:color-red-500
// Will output
{ screenOptions: { tabBarTintColor: 'color-red-500' } }
```

## TypeScript

Both `remapProps` and `cssInterop` will return a typed version of your component. However, you can globally defined the types in a new declaration file.

```
declare module "<3rd party package>" {
  interface 3rdPartyComponentProps {
    customClassName?: string;
  }
}
```

**Example**

Setting global types requires in-depth knowledge of TypeScript. Your interface declaration needs to **exactly match** the 3rd party declaration (including `extends` and generics).

For example, Nativewind uses the follow types for React Native's `<FlatList />`, which uses multiple interfaces for its props, across multiple packages.

```
import {
  ScrollViewProps,
  ScrollViewPropsAndroid,
  ScrollViewPropsIOS,
  Touchable,
  VirtualizedListProps,
} from "react-native";
 
declare module "@react-native/virtualized-lists" {
  export interface VirtualizedListWithoutRenderItemProps<ItemT>
    extends ScrollViewProps {
    ListFooterComponentClassName?: string;
    ListHeaderComponentClassName?: string;
  }
}
 
declare module "react-native" {
  interface ScrollViewProps
    extends ViewProps,
      ScrollViewPropsIOS,
      ScrollViewPropsAndroid,
      Touchable {
    contentContainerClassName?: string;
    indicatorClassName?: string;
  }
  interface FlatListProps<ItemT> extends VirtualizedListProps<ItemT> {
    columnWrapperClassName?: string;
  }
  interface ViewProps {
    className?: string;
  }
}
```
