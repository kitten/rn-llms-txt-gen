# Custom swipeable components inside ScrollView (web)

While we recommend using our own ReanimatedSwipeable component, creating your own version of swipeable gives you more control over its behavior. Common issue here is that after creating your own swipeable component, scroll does not work. In that case, try adding touchAction set to "pan-y", like this:
