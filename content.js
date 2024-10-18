chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.command === 'showAlert') {
        alert(request.message);
    }
});
