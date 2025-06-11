# Height and Width

A component's height and width determine its size on the screen.

## Fixed Dimensions

The general way to set the dimensions of a component is by adding a fixed `width` and `height` to style. All dimensions in React Native are unitless, and represent density-independent pixels.

Setting dimensions this way is common for components whose size should always be fixed to a number of points and not calculated based on screen size.

caution

There is no universal mapping from points to physical units of measurement. This means that a component with fixed dimensions might not have the same physical size, across different devices and screen sizes. However, this difference is unnoticeable for most use cases.

## Flex Dimensions

Use `flex` in a component's style to have the component expand and shrink dynamically based on available space. Normally you will use `flex: 1`, which tells a component to fill all available space, shared evenly amongst other components with the same parent. The larger the `flex` given, the higher the ratio of space a component will take compared to its siblings.

info

A component can only expand to fill available space if its parent has dimensions greater than `0`. If a parent does not have either a fixed `width` and `height` or `flex`, the parent will have dimensions of `0` and the `flex` children will not be visible.

After you can control a component's size, the next step is to learn how to lay it out on the screen.

## Percentage Dimensions

If you want to fill a certain portion of the screen, but you *don't* want to use the `flex` layout, you *can* use **percentage values** in the component's style. Similar to flex dimensions, percentage dimensions require parent with a defined size.
