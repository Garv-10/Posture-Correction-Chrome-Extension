var isReminderActive = false;

function setReminder() {
    chrome.alarms.create('reminder', { periodInMinutes: 30 });
}

function clearReminder() {
    chrome.alarms.clear('reminder');
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.command === 'toggleReminder') {
        isReminderActive = !isReminderActive;

        if (isReminderActive) {
            setReminder();
        } else {
            clearReminder();
        }
    }
});

chrome.alarms.onAlarm.addListener(function (alarm) {
    if (alarm.name === 'reminder') {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { command: 'showAlert', message: 'Correct your posture, wear specs and drink water!' });
        });
    }
});
