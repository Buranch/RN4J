# Theming Your App

Customizing the App will be a cakewalk for you. That is due to the fact, we provide you well prepared code shape. This makes it quite simple to be able to dig through the code and hence without problems customizable.

* The theme has categorized its screens into different sections.
* The theme has a separate file inclusive of color schemes for different sections.
* The theme strictly follows programming ethics, hence modifying logo at different locations for your app becomes very simple.
* The theme also allows you to customize name for your app.

### Change Components Color

To customize any component of the App is very easy now.
Follow the [NativeBase ](https://docs.nativebase.io/Customize.html#Customize) procedure to do so.

### Change App logo

Flat App comes with its logo at login page. To change logo at login page:

* Include image of your logo named as `logo.png`
* Place it under `/images/`

### Change App Icon

* **CRNA**

  With [CRNA](https://github.com/react-community/create-react-native-app) Changing the app icon is much easier than the usual React Native App. You just need to give local path or remote url of an image you want to use as app icon to the [icon](https://docs.expo.io/versions/latest/guides/app-icons.html) attribute in `app.json`.

* **React Native**

  Want to have your own icon for your app? This is very simple with Flat App.
  Follow below given steps to customize app-icon for your app.

    * Visit [MakeAppIcon](https://makeappicon.com/) website
    * Enter the image of your choice to get logo of various dimensions
    * For iOS:
      * You should upload iOS icons to `/ios/FlatApp/Images.xcassets/AppIcon.appiconset/`
    * For Android:
    
      * You should upload Android icons along with the folders named as:
        * mipmap-hdpi
        * mipmap-mdpi
        * mipmap-xhdpi
        * mipmap-xxhdpi
      * Upload these folders to `/android/app/src/main/res/`
      * Restart packager and rebuild your app.

### Rename App

* **CRNA**

Renaming any [Create React Native App](https://github.com/react-community/create-react-native-app) is very easier.
You just need to rename [name](https://docs.expo.io/versions/latest/guides/configuration.html#name) attribute in `package.json`.

* **React Native**

  Renaming any [React Native](https://github.com/facebook/react-native) app is strenous. But Flat App proves its flexibility for this approach.
  Follow below given steps to rename your app.

    * Rename the app name in following files.
    
      * package.json
      * index.js
    
    * The process wipes out the **launchscreen** and **app icon** from your app. Hence you can restore them before moving ahead.
      * **iOS:** Restore `ios/FlatApp/Images.xcassets`
      * **Android:** Restore `/android/app/src/main/res`
    * Delete the **iOS** and **android** directories from your project.
    * Run the following commands on your terminal
    
    ```
    react-native upgrade
    react-native link
    ```
    
    * Overwrite all the files if it prompts.

### Changing the URL name for publishing with Expo

* To change the App name for the Expo url, you just need to rename the [slug](https://docs.expo.io/versions/latest/guides/configuration.html#slug) attribute in `app.json` file.
