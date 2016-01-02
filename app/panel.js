'use strict';


var jsonEditor = require('jsoneditor'),
    editor = new jsonEditor(document.querySelector('.editor'), {
        onChange : onChange
    }),
    messaging = require('./messaging');

editor.set({
    appState : 'is waiting'
});

setAppState();
messaging.createChannel(setAppState);
messaging.sendObjectToInspectedPage({ action: 'script', content: 'inserted-script.js' });


function onChange() {

    messaging.sendObjectToInspectedPage(editor.get());
}

function setAppState(appState) {
    editor.set(appState);
}