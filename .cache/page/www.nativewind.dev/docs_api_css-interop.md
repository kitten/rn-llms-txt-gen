cssInterop

# cssInterop

This function "tags" components so that when its rendered, the runtime will know to resolve the className strings into styles. You should only use this when:

* You have a custom native component
* You are using a third party component that needs the style prop to be resolved
* You are using a third party component that does not pass all its props to its children

## Usage

```
import { cssInterop } from 'nativewind';
 
// Create a new prop and map it to an existing prop
cssInterop(component, { "new-prop": "existing-prop" });
 
// Override an existing prop.
cssInterop(component, { "new-prop": true });
 
// Override an existing prop.
cssInterop(component, {
  "new-prop": {
    target: "existing-prop", // string or boolean
    nativeStyleToProp: {
      "style-attribute": "existing-prop",
    }
    }
  }
});
```

## Examples

Here is the mapping using the core component, `<TextInput />`

```
cssInterop(TextInput, {
  className: {
    target: "style", // map className->style
    nativeStyleToProp: {
      textAlign: true, // extract `textAlign` styles and pass them to the `textAlign` prop
    },
  },
  placeholderClassName: {
    target: false, // Don't pass this as a prop
    nativeStyleToProp: {
      color: "placeholderTextColor", // extract `color` and pass it to the `placeholderTextColor`prop
    },
  },
  selectionClassName: {
    target: false, // Don't pass this as a prop
    nativeStyleToProp: {
      color: "selectionColor", // extract `color` and pass it to the `selectionColor`prop
    },
  },
});
```
