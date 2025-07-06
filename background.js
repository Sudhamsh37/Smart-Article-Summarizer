 // Add this file to your extension
 // This sets up a listener that triggers only when the extension is installed (or updated).

chrome.runtime.onInstalled.addListener(() => {
  // This will prompt the user to enter their API key on first install
  // The result object will look like { geminiApiKey: "your-key-if-set" } or {} if not set.
  chrome.storage.sync.get(["geminiApiKey"], (result) => {
    if (!result.geminiApiKey) {
      chrome.tabs.create({
        url: "options.html",
      });
    }
  });
}); 