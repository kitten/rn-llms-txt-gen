vars()

# vars()

These page is still under construction.

## Overview

`vars` is a function that takes a dictionary of CSS variables and returns a style object that can be used in React Native components.

```
<View style={vars({ '--brand-color': 'red'})}>
  { // style: { color: 'red' } }
  <Text className="text-[--brand-color]" />
</View>
```
