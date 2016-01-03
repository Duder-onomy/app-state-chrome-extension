WIP

- [x] [Live refresh appState](https://github.com/Duder-onomy/app-state-chrome-extension/issues/2)
- [x] [Ability to edit appState and have that pushed into browser](https://github.com/Duder-onomy/app-state-chrome-extension/issues/1)
- [ ] [Ability to freeze appState updates](https://github.com/Duder-onomy/app-state-chrome-extension/issues/3)
- [ ] [Work nicely with page refreshes](https://github.com/Duder-onomy/app-state-chrome-extension/issues/4)
- [ ] [Fix bug where opening and closing dev panel adds more and more listeners without removing them](https://github.com/Duder-onomy/app-state-chrome-extension/issues/5)

This is a helper Chrome Extension for [app-state](https://www.npmjs.com/package/app-state). You need to install app-state
v0.2.0-beta.2 or greater for it. Currently 0.2.0 is in beta (0.2.0-beta.X) on npm.

You can currently inspect and edit your appState and watch it update in real time 

note the 'timestamp' field:

![appstate-live-update](https://cloud.githubusercontent.com/assets/1643937/12075681/b1d5caba-b13c-11e5-8c8e-54eb239bcb93.gif)

editing:

![two-way](https://cloud.githubusercontent.com/assets/1643937/12080233/414591c2-b209-11e5-8481-093ec2fa83c2.gif)

To install it:

1. clone the repo
2. in your browser go to [chrome://extensions](chrome://extensions)
3. choose `Load unpacked extension...`
4. select the `build` directory from the cloned git repo
5. initialize your singleton appstate with `devTools : true`:

    ```javascript
    'use strict';
    
    var state = require('app-state');
    
    module.exports = state.init({
        devTools : true
    });
    ```
    
6. go to your apps page and open the Chrome dev console

![open-app-state](https://cloud.githubusercontent.com/assets/1643937/12075734/1ac3a950-b13f-11e5-8b35-6064d3b64bb4.gif)
