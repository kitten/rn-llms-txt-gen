# remapProps

Nativewind provides the `remapProps` utility to simplify working with third-party components with multiple "style" props.

```
import { remapProps } from "nativewind";
 
/**
  ThirdPartyButton is a component with two "style" props, buttonStyle & labelStyle.
  We can use remapProps to create new props that accept Tailwind CSS's classNames.
 */
const CustomizedButton = remapProps(ThirdPartyButton, {
  buttonClass: "buttonStyle",
  labelClass: "labelStyle",
});
 
<CustomizedButton buttonClass="bg-blue-500" labelClass="text-white" />;
```

`remapProps` can be used with the following options

```
// Create a new prop and map it to an existing prop
remapProps(component, { "new-prop": "existing-prop" });
 
// Override an existing prop.
remapProps(component, { prop: true });
```
