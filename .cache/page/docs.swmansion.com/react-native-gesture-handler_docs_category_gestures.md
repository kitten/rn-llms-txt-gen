Version: 2.x

# Gestures

## Gesture detector

GestureDetector is the main component of the RNGH2. It is responsible for creating and updating native gesture handlers based on the config of provided gesture. The most significant difference between it and old gesture handlers is that the GestureDetector can recognize more than one gesture at the time thanks to gesture composition. Keep in mind that GestureDetector is not compatible with the Animated API, nor with Reanimated 1.

## Gesture

Gesture is the object that allows you to create and compose gestures.

## Pan gesture

\<InteractiveExample

## Tap gesture

\<InteractiveExample

## Long press gesture

\<InteractiveExample

## Rotation gesture

\<InteractiveExample

## Pinch gesture

\<InteractiveExample

## Fling gesture

\<InteractiveExample

## Hover gesture

\<InteractiveExample

## Force touch gesture

A continuous gesture that recognizes force of a touch. It allows for tracking pressure of touch on some iOS devices.

## Native gesture

A gesture that allows other touch handling components to work within RNGH's gesture system. This streamlines interactions between gestures and the native component, allowing it to form relations with other gestures.

## Manual gesture

A plain gesture that has no specific activation criteria nor event data set. Its state has to be controlled manually using a state manager. It will not fail when all the pointers are lifted from the screen.

## Composed gestures

Composed gestures (Race, Simultaneous, Exclusive) provide a simple way of building relations between gestures. See Gesture Composition for more details.

## Touch events

Touch event attributes:

## Gesture state manager

GestureStateManager allows to manually control the state of the gestures. Please note that react-native-reanimated is required to use it, since it allows for synchronously executing methods in worklets.
