Box Shadow

# Box Shadow

Nativewind uses the scaling system from react-native-shadow-generator to help generate cross platform shadows.

## Usage

Please refer to the documentation on the Tailwind CSS website

CAUTION

On native, shadows may not appear if a background color is not set

## Example

```
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
 
const StyledView = styled(View)
const StyledText = styled(Text)
 
const App = () => {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledView className="h-[50vh] items-center justify-center shadow">
        <StyledText className="text-slate-800 shadow">Try editing me! 🎉</StyledText>
      </StyledView>
    </StyledView>
  );
}
```

## Compatibility

| Class                | Support        |
| -------------------- | -------------- |
| ```
shadow
```       | ✅ Full Support |
| ```
shadow-{n}
```   | ✅ Full Support |
| ```
shadow-none
```  | ✅ Full Support |
| ```
shadow-[n]
```   | 🌐 Web only    |
| ```
shadow-inner
``` | 🌐 Web only    |
