# Running On Simulator

## Starting the simulator

Once you have your React Native project initialized, you can run the following command inside the newly created project directory.

* npm
* Yarn

shell

```
npm run ios
```

shell

```
yarn ios
```

If everything is set up correctly, you should see your new app running in the iOS Simulator shortly.

## Specifying a device

You can specify the device the simulator should run with the `--simulator` flag, followed by the device name as a string. The default is `"iPhone 14"`. If you wish to run your app on an iPhone SE (3rd generation), run the following command:

* npm
* Yarn

shell

```
npm run ios -- --simulator="iPhone SE (3rd generation)"
```

shell

```
yarn ios --simulator "iPhone SE (3rd generation)"
```

The device names correspond to the list of devices available in Xcode. You can check your available devices by running `xcrun simctl list devices` from the console.

### Specifying a version of device

If you have multiple iOS versions installed, you also need to specify its appropriate version. E.g. To run your app on an iPhone 14 Pro (16.0) run the following command:

* npm
* Yarn

shell

```
npm run ios -- --simulator="iPhone 14 Pro (16.0)"
```

shell

```
yarn ios --simulator "iPhone 14 Pro (16.0)"
```

## Specifying an UDID

You can specify the device UDID returned from `xcrun simctl list devices` command. E.g. To run your app with UDID `AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA` run the following command:

* npm
* Yarn

shell

```
npm run ios -- --udid="AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA"
```

shell

```
yarn ios --udid "AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA"
```
