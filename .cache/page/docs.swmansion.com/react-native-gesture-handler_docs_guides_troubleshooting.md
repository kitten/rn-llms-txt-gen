# Troubleshooting

## Troubleshooting

Thanks for giving this library a try! We are sorry that you might have encountered issues though. Here is how you can seek help:

1. Search over the issues on Github. There is a chance someone had this problem in the past and it has been resolved!
2. When sure your problem hasn't been reported or was reported but the proposed solution doesn't work for you please follow our issue reporting guidelines.
3. You can try seeking help on Expo Developers Discord where we often hang out.
4. If you feel like reading the source code I highly recommend it, as this is by far the best resource and gives you the most up to date insights into how the library works and what might be causing the bug.
5. If you managed to find the solution consider contributing a fix or update our documentation to make this information easier to find for the others in the future.

## Reporting issues

This library is maintained by a very small team. Please be mindful of that when reporting issue and when it happens that we can't get back to you as soon as you might expect. We would love to fix all the problems as soon as possible, but often our time is constraint with other issues/features or projects. To make it easier for us to understand your issue and to be able to approach it sooner you can help by:

* Making sure the issue description is complete. Please include all the details about your environment (library version, RN version, device OS etc).
* It is the best to provide an example app that reproduces the issue you are having. Put it up on gist, snack or create a repo on Github – it doesn't matter as long as we can easily pull it in, run and see the issue.
* Explain how you run your repro app and what steps to take to reproduce the issue.
* Isolate your issue from other dependencies you might be using and make the repro app as minimal as possible.
* If you have spent some time figuring out the root cause of the problem you can leave a note about your findings so far.
* **Do not comment on closed issues**. It is very unlikely that we are going to notice your comment in such a case. If the issue has been closed, but the proposed solution doesn't work for you, please open a new one providing all the information necessary and linking to the solution you have tried.

## It's not a bug, it's a feature

* Changing `enabled` prop during a gesture has no effect, only when a gesture starts (that is a finger touches the screen) the `enabled` prop is taken into consideration to decide whether to extract (or not) the gesture and provide it with stream of events to analyze.
* `Native` gesture may not conform to the standard state flow due to platform specific workarounds to incorporate native views into RNGH.
* Keep in mind that `Touchables` from RNGH are rendering two additional views that may need to be styled separately to achieve desired effect (`style` and `containerStyle` props).
* In order for the gesture composition to work, all composed gestures must be attached to the same `GestureHandlerRootView`.

### Multiple instances of Gesture Handler were detected

This error usually happens when in your project there exists more than one instance of Gesture Handler. It can occur when some of your dependencies have installed Gesture Handler inside their own `node_modules` instead of using it as a peer dependency. In this case two different versions of Gesture Handler JS module try to install the same Native Module. You can resolve this problem manually by modifying your `package.json` file.

You can check which libraries are using Gesture Handler, for example, with the command:

```
npm ls react-native-gesture-handler
yarn why react-native-gesture-handler
```

If you use `yarn` you should add `resolution` property.

```
"resolutions": {
  "react-native-gesture-handler": <Gesture Handler version>
}
```

If you use `npm` you should add `overrides` property.

```
"overrides": {
  "react-native-gesture-handler": <Gesture Handler version>
}
```

After that you need to run your package manager again

```
yarn
```

or

```
npm install
```

### Automatic workletization of gesture callbacks

Reanimated's Babel plugin is setup in a way that automatically marks callbacks passed to gestures in the configuration chain as worklets. This means that as long as all your callbacks are defined in a single chain, you don't need to add a `'worklet';` directive at the beginning of the functions. Here is an example that will be automatically workletized:

```
const gesture = Gesture.Tap().onBegin(() => {
  console.log(_WORKLET);
});
```

And here are some examples that won't:

```
const gesture = Gesture.Tap();
gesture.onBegin(() => {
  console.log(_WORKLET);
});
```

```
const callback = () => {
  console.log(_WORKLET);
};
const gesture = Gesture.Tap().onBegin(callback);
```

```
const callback = () => {
  console.log(_WORKLET);
};
const gesture = Gesture.Tap();
gesture.onBegin(callback);
```

In the above cases, you should add a `"worklet";` directive at the beginning of the callbacks, like so:

```
const callback = () => {
  "worklet";
  console.log(_WORKLET);
};
const gesture = Gesture.Tap().onBegin(callback);
```

```
const callback = () => {
  "worklet";
  console.log(_WORKLET);
};
const gesture = Gesture.Tap();
gesture.onBegin(callback);
```
