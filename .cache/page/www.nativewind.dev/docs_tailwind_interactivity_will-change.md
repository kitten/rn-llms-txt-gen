Will Change

# Will Change

## Usage

Please refer to the documentation on the Tailwind CSS website

## Compatibility

| Class                         | Support     |
| ----------------------------- | ----------- |
| ```
will-change-auto
```      | 🌐 Web only |
| ```
will-change-scroll
```    | 🌐 Web only |
| ```
will-change-contents
```  | 🌐 Web only |
| ```
will-change-transform
``` | 🌐 Web only |

## Contributors

We are looking for contributors for the following:

### Add `will-change-transform`

When a component has a transition or animation class name it will use `react-native-reanimated`'s `Animated.createAnimatedComponent()` to make the component animated. If these class names are conditional, this will cause the component to unmount as Nativewind will conditionally render two different components.

A proposed solution is to use `will-change-transform` to force the component to be animated, even if not required.
