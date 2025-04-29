let isActive = false;

// Initialize isActive from storage (default to false)
chrome.storage.local.get(['active'], (result) => {
  isActive = result.active || false;
});

// Listen for Activate/Deactivate messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'activate') {
    isActive = true;
    chrome.storage.local.set({ active: true });
    sendResponse({ status: 'activated' });
  } else if (message.action === 'deactivate') {
    isActive = false;
    chrome.storage.local.set({ active: false });
    sendResponse({ status: 'deactivated' });
  }
});

// Intercept navigations to the specified hosts (main_frame only)
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (isActive && details.frameId === 0) {
    // Redirect to Google
    chrome.tabs.update(details.tabId, { url: "https://www.google.com" });
  }
}, {
  url: [
    { hostSuffix: 'facebook.com', schemes: ['http', 'https'] },
    { hostSuffix: 'instagram.com', schemes: ['http', 'https'] },
    { hostSuffix: 'linkedin.com', schemes: ['http', 'https'] }
  ]
});
