# 1 Finger Punch Text Editor

💻 📝 The <b>Text Editor</b> for all aspiring masters.

👉💨 Strip away all those extra features so it's just <b>you and the code!</b>

✨ Get <b>Motivational Quotes</b> from the master [Bruce Lee](https://en.wikipedia.org/wiki/Bruce_Lee) himself sent to you as desktop push notifications! ✨

![Bruce Lee](/assets/icons/png/512x512.png)

“It’s not the daily increase but daily decrease. Hack away at the unessential.” — <b>Bruce Lee</b>

## Features

- <b>Native Desktop App</b>

- <b>Basic text-editor</b> functionality

- <b>drag-and-drop</b> to open files

- <b>Javascript Playground</b> Open the devtools console with `CMND + OPTION + I` (on Mac) and test/run your javascript code right in the console same as you would in a normal google chrome browser

- <b>Node.js Playground</b> You can even run node.js code in the console too! check it out; try running: `const fs = require('fs')`, `const os = require('os')` followed by `console.log(fs)`, `console.log(os)`, `os`  and `fs.readdirSync(os.homedir())` in the console. Now you have access to the fs and os objects! - And your using it to read the homedir of the operating system! Question: "But what does this MEAN???" Answer: <b>"The sky is the limit"</b>

"To hell with circumstances; I create opportunities." — <b>Bruce Lee</b>

## Built With

- javacript/node.js

- electron: creates desktop app

- electron-packager: creates release-builds for Mac, Linux and Windows systems

- Monaco-loader: the base monaco editor the core text-editor used to build Microsoft's awesome [VScode](https://github.com/Microsoft/vscode)

### How to install locally on your computer to use

1. first clone this repo

2. Then run `npm install`

3. Then you need to build/bundle the app for your system. I've already made some build scripts and saved them in the `package.json`. Select the appropriate script based on your system `npm run package-mac` (for Mac), `npm run package-win` (for Windows), `npm run package-linux` (for Linux).

4. Navigate to the newly created app in the `release-builds/` folder and open it and/or move it to your applications folder

5. <b>Enjoy!</b>

### How to install locally on your computer to develop

1. follow steps <b>1.</b> and <b>2.</b> from above section

2. Make changes to code

3. Run `npm start` to test local changes (icon won't work unless you run build)

4. Before making a PR make sure to run the build steps <b>3.</b> and <b>4.</b> from above section and ensure that all changes are correctly showing.

### Todos

- look at [push.js](https://www.npmjs.com/package/push-js) vs. [node-notifier](https://www.npmjs.com/package/node-notifier) vs. <b>search for a native electron package</b>

- build electron menu, make a "change language tab/button", "connect to github remote repo and sync/push", "save local to disk", "open multiple files in same browserWindow using tabs", "snippet manager", showMeRandom function opening one from repo

- try finding 'vs-dark' theme for monaco backgroundColor hex, loadDifferent themes for monaco editor (dracula), create own theme

- loading screen icon image animation with fade to main using [this](https://stackoverflow.com/questions/42292608/electron-loading-animation) and maybe [this](https://www.christianengvall.se/electron-white-screen-app-startup/)

- implement a way to open a new window in menu when window open or auto close application on close of browserWindow <b>bug: have to quit with command q and relaunch every time</b>

- checkout [this repo](https://github.com/felixrieseberg/introducing-electron-editor) for ideas for features and code examples for saving files, etc (check branches)

- update project repo to use [electron-forge](https://electronforge.io) cli tool (yes it'll replace your custom packager scripts but the benefits of electron-compile will be worth it)

- electron-prbuilt-compile for ESnext

- cool electron stock price tracker: https://www.youtube.com/watch?v=6_V85t64OSI 

### Bunch of Awesome electron features to checkout and implement

Auto Updater 
Dialogs
Push Notifications
ES2015
Async/Await
Mac App Store
Clipboard
Menubar Apps 
Global Shortcuts
Windows App Store 
Installer Generation
Shell Operations
WebViews 
Desktop Capturing
DevTools
Webcam 
Microphone
WebRTCP2P
`window.fetch()`
CSS custom properties
Native Notifications 
Custom Protocols
Power Save Blocking
Multi Processes
Tray Icons 
Dock Icons
Chromium Feature Flags
CrashReporter
App Menus
Context Menus 
Screen Apis
[...1323 Electron npm modules]
WebTorrent

### Aknowledgements

Special thanks to [@felixrieseberg](https://github.com/felixrieseberg) for his great presentation at infoShare 2017, which gave me both the inspiration and the starting point for this app. You can watch his talk [here](https://www.youtube.com/watch?v=7huz8Kx1nLw)

### License

[MIT License](https://en.wikipedia.org/wiki/MIT_License)