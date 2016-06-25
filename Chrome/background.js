//chrome.browserAction.onClicked.addListener(function(tab) 
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    // chrome.tabs.executeScript(null, {file: "Yola.js"}, function(){if (chrome.runtime.lastError) {console.log("Something in wrong");}});
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);
