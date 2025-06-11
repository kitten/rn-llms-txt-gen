**Platform support**

Android

iOS

macOS

TV

watchOS

Web

Windows

visionOS

If you have constraints that are not served well by a Framework, or you prefer to write your own Framework, you can create a React Native app without using a Framework.

To do so, you'll first need to set up your environment. Once you're set up, continue with the steps below to create an application and start developing.

# Step 1: Creating a new application

> If you previously installed a global `react-native-cli` package, please remove it as it may cause unexpected issues:
>
> shell
>
> ```
> npm uninstall -g react-native-cli @react-native-community/cli
> ```

You can use React Native Community CLI to generate a new project. Let's create a new React Native project called "AwesomeProject":

shell

```
npx @react-native-community/cli@latest init AwesomeProject
```

This is not necessary if you are integrating React Native into an existing application, or if you've installed Expo in your project, or if you're adding Android support to an existing React Native project (see Integration with Existing Apps). You can also use a third-party CLI to set up your React Native app, such as Ignite CLI.

info

If you are having trouble with iOS, try to reinstall the dependencies by running:

1. `cd ios` to navigate to the `ios` folder.
1. `bundle install` to install Bundler
1. `bundle exec pod install` to install the iOS dependencies managed by CocoaPods.

#### \[Optional] Using a specific version or template

If you want to start a new project with a specific React Native version, you can use the `--version` argument:

shell

```
npx @react-native-community/cli@X.XX.X init AwesomeProject --version X.XX.X
```

You can also start a project with a custom React Native template with the `--template` argument, read more here.

### Step 2: Start Metro

**Metro** is the JavaScript build tool for React Native. To start the Metro development server, run the following from your project folder:

* npm
* Yarn

shell

```
npm start
```

shell

```
yarn start
```

note

If you're familiar with web development, Metro is similar to bundlers such as Vite and webpack, but is designed end-to-end for React Native. For instance, Metro uses Babel to transform syntax such as JSX into executable JavaScript.

### Step 3: Start your application

Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

* npm
* Yarn

shell

```
npm run android
```

shell

```
yarn android
```

If everything is set up correctly, you should see your new app running in your Android emulator shortly.

This is one way to run your app - you can also run it directly from within Android Studio.

> If you can't get this to work, see the Troubleshooting page.

### Step 4: Modifying your app

Now that you have successfully run the app, let's modify it.

* Open `App.tsx` in your text editor of choice and edit some lines.
* Press the `R` key twice or select `Reload` from the Dev Menu (`Ctrl` + `M`) to see your changes!

### That's it!

Congratulations! You've successfully run and modified your first barebone React Native app.

### Now what?

* If you want to add this new React Native code to an existing application, check out the Integration guide.
* If you're curious to learn more about React Native, check out the Introduction to React Native.
