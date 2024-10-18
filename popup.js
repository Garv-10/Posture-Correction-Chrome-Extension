document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('toggleBtn');

    toggleBtn.addEventListener('click', function () {
        chrome.runtime.sendMessage({ command: 'toggleReminder' });
    });
});
