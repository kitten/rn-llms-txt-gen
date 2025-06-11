# Props

Most components can be customized when they are created, with different parameters. These created parameters are called `props`, short for properties.

For example, one basic React Native component is the `Image`. When you create an image, you can use a prop named `source` to control what image it shows.

Notice the braces surrounding `{pic}` - these embed the variable `pic` into JSX. You can put any JavaScript expression inside braces in JSX.

Your own components can also use `props`. This lets you make a single component that is used in many different places in your app, with slightly different properties in each place by referring to `props` in your `render` function. Here's an example:

* TypeScript
* JavaScript

Using `name` as a prop lets us customize the `Greeting` component, so we can reuse that component for each of our greetings. This example also uses the `Greeting` component in JSX, similar to the Core Components. The power to do this is what makes React so cool - if you find yourself wishing that you had a different set of UI primitives to work with, you can invent new ones.

The other new thing going on here is the `View` component. A `View` is useful as a container for other components, to help control style and layout.

With `props` and the basic `Text`, `Image`, and `View` components, you can build a wide variety of static screens. To learn how to make your app change over time, you need to learn about State.
