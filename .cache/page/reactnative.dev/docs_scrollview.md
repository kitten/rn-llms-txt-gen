# ScrollView

Component that wraps platform ScrollView while providing integration with touch locking "responder" system.

Keep in mind that ScrollViews must have a bounded height in order to work, since they contain unbounded-height children into a bounded container (via a scroll interaction). In order to bound the height of a ScrollView, either set the height of the view directly (discouraged) or make sure all parent views have bounded height. Forgetting to transfer `{flex: 1}` down the view stack can lead to errors here, which the element inspector makes quick to debug.

Doesn't yet support other contained responders from blocking this scroll view from becoming the responder.

`<ScrollView>` vs `<FlatList>` - which one to use?

`ScrollView` renders all its react child components at once, but this has a performance downside.

Imagine you have a very long list of items you want to display, maybe several screens worth of content. Creating JS components and native views for everything all at once, much of which may not even be shown, will contribute to slow rendering and increased memory usage.

This is where `FlatList` comes into play. `FlatList` renders items lazily, when they are about to appear, and removes items that scroll way off screen to save memory and processing time.

`FlatList` is also handy if you want to render separators between your items, multiple columns, infinite scroll loading, or any number of other features it supports out of the box.

## Example

## Reference

## Props

### View Props

Inherits View Props.

### `StickyHeaderComponent`

A React Component that will be used to render sticky headers, should be used together with `stickyHeaderIndices`. You may need to set this component if your sticky header uses custom transforms, for example, when you want your list to have an animated and hidable header. If a component has not been provided, the default `ScrollViewStickyHeader` component will be used.

* Type
  component, element

### `alwaysBounceHorizontal`iOS

When true, the scroll view bounces horizontally when it reaches the end even if the content is smaller than the scroll view itself.

* Type
  bool
* Default
  `true`
   when 
  `horizontal={true}`
  ***
  `false`
   otherwise

### `alwaysBounceVertical`iOS

When true, the scroll view bounces vertically when it reaches the end even if the content is smaller than the scroll view itself.

* Type
  bool
* Default
  `false`
   when 
  `vertical={true}`
  ***
  `true`
   otherwise

### `automaticallyAdjustContentInsets`iOS

Controls whether iOS should automatically adjust the content inset for scroll views that are placed behind a navigation bar or tab bar/toolbar.

* Type
  bool
* Default
  `true`

### `automaticallyAdjustKeyboardInsets`iOS

Controls whether the ScrollView should automatically adjust its `contentInset` and `scrollViewInsets` when the Keyboard changes its size.

* Type
  bool
* Default
  `false`

### `automaticallyAdjustsScrollIndicatorInsets`iOS

Controls whether iOS should automatically adjust the scroll indicator insets. See Apple's documentation on the property.

* Type
  bool
* Default
  `true`

### `bounces`iOS

When true, the scroll view bounces when it reaches the end of the content if the content is larger than the scroll view along the axis of the scroll direction. When `false`, it disables all bouncing even if the `alwaysBounce*` props are `true`.

* Type
  bool
* Default
  `true`

### `bouncesZoom`iOS

When `true`, gestures can drive zoom past min/max and the zoom will animate to the min/max value at gesture end, otherwise the zoom will not exceed the limits.

* Type
  bool
* Default
  `true`

### `canCancelContentTouches`iOS

When `false`, once tracking starts, won't try to drag if the touch moves.

* Type
  bool
* Default
  `true`

### `centerContent`iOS

When `true`, the scroll view automatically centers the content when the content is smaller than the scroll view bounds; when the content is larger than the scroll view, this property has no effect.

* Type
  bool
* Default
  `false`

### `contentContainerStyle`

These styles will be applied to the scroll view content container which wraps all of the child views. Example:

```
return (
  <ScrollView contentContainerStyle={styles.contentContainer}>
  </ScrollView>
);
...
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  }
});
```

* Type
  View Style

### `contentInset`iOS

The amount by which the scroll view content is inset from the edges of the scroll view.

* Type
  object: 
  `{top: number, left: number, bottom: number, right: number}`
* Default
  `{top: 0, left: 0, bottom: 0, right: 0}`

### `contentInsetAdjustmentBehavior`iOS

This property specifies how the safe area insets are used to modify the content area of the scroll view. Available on iOS 11 and later.

* Type
  enum(
  `'automatic'`
  , 
  `'scrollableAxes'`
  , 
  `'never'`
  , 
  `'always'`
  )
* Default
  `'never'`

### `contentOffset`

Used to manually set the starting scroll offset.

* Type
  Point
* Default
  `{x: 0, y: 0}`

### `decelerationRate`

A floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger. You may also use string shortcuts `"normal"` and `"fast"` which match the underlying iOS settings for `UIScrollViewDecelerationRateNormal` and `UIScrollViewDecelerationRateFast` respectively.

* `'normal'` 0.998 on iOS, 0.985 on Android.
* `'fast'`, 0.99 on iOS, 0.9 on Android.

- Type
  enum(
  `'fast'`
  , 
  `'normal'`
  ), number
- Default
  `'normal'`

### `directionalLockEnabled`iOS

When true, the ScrollView will try to lock to only vertical or horizontal scrolling while dragging.

* Type
  bool
* Default
  `false`

### `disableIntervalMomentum`

When true, the scroll view stops on the next index (in relation to scroll position at release) regardless of how fast the gesture is. This can be used for pagination when the page is less than the width of the horizontal ScrollView or the height of the vertical ScrollView.

* Type
  bool
* Default
  `false`

### `disableScrollViewPanResponder`

When true, the default JS pan responder on the ScrollView is disabled, and full control over touches inside the ScrollView is left to its child components. This is particularly useful if `snapToInterval` is enabled, since it does not follow typical touch patterns. Do not use this on regular ScrollView use cases without `snapToInterval` as it may cause unexpected touches to occur while scrolling.

* Type
  bool
* Default
  `false`

### `endFillColor`Android

Sometimes a scrollview takes up more space than its content fills. When this is the case, this prop will fill the rest of the scrollview with a color to avoid setting a background and creating unnecessary overdraw. This is an advanced optimization that is not needed in the general case.

* Type
  color

### `fadingEdgeLength`Android

Fades out the edges of the scroll content.

If the value is greater than `0`, the fading edges will be set accordingly to the current scroll direction and position, indicating if there is more content to show.

* Type
  number
* Default
  `0`

### `horizontal`

When `true`, the scroll view's children are arranged horizontally in a row instead of vertically in a column.

* Type
  bool
* Default
  `false`

### `indicatorStyle`iOS

The style of the scroll indicators.

* `'default'` same as `black`.
* `'black'`, scroll indicator is `black`. This style is good against a light background.
* `'white'`, scroll indicator is `white`. This style is good against a dark background.

- Type
  enum(
  `'default'`
  , 
  `'black'`
  , 
  `'white'`
  )
- Default
  `'default'`

### `invertStickyHeaders`

If sticky headers should stick at the bottom instead of the top of the ScrollView. This is usually used with inverted ScrollViews.

* Type
  bool
* Default
  `false`

### `keyboardDismissMode`

Determines whether the keyboard gets dismissed in response to a drag.

* `'none'`, drags do not dismiss the keyboard.
* `'on-drag'`, the keyboard is dismissed when a drag begins.

**iOS Only**

* `'interactive'`, the keyboard is dismissed interactively with the drag and moves in synchrony with the touch, dragging upwards cancels the dismissal. On Android this is not supported and it will have the same behavior as `'none'`.

- Type
  enum(
  `'none'`
  , 
  `'on-drag'`
  )
  Android
  ***
  enum(
  `'none'`
  , 
  `'on-drag'`
  , 
  `'interactive'`
  )
  iOS
- Default
  `'none'`

### `keyboardShouldPersistTaps`

Determines when the keyboard should stay visible after a tap.

* `'never'` tapping outside of the focused text input when the keyboard is up dismisses the keyboard. When this happens, children won't receive the tap.
* `'always'`, the keyboard will not dismiss automatically, and the scroll view will not catch taps, but children of the scroll view can catch taps.
* `'handled'`, the keyboard will not dismiss automatically when the tap was handled by children of the scroll view (or captured by an ancestor).
* `false`, ***deprecated***, use `'never'` instead
* `true`, ***deprecated***, use `'always'` instead

- Type
  enum(
  `'always'`
  , 
  `'never'`
  , 
  `'handled'`
  , 
  `false`
  , 
  `true`
  )
- Default
  `'never'`

### `maintainVisibleContentPosition`

When set, the scroll view will adjust the scroll position so that the first child that is currently visible and at or beyond `minIndexForVisible` will not change position. This is useful for lists that are loading content in both directions, e.g. a chat thread, where new messages coming in might otherwise cause the scroll position to jump. A value of 0 is common, but other values such as 1 can be used to skip loading spinners or other content that should not maintain position.

The optional `autoscrollToTopThreshold` can be used to make the content automatically scroll to the top after making the adjustment if the user was within the threshold of the top before the adjustment was made. This is also useful for chat-like applications where you want to see new messages scroll into place, but not if the user has scrolled up a ways and it would be disruptive to scroll a bunch.

Caveat 1: Reordering elements in the scrollview with this enabled will probably cause jumpiness and jank. It can be fixed, but there are currently no plans to do so. For now, don't re-order the content of any ScrollViews or Lists that use this feature.

Caveat 2: This uses `contentOffset` and `frame.origin` in native code to compute visibility. Occlusion, transforms, and other complexity won't be taken into account as to whether content is "visible" or not.

* Type
  object: 
  `{minIndexForVisible: number, autoscrollToTopThreshold: number}`

### `maximumZoomScale`iOS

The maximum allowed zoom scale.

* Type
  number
* Default
  `1.0`

### `minimumZoomScale`iOS

The minimum allowed zoom scale.

* Type
  number
* Default
  `1.0`

### `nestedScrollEnabled`Android

Enables nested scrolling for Android API level 21+.

* Type
  bool
* Default
  `false`

### `onContentSizeChange`

Called when scrollable content view of the ScrollView changes.

The handler function will receive two parameters: the content width and content height `(contentWidth, contentHeight)`.

It's implemented using onLayout handler attached to the content container which this ScrollView renders.

* Type
  function

### `onMomentumScrollBegin`

Called when the momentum scroll starts (scroll which occurs as the ScrollView starts gliding).

* Type
  function

### `onMomentumScrollEnd`

Called when the momentum scroll ends (scroll which occurs as the ScrollView glides to a stop).

* Type
  function

### `onScroll`

Fires at most once per frame during scrolling. The event has the following shape (all values are numbers):

js

```
{
  nativeEvent: {
    contentInset: {bottom, left, right, top},
    contentOffset: {x, y},
    contentSize: {height, width},
    layoutMeasurement: {height, width},
    zoomScale
  }
}
```

* Type
  function

### `onScrollBeginDrag`

Called when the user begins to drag the scroll view.

* Type
  function

### `onScrollEndDrag`

Called when the user stops dragging the scroll view and it either stops or begins to glide.

* Type
  function

### `onScrollToTop`iOS

Fires when the scroll view scrolls to top after the status bar has been tapped.

* Type
  function

### `overScrollMode`Android

Used to override default value of overScroll mode.

Possible values:

* `'auto'` - Allow a user to over-scroll this view only if the content is large enough to meaningfully scroll.
* `'always'` - Always allow a user to over-scroll this view.
* `'never'` - Never allow a user to over-scroll this view.

- Type
  enum(
  `'auto'`
  , 
  `'always'`
  , 
  `'never'`
  )
- Default
  `'auto'`

### `pagingEnabled`

When true, the scroll view stops on multiples of the scroll view's size when scrolling. This can be used for horizontal pagination.

* Type
  bool
* Default
  `false`

### `persistentScrollbar`Android

Causes the scrollbars not to turn transparent when they are not in use.

* Type
  bool
* Default
  `false`

### `pinchGestureEnabled`iOS

When true, ScrollView allows use of pinch gestures to zoom in and out.

* Type
  bool
* Default
  `true`

### `refreshControl`

A RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView. Only works for vertical ScrollViews (`horizontal` prop must be `false`).

See RefreshControl.

* Type
  element

### `removeClippedSubviews`

Experimental: When `true`, offscreen child views (whose `overflow` value is `hidden`) are removed from their native backing superview when offscreen. This can improve scrolling performance on long lists.

* Type
  bool
* Default
  `false`

### `scrollEnabled`

When false, the view cannot be scrolled via touch interaction.

Note that the view can always be scrolled by calling `scrollTo`.

* Type
  bool
* Default
  `true`

### `scrollEventThrottle`

Limits how often scroll events will be fired while scrolling, specified as a time interval in ms. This may be useful when expensive work is performed in response to scrolling. Values ≤ `16` will disable throttling, regardless of the refresh rate of the device.

* Type
  number
* Default
  `0`

### `scrollIndicatorInsets`iOS

The amount by which the scroll view indicators are inset from the edges of the scroll view. This should normally be set to the same value as the `contentInset`.

* Type
  object: 
  `{top: number, left: number, bottom: number, right: number}`
* Default
  `{top: 0, left: 0, bottom: 0, right: 0}`

### `scrollPerfTag`Android

Tag used to log scroll performance on this scroll view. Will force momentum events to be turned on (see sendMomentumEvents). This doesn't do anything out of the box and you need to implement a custom native FpsListener for it to be useful.

* Type
  string

### `scrollToOverflowEnabled`iOS

When `true`, the scroll view can be programmatically scrolled beyond its content size.

* Type
  bool
* Default
  `false`

### `scrollsToTop`iOS

When `true`, the scroll view scrolls to top when the status bar is tapped.

* Type
  bool
* Default
  `true`

### `showsHorizontalScrollIndicator`

When `true`, shows a horizontal scroll indicator.

* Type
  bool
* Default
  `true`

### `showsVerticalScrollIndicator`

When `true`, shows a vertical scroll indicator.

* Type
  bool
* Default
  `true`

### `snapToAlignment`

When `snapToInterval` is set, `snapToAlignment` will define the relationship of the snapping to the scroll view.

Possible values:

* `'start'` will align the snap at the left (horizontal) or top (vertical).
* `'center'` will align the snap in the center.
* `'end'` will align the snap at the right (horizontal) or bottom (vertical).

- Type
  enum(
  `'start'`
  , 
  `'center'`
  , 
  `'end'`
  )
- Default
  `'start'`

### `snapToEnd`

Use in conjunction with `snapToOffsets`. By default, the end of the list counts as a snap offset. Set `snapToEnd` to false to disable this behavior and allow the list to scroll freely between its end and the last `snapToOffsets` offset.

* Type
  bool
* Default
  `true`

### `snapToInterval`

When set, causes the scroll view to stop at multiples of the value of `snapToInterval`. This can be used for paginating through children that have lengths smaller than the scroll view. Typically used in combination with `snapToAlignment` and `decelerationRate="fast"`. Overrides less configurable `pagingEnabled` prop.

* Type
  number

### `snapToOffsets`

When set, causes the scroll view to stop at the defined offsets. This can be used for paginating through variously sized children that have lengths smaller than the scroll view. Typically used in combination with `decelerationRate="fast"`. Overrides less configurable `pagingEnabled` and `snapToInterval` props.

* Type
  array of number

### `snapToStart`

Use in conjunction with `snapToOffsets`. By default, the beginning of the list counts as a snap offset. Set `snapToStart` to `false` to disable this behavior and allow the list to scroll freely between its start and the first `snapToOffsets` offset.

* Type
  bool
* Default
  `true`

### `stickyHeaderHiddenOnScroll`

When set to `true`, sticky header will be hidden when scrolling down the list, and it will dock at the top of the list when scrolling up.

* Type
  bool
* Default
  `false`

### `stickyHeaderIndices`

An array of child indices determining which children get docked to the top of the screen when scrolling. For example, passing `stickyHeaderIndices={[0]}` will cause the first child to be fixed to the top of the scroll view. You can also use like \[x,y,z] to make multiple items sticky when they are at the top. This property is not supported in conjunction with `horizontal={true}`.

* Type
  array of number

### `zoomScale`iOS

The current scale of the scroll view content.

* Type
  number
* Default
  `1.0`

## Methods

### `flashScrollIndicators()`

```
flashScrollIndicators();
```

Displays the scroll indicators momentarily.

### `scrollTo()`

```
scrollTo(
  options?: {x?: number, y?: number, animated?: boolean} | number,
  deprecatedX?: number,
  deprecatedAnimated?: boolean,
);
```

Scrolls to a given x, y offset, either immediately, with a smooth animation.

**Example:**

`scrollTo({x: 0, y: 0, animated: true})`

> Note: The weird function signature is due to the fact that, for historical reasons, the function also accepts separate arguments as an alternative to the options object. This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.

### `scrollToEnd()`

```
scrollToEnd(options?: {animated?: boolean});
```

If this is a vertical ScrollView scrolls to the bottom. If this is a horizontal ScrollView scrolls to the right.

Use `scrollToEnd({animated: true})` for smooth animated scrolling, `scrollToEnd({animated: false})` for immediate scrolling. If no options are passed, `animated` defaults to `true`.
