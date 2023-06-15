chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {

    }
})

function printOnConsole() {
    chrome.tabs.executeScript({
        file: 'scripts/printOnConsole.js'
    });
}

function downloadHistory() {
    chrome.tabs.executeScript({
        file: 'scripts/downloadJson.js'
    });
}

document.getElementById('printOnConsole').addEventListener('click', printOnConsole);
document.getElementById('downloadHistory').addEventListener('click', downloadHistory);

