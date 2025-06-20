Style Specificity

# Style Specificity

Nativewind employs a specificity model that aligns with CSS rules, augmented to accommodate the inline-style characteristic of React Native and its existing ecosystem.

## Problem Identification

```
function MyText({ style }) {
  return <Text {...props} style={[{ color: 'black' }, style]} />;
}
 
remapProps(MyText, { className: 'style' })
 
<MyText style={{ color: 'red' }}>The text will be red on all platforms</MyText>
<MyText className="text-red-500">What color should I render as?</MyText>
```

Different platforms interpret this differently due to variations in style specificity rules, causing inconsistencies.

```
// Native has red text
<Text style={{ color: 'black' }, { color: 'red' }} />
 
// Web has black text
<Text className="text-red-500" style={{ color: 'black'}} />
```

## Specificity Order

Nativewind has defined the following order of specificity (highest to lowest):

* Styles marked as important (following CSS specificity order)
* Inline & remapped styles (applied in right-to-left order)
* className styles (following CSS specificity order)

## Concept of Remapped Styles

Remapped styles are a novel concept introduced by Nativewind, not present in traditional CSS. They refer to styles translated from a className to a prop, and applied inline. This approach maintains the order of styles, ensuring consistency with existing React Native components.

## Addressing Styling Differences

To address styling discrepancies across platforms, Nativewind allows the use of the !important modifier. This returns the styles to a specificity-based order, facilitating consistency.

## Examples

### Basic components

```
// Basic components
<Text className="text-red-500" style={{ color: 'green' }} /> // green text
<Text className="!text-red-500" style={{ color: 'green' }} /> // red text
 
// Remapped components (reusing the initial problem example)
<MyText className="text-red-500" /> // Native: red, Web: black
<MyText className="!text-red-500" /> // Both platforms: red
```
