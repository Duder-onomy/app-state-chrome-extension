function inserted() {
    console.log('inserted 1');
    window.addEventListener('change-app-state', function (event) {
        console.log('received change event from app');
        sendObjectToDevTools(event.detail);
    });

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
console.log('adding listener');
chrome.runtime.onMessage.addListener(function (message, sender) {
    debugger;
    executeScriptInPageContext(message);
});
