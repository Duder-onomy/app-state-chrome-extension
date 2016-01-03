'use strict';

// This is the dev panel that you see

var jsonEditor = require('jsoneditor'),
    _ = require('lodash'),
    editor = new jsonEditor(document.querySelector('.editor'), {
        onChange : _.debounce(onChange, 1000),
        name : 'AppState',
        modes : ['tree', 'view', 'form', 'code', 'text']
    }),
    messaging = require('./messaging');

editor.set({
    appState : 'waiting'
});

getAppState();

messaging.createChannel(setAppState);
// Inject a page into the "regular" web page that will function as a communication hub between the regular page and the panel
messaging.sendObjectToInspectedPage({ action: 'script', content: 'inserted-script.js' });

function onChange() {
    messaging.sendObjectToInspectedPage({ action: 'update-app-state', content: editor.get()});
}

// Pulling appState
function getAppState() {
    chrome.devtools.inspectedWindow.eval('window.appState();', function(result, isException) {
        if (isException) {
            result = {
                appState : 'retrieval error',
                error : result
            };
        }
        editor.set(result);
    });
}

// appState pushed
function setAppState(appState) {
    editor.set(appState);
    editor.expandAll();
}
