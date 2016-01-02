'use strict';


var jsonEditor = require('jsoneditor'),
    editor = new jsonEditor(document.querySelector('.editor')),
    messaging = require('./messaging');

editor.set({
    appState : 'is waiting'
});

retrieveAppState();
messaging.createChannel(retrieveAppState);
messaging.sendObjectToInspectedPage({ action: 'script', content: 'inserted-script.js' });

function retrieveAppState() {
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