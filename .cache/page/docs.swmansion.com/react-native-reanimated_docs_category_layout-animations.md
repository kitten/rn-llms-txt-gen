Version: 3.x

# Layout Animations

## Entering/Exiting animations

Entering/Exiting animations let you animate elements when they are added to or removed from the view hierarchy.

## Keyframe animations

Keyframes are animation definition schemas that let you create complex animations. They allow you more flexibility than standard Entering and Exiting presets.

## Layout transitions

Layout transitions allows you to replace layout changes with smooth transitions. Each layout change may include changes of size and position and both of them can be animated.

## Custom animations

Custom animations give you a full control over the Entering/Exiting animations and Layout transitions. However, they tend to be hard to understand and maintain. We recommend starting with predefined Entering/Exiting, Keyframes and Layout presets first before using custom animations.

## Skipping Layout Animations

LayoutAnimationConfig is a component that lets you skip entering and exiting animations.

## List Layout Animations

itemLayoutAnimation lets you define a layout transition that's applied when list items layout changes. You can use one of the predefined transitions like LinearTransition or create your own transition.
