WIP

- [x] Live refresh appState
- [ ] Ability to edit appState and have that pushed into browser
- [ ] Ability to freeze appState updates
- [ ] Work nicely with page refreshes

This is a helper Chrome Extension for [app-state](https://www.npmjs.com/package/app-state). You need to install app-state
v0.2.0+ for it. Currently 0.2.0 is in beta (0.2.0-beta.X) on npm.

You can currently inspect your appState and watch it update in real time:

![appstate-live-update](https://cloud.githubusercontent.com/assets/1643937/12075681/b1d5caba-b13c-11e5-8c8e-54eb239bcb93.gif)

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
