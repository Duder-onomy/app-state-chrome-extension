WIP

To get appState to show up, do this in the console:

```javascript
window.dispatchEvent(new CustomEvent('change-app-state', {detail:appState()}))
```
