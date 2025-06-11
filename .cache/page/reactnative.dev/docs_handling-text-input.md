# Handling Text Input

`TextInput` is a Core Component that allows the user to enter text. It has an `onChangeText` prop that takes a function to be called every time the text changed, and an `onSubmitEditing` prop that takes a function to be called when the text is submitted.

For example, let's say that as the user types, you're translating their words into a different language. In this new language, every single word is written the same way: 🍕. So the sentence "Hello there Bob" would be translated as "🍕 🍕 🍕".

In this example, we store `text` in the state, because it changes over time.

There are a lot more things you might want to do with a text input. For example, you could validate the text inside while the user types. For more detailed examples, see the React docs on controlled components, or the reference docs for TextInput.

Text input is one of the ways the user interacts with the app. Next, let's look at another type of input and learn how to handle touches.
