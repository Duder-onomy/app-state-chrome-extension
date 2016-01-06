function inserted() {
    window.addEventListener('change-app-state', function (event) {
        sendObjectToDevTools({
            action : 'update',
            payload : event.detail
        });
    });
    window.onunload = function (e) {
        sendObjectToDevTools({
            action : 'unload'
        });
    };

}

function sendObjectToDevTools(message) {
    // The callback here can be used to execute something on receipt
    chrome.runtime.sendMessage(message);
}

inserted();

// Chrome automatically creates a background.html page for this to execute.
// This can access the inspected page via executeScript
//
// Can use:
// chrome.tabs.*
// chrome.extension.*
chrome.runtime.onMessage.addListener(function (message, sender) {
    window.dispatchEvent(new window.CustomEvent('change-app-state-from-panel', { detail : message.content } ));
});
