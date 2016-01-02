function inserted() {
    console.log('inserted');
    window.addEventListener('change-app-state', function () {
        console.log('received change event from app');
        sendObjectToDevTools({change : 'app-state'});
    });
}

function sendObjectToDevTools(message) {
    // The callback here can be used to execute something on receipt
    chrome.runtime.sendMessage({
        name : 'change-app-state',
        message : message
    });
}

inserted();