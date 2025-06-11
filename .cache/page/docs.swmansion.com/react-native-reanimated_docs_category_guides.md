Version: 3.x

# Guides

## Worklets

Worklets are short-running JavaScript functions that can run on the UI thread. Reanimated uses worklets to calculate view styles and react to events on the UI thread.

## Accessibility

In this section, we will explore how Reanimated provides support for enhanced accessibility in animations, particularly through its reduced motion functionality. This feature ensures a smoother experience for users who may have motion sensitivities or prefer less movement.

## Building for Android on Windows

This article provides basic troubleshooting steps for issues that may happen when building React Native apps with Reanimated for Android devices on Windows host machine.

## Compatibility

Currently supported React Native versions (Paper)

## Contributing

Thank you for your interest in contributing to Reanimated! From triaging and commenting on issues, through extending the documentation, to reviewing and sending Pull Requests, all contributions are more than welcome.

## Debugging worklets

Due to Reanimated's unique architecture and usage of a second JS runtime, debugging

## Migration from 1.x

We wanted to make it possible to migrate from Reanimated 1 to Reanimated 2 incrementally.

## Migration from 2.x

Reanimated 3.x doesn't introduce any breaking changes between 2.x and 3.x in terms of the API. All the code you've written in Reanimated v2 API works in 3.x without any changes. However, Reanimated 3.x drops the Reanimated v1 API entirely. For the migration guide between 1.x and 2.x versions please consult Migration from 1.x to 2.x.

## Testing with Jest

Reanimated provides testing API, based on Jest. It allows user to mock web-based animations.

## Troubleshooting

Initialization issues

## Web Support

It's possible to launch Reanimated in a web browser. For that case all of the functionalities are implemented purely in JavaScript, hence the efficiency of the animations might be lower.
