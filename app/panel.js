'use strict';

var jsonEditor = require('jsoneditor'),
    editor = new jsonEditor(document.querySelector('.editor'));

chrome.devtools.inspectedWindow.eval('window.appState();', function(result, isException) {
    editor.set(result);
});
