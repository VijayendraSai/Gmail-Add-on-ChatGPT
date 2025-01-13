chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "openOptionsPage") {
    chrome.runtime.openOptionsPage();  // Opens the options page when requested
  }
});
