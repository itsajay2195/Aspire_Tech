# My Universal React Project

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>


## 🚀 How to use

- Install packages with `yarn` or `npm install`.
  - If you have native iOS code run `npx pod-install`
- Run `yarn start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)
  - Web: Any web browser


## 🚀 How to run on emulator (iOS and Android)

1. iOS(macOS):
  - Go to your project directory.
  - Run `yarn iOS` will start the expo developer tools on a port from the browser window.
  - In Split seconds you will see expo automatically open the app in the simulator.
  - On the first instance expo will be installing the "Expo Go" app on the simulator.
  - After the successful installation of "Expo Go" you will see the app(project) in the simulator.
  - If expo fails to open/ recognize the iOS simaltor on your mac, you can go to the browser window on which expo bundler is present and manually run the app on the simulator by clicking "run on iOS simulator".

2. Android:
  - Go to your project directory.
  - Run `yarn android` will start the the expo developer tools on a port from the browser window.
  - You will have to keep the andorid emulator open and running.
  - Once the emulator is ready, you can go to the browser window on which expo bundler is present and manually run the app on the emulator by clicking "run on Android emulator".
  - On the first instance expo will be installing the "Expo Go" app on the emulator.
  - After the successful installation of "Expo Go" you will see the app(project) in the emulator.

- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)
  - Web: Any web browser

## Running the app on real device(Android and iOS)
- install the "Expo Go" on your real device from the app/ play store.
- upon installation of "Expo Go", visit the project link and scan the qr code.
- The app will be up and running.
  project url: https://expo.dev/@ajaycnv/aspireFintech


## About the project

- The project is built using Expo[React Native].
- React-redux has been used for state management. 
- redux-saga has been used for the middleware
- the library "axios" has been used for network calls"

- ## Mirage
    - The mock API's are implemented using the mirage js libarary. The api and its response can be manipulated by navigating to the folder "src/api/MockServer.js" from root directory.

## In app details
- The app basically has 3 screens.
  - The first screen is the Debit screen. The User by default lands on this screen upon opening the app.
  - The second screen is the Set Weekly Limit screen, to which the user is navigated upon toggling the "Weekly Time Spent Toggle".
  - The third screen is the Payment screen, in which the user's transations will be displayed.


## Debit Screen 
- The Debit screen has 4 sections.
  - The first section basically displays user's current wallet balance.
  - The second section displays the user card info with an option to hide or show the card numbers. The card component comes attached on top the sliding panel.
  - The third component is the sliding panel which gives access to other feature of the app. For now, "set weekly limit" is only feature that will navigate the user
    to the set weekly limit screen. 
  - The "Set Weekly Limit" toogle will stay enabled if and if there are any weekly limit is set.  
  - The fourth section is the Bottom tab navigator. The bottom tab navigator has 5 tabs. All of the tabs are functional.
  - A spent Progress Bar will be displayed  below the card section of the sliding panel, if there are any weekly limit is set. An ratio of "Total amount spent now | weekly spending limit" will be displayed as the title of the progress bar.
  ## Key and unique functonalites added to the screen apart from the design requriment.
     # 1. Custom Made dynamic progress bar.
        - A spent progress bar is being displayed depicting the total amount spent out the "weekly spent limit".
        - The progress percentage is dynamic and keeps varying based on the amount spent.
    

## Set Weekly Limit Screen 
- This page has a header component with a go back option, the user can navigate back to the Debit screen on clicking the go back option.
- The page has a text input which allows the user to set the weekly limit.
- The auto-populate tags with values defined are displyaed, which on clicking fills the weekly spent limit with appropriate value
- At the bottom of the page is a button which allows the user to save the weekly limit. The save button is disabled by default. 
- The Save button gets enabled if there any valid input on the set limit text input.


## Set Weekly Limit Screen 
- This page will display the user's transacation
- This page contains a scrollable list in which each list item contains "Description", "timpestamp"  and total value of the transaction.








