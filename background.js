let blockedUrls = [];

// Load initial list
chrome.storage.local.get('blockedUrls', (result) => {
  blockedUrls = result.blockedUrls || [];
});

// Watch for updates
chrome.storage.onChanged.addListener((changes) => {
  if (changes.blockedUrls) {
    blockedUrls = changes.blockedUrls.newValue || [];
  }
});

// Redirect if URL is blocked
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  const hostname = new URL(details.url).hostname;
  if (blockedUrls.some(blocked => hostname.includes(blocked))) {
    chrome.tabs.update(details.tabId, { url: "https://www.google.com" });
  }
}, {
  url: [{ urlMatches: 'http[s]?://.*' }]
});
