Built on Tailwind CSS

# Built on Tailwind CSS

Nativewind is built upon the Tailwind CSS style language. As such the core-concepts of Tailwind CSS apply to Nativewind. Recommend you read their guides on:

* Utility-First Fundamentals
* Reusing Styles
* Adding Custom Styles

It is also important to understand that since CSS styles are generated via the Tailwind CLI, the entire Tailwind CSS language & compiler options are available for web.

This documentation only documents whats is universally compatible, but you can always use a platform prefix to apply styles that are only support on web.

## Supporting React Native

Nativewind works in a similar manner to CSS, it can accept all classes but will only apply the styles that it support. For example, if you use `grid`, this will work on web but not on native.

Please read the differences guide for more information on some minor differences between Nativewind and Tailwind CSS.
