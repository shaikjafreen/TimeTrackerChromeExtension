let activeTabId = null;
let activeStartTime = null;

chrome.tabs.onActivated.addListener(activeInfo => {
  if (activeTabId && activeStartTime) {
    trackTime(activeTabId, Date.now() - activeStartTime);
  }
  activeTabId = activeInfo.tabId;
  activeStartTime = Date.now();
});

chrome.tabs.onRemoved.addListener(tabId => {
  if (tabId === activeTabId && activeStartTime) {
    trackTime(activeTabId, Date.now() - activeStartTime);
    activeTabId = null;
    activeStartTime = null;
  }
});

async function trackTime(tabId, timeSpent) {
  chrome.tabs.get(tabId, async tab => {
    const url = tab.url;
    try {
      await fetch("http://localhost:5000/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, timeSpent: Math.floor(timeSpent / 1000) }) // convert ms to seconds
      });
    } catch (err) {
      console.error("Failed to track time:", err);
    }
  });
}
