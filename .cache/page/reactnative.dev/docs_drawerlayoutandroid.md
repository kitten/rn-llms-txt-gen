# DrawerLayoutAndroid

React component that wraps the platform `DrawerLayout` (Android only). The Drawer (typically used for navigation) is rendered with `renderNavigationView` and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the `drawerPosition` prop and its width can be set by the `drawerWidth` prop.

## Example

* TypeScript
* JavaScript

## Reference

## Props

### View Props

Inherits View Props.

### `drawerBackgroundColor`

Specifies the background color of the drawer. The default value is `white`. If you want to set the opacity of the drawer, use rgba. Example:

```
return (
  <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)" />
);
```

* Type
  color
* Required
  No

### `drawerLockMode`

Specifies the lock mode of the drawer. The drawer can be locked in 3 states:

* unlocked (default), meaning that the drawer will respond (open/close) to touch gestures.
* locked-closed, meaning that the drawer will stay closed and not respond to gestures.
* locked-open, meaning that the drawer will stay opened and not respond to gestures. The drawer may still be opened and closed programmatically (`openDrawer`/`closeDrawer`).

- Type
  enum('unlocked', 'locked-closed', 'locked-open')
- Required
  No

### `drawerPosition`

Specifies the side of the screen from which the drawer will slide in. By default it is set to `left`.

* Type
  enum('left', 'right')
* Required
  No

### `drawerWidth`

Specifies the width of the drawer, more precisely the width of the view that be pulled in from the edge of the window.

* Type
  number
* Required
  No

### `keyboardDismissMode`

Determines whether the keyboard gets dismissed in response to a drag.

* 'none' (the default), drags do not dismiss the keyboard.
* 'on-drag', the keyboard is dismissed when a drag begins.

- Type
  enum('none', 'on-drag')
- Required
  No

### `onDrawerClose`

Function called whenever the navigation view has been closed.

* Type
  function
* Required
  No

### `onDrawerOpen`

Function called whenever the navigation view has been opened.

* Type
  function
* Required
  No

### `onDrawerSlide`

Function called whenever there is an interaction with the navigation view.

* Type
  function
* Required
  No

### `onDrawerStateChanged`

Function called when the drawer state has changed. The drawer can be in 3 states:

* idle, meaning there is no interaction with the navigation view happening at the time
* dragging, meaning there is currently an interaction with the navigation view
* settling, meaning that there was an interaction with the navigation view, and the navigation view is now finishing its closing or opening animation

- Type
  function
- Required
  No

### `renderNavigationView`

The navigation view that will be rendered to the side of the screen and can be pulled in.

* Type
  function
* Required
  Yes

### `statusBarBackgroundColor`

Make the drawer take the entire screen and draw the background of the status bar to allow it to open over the status bar. It will only have an effect on API 21+.

* Type
  color
* Required
  No

## Methods

### `closeDrawer()`

```
closeDrawer();
```

Closes the drawer.

### `openDrawer()`

```
openDrawer();
```

Opens the drawer.
