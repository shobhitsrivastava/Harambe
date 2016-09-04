chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'document.title="HARAMBE WAS HERE"'
  });
});