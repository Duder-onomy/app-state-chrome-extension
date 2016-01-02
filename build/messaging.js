'use strict';

module.exports = {
    createChannel : createChannel,
    sendObjectToInspectedPage : sendObjectToInspectedPage
};

// This sends an object to the background page
// where it can be relayed to the inspected page
function sendObjectToInspectedPage(message) {
    message.tabId = chrome.devtools.inspectedWindow.tabId;
    chrome.extension.sendMessage(message);
}

function createChannel(listener) {
    //Create a port with background page for continous message communication
    var port = chrome.extension.connect({
        name: 'Sample Communication' //Given a Name
    });

    // Listen to messages from the background page
    port.onMessage.addListener(listener);

}
