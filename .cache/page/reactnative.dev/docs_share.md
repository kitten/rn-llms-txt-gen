# Share

## Example

* TypeScript
* JavaScript

## Reference

## Methods

```
static share(content: ShareContent, options?: ShareOptions);
```

Open a dialog to share text content.

In iOS, returns a Promise which will be invoked with an object containing `action` and `activityType`. If the user dismissed the dialog, the Promise will still be resolved with action being `Share.dismissedAction` and all the other keys being undefined. Note that some share options will not appear or work on the iOS simulator.

In Android, returns a Promise which will always be resolved with action being `Share.sharedAction`.

**Properties:**

|Name|Type|Description|
|-|-|-|
|contentRequired|object|`message` - a message to share `url` - a URL to shareiOS `title` - title of the messageAndroidAt least one of `url` and `message` is required.|
|options|object|`dialogTitle`Android `excludedActivityTypes`iOS `subject` - a subject to share via emailiOS `tintColor`iOS `anchor` - the node to which the action sheet should be anchored (used for iPad)iOS|

## Properties

### `sharedAction`

```
static sharedAction: 'sharedAction';
```

The content was successfully shared.

### `dismissedAction`iOS

```
static dismissedAction: 'dismissedAction';
```

The dialog has been dismissed.
