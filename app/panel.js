'use strict';

var jsonEditor = require('jsoneditor');

var editor = new jsonEditor(document.querySelector('.editor'));

editor.set({ duder : true });

chrome.devtools.inspectedWindow.eval('window.appState();', function(result, isException) {
    editor.set(result);
});
