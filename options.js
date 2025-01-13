document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM is loaded");
    
    document.getElementById("saveBtn").addEventListener("click", function() {
      console.log("Save button clicked");
      
      const apiKey = document.getElementById("apiKey").value;
      if (apiKey) {
        chrome.storage.sync.set({ apiKey: apiKey }, function() {
          alert("API Key saved!");
        });
      } else {
        alert("Please enter a valid API Key.");
      }
    });
  
    chrome.storage.sync.get(["apiKey"], function(result) {
      if (result.apiKey) {
        document.getElementById("apiKey").value = result.apiKey;
      }
    });
  });
  