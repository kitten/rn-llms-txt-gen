# Images

## Static Image Resources

React Native provides a unified way of managing images and other media assets in your Android and iOS apps. To add a static image to your app, place it somewhere in your source code tree and reference it like this:

```
<Image source={require('./my-icon.png')} />
```

The image name is resolved the same way JS modules are resolved. In the example above, the bundler will look for `my-icon.png` in the same folder as the component that requires it.

You can use the `@2x` and `@3x` suffixes to provide images for different screen densities. If you have the following file structure:

```
.
├── button.js
└── img
    ├── check.png
    ├── check@2x.png
    └── check@3x.png
```

...and `button.js` code contains:

```
<Image source={require('./img/check.png')} />
```

...the bundler will bundle and serve the image corresponding to device's screen density. For example, `check@2x.png`, will be used on an iPhone 7, while`check@3x.png` will be used on an iPhone 7 Plus or a Nexus 5. If there is no image matching the screen density, the closest best option will be selected.

On Windows, you might need to restart the bundler if you add new images to your project.

Here are some benefits that you get:

1. Same system on Android and iOS.
1. Images live in the same folder as your JavaScript code. Components are self-contained.
1. No global namespace, i.e. you don't have to worry about name collisions.
1. Only the images that are actually used will be packaged into your app.
1. Adding and changing images doesn't require app recompilation, you can refresh the simulator as you normally do.
1. The bundler knows the image dimensions, no need to duplicate it in the code.
1. Images can be distributed via npm packages.

In order for this to work, the image name in `require` has to be known statically.

```
// GOOD
<Image source={require('./my-icon.png')} />;

// BAD
const icon = this.props.active
  ? 'my-icon-active'
  : 'my-icon-inactive';
<Image source={require('./' + icon + '.png')} />;

// GOOD
const icon = this.props.active
  ? require('./my-icon-active.png')
  : require('./my-icon-inactive.png');
<Image source={icon} />;
```

Note that image sources required this way include size (width, height) info for the Image. If you need to scale the image dynamically (i.e. via flex), you may need to manually set `{width: undefined, height: undefined}` on the style attribute.

## Static Non-Image Resources

The `require` syntax described above can be used to statically include audio, video or document files in your project as well. Most common file types are supported including `.mp3`, `.wav`, `.mp4`, `.mov`, `.html` and `.pdf`. See bundler defaults for the full list.

You can add support for other types by adding an `assetExts` resolver option in your Metro configuration.

A caveat is that videos must use absolute positioning instead of `flexGrow`, since size info is not currently passed for non-image assets. This limitation doesn't occur for videos that are linked directly into Xcode or the Assets folder for Android.

## Images From Hybrid App's Resources

If you are building a hybrid app (some UIs in React Native, some UIs in platform code) you can still use images that are already bundled into the app.

For images included via Xcode asset catalogs or in the Android drawable folder, use the image name without the extension:

```
<Image
  source={{uri: 'app_icon'}}
  style={{width: 40, height: 40}}
/>
```

For images in the Android assets folder, use the `asset:/` scheme:

```
<Image
  source={{uri: 'asset:/app_icon.png'}}
  style={{width: 40, height: 40}}
/>
```

These approaches provide no safety checks. It's up to you to guarantee that those images are available in the application. Also you have to specify image dimensions manually.

## Network Images

Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down. Unlike with static resources, *you will need to manually specify the dimensions of your image*. It's highly recommended that you use https as well in order to satisfy App Transport Security requirements on iOS.

```
// GOOD
<Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />

// BAD
<Image source={{uri: 'https://reactjs.org/logo-og.png'}} />
```

### Network Requests for Images

If you would like to set such things as the HTTP-Verb, Headers or a Body along with the image request, you may do this by defining these properties on the source object:

```
<Image
  source={{
    uri: 'https://reactjs.org/logo-og.png',
    method: 'POST',
    headers: {
      Pragma: 'no-cache',
    },
    body: 'Your Body goes here',
  }}
  style={{width: 400, height: 400}}
/>
```

## URI Data Images

Sometimes, you might be getting encoded image data from a REST API call. You can use the `'data:'` URI scheme to use these images. Same as for network resources, *you will need to manually specify the dimensions of your image*.

info

This is recommended for very small and dynamic images only, like icons in a list from a DB.

```
// include at least width and height!
<Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain',
  }}
  source={{
    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
  }}
/>
```

### Cache Control

In some cases you might only want to display an image if it is already in the local cache, i.e. a low resolution placeholder until a higher resolution is available. In other cases you do not care if the image is outdated and are willing to display an outdated image to save bandwidth. The `cache` source property gives you control over how the network layer interacts with the cache.

* `default`: Use the native platforms default strategy.
* `reload`: The data for the URL will be loaded from the originating source. No existing cache data should be used to satisfy a URL load request.
* `force-cache`: The existing cached data will be used to satisfy the request, regardless of its age or expiration date. If there is no existing data in the cache corresponding the request, the data is loaded from the originating source.
* `only-if-cached`: The existing cache data will be used to satisfy a request, regardless of its age or expiration date. If there is no existing data in the cache corresponding to a URL load request, no attempt is made to load the data from the originating source, and the load is considered to have failed.

```
<Image
  source={{
    uri: 'https://reactjs.org/logo-og.png',
    cache: 'only-if-cached',
  }}
  style={{width: 400, height: 400}}
/>
```

## Local Filesystem Images

See CameraRoll for an example of using local resources that are outside of `Images.xcassets`.

### Drawable resources

Android supports loading drawable resources via the `xml` file type. This means you can use vector drawables for rendering icons or shape drawables for, well, drawing shapes! You can import and use these resource types the same as any other static resource or hybrid resource. You have to specify image dimensions manually.

For static drawables that live alongside your JS code, use the `require` or `import` syntax (both work the same):

```
<Image
  source={require('./img/my_icon.xml')}
  style={{width: 40, height: 40}}
/>
```

For drawables included in the Android drawable folder (i.e. `res/drawable`), use the resource name without the extension:

```
<Image
  source={{uri: 'my_icon'}}
  style={{width: 40, height: 40}}
/>
```

The one key difference between drawable resources and other image types is that the asset must be referenced at compile-time of the Android application as Android needs to run the Android Asset Packaging Tool (AAPT) to package the asset. Binary XML, the file format AAPT creates, cannot be loaded over the network by Metro. If you change the directory or name of an asset, you will need to rebuild the Android application each time.

#### Creating XML drawable resources

Android provides comprehensive documentation on each of the supported drawable resource types in its Drawable resources guide, along with examples of raw XML files. You can utilize tools from Android Studio like the Vector Asset Studio to create vector drawables from Scalable Vector Graphic (SVG) and Adobe Photoshop Document (PSD) files.

info

You should try to avoid referencing other resources in the XML file you create if you want to treat your XML file as a static image resource (i.e. with an `import` or `require` statement). If you wish to utilize references to other drawables or attributes, like color state lists or dimension resources, you should include your drawable as a hybrid resource and import it by name.

### Best Camera Roll Image

iOS saves multiple sizes for the same image in your Camera Roll, it is very important to pick the one that's as close as possible for performance reasons. You wouldn't want to use the full quality 3264x2448 image as source when displaying a 200x200 thumbnail. If there's an exact match, React Native will pick it, otherwise it's going to use the first one that's at least 50% bigger in order to avoid blur when resizing from a close size. All of this is done by default so you don't have to worry about writing the tedious (and error prone) code to do it yourself.

## Why Not Automatically Size Everything?

*In the browser* if you don't give a size to an image, the browser is going to render a 0x0 element, download the image, and then render the image based with the correct size. The big issue with this behavior is that your UI is going to jump all around as images load, this makes for a very bad user experience. This is called Cumulative Layout Shift.

*In React Native* this behavior is intentionally not implemented. It is more work for the developer to know the dimensions (or aspect ratio) of the remote image in advance, but we believe that it leads to a better user experience. Static images loaded from the app bundle via the `require('./my-icon.png')` syntax *can be automatically sized* because their dimensions are available immediately at the time of mounting.

For example, the result of `require('./my-icon.png')` might be:

```
{"__packager_asset":true,"uri":"my-icon.png","width":591,"height":573}
```

## Source as an object

In React Native, one interesting decision is that the `src` attribute is named `source` and doesn't take a string but an object with a `uri` attribute.

```
<Image source={{uri: 'something.jpg'}} />
```

On the infrastructure side, the reason is that it allows us to attach metadata to this object. For example if you are using `require('./my-icon.png')`, then we add information about its actual location and size (don't rely on this fact, it might change in the future!). This is also future proofing, for example we may want to support sprites at some point, instead of outputting `{uri: ...}`, we can output `{uri: ..., crop: {left: 10, top: 50, width: 20, height: 40}}` and transparently support spriting on all the existing call sites.

On the user side, this lets you annotate the object with useful attributes such as the dimension of the image in order to compute the size it's going to be displayed in. Feel free to use it as your data structure to store more information about your image.

## Background Image via Nesting

A common feature request from developers familiar with the web is `background-image`. To handle this use case, you can use the `<ImageBackground>` component, which has the same props as `<Image>`, and add whatever children to it you would like to layer on top of it.

You might not want to use `<ImageBackground>` in some cases, since the implementation is basic. Refer to `<ImageBackground>`'s documentation for more insight, and create your own custom component when needed.

```
return (
  <ImageBackground source={...} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground>
);
```

Note that you must specify some width and height style attributes.

## iOS Border Radius Styles

Please note that the following corner specific, border radius style properties might be ignored by iOS's image component:

* `borderTopLeftRadius`
* `borderTopRightRadius`
* `borderBottomLeftRadius`
* `borderBottomRightRadius`

## Off-thread Decoding

Image decoding can take more than a frame-worth of time. This is one of the major sources of frame drops on the web because decoding is done in the main thread. In React Native, image decoding is done in a different thread. In practice, you already need to handle the case when the image is not downloaded yet, so displaying the placeholder for a few more frames while it is decoding does not require any code change.

## Configuring iOS Image Cache Limits

On iOS, we expose an API to override React Native's default image cache limits. This should be called from within your native AppDelegate code (e.g. within `didFinishLaunchingWithOptions`).

objectivec

```
RCTSetImageCacheLimits(4*1024*1024, 200*1024*1024);
```

**Parameters:**

|Name|Type|Required|Description|
|-|-|-|-|
|imageSizeLimit|number|Yes|Image cache size limit.|
|totalCostLimit|number|Yes|Total cache cost limit.|

In the above code example the image size limit is set to 4 MB and the total cost limit is set to 200 MB.
