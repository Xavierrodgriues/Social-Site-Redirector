document.addEventListener('DOMContentLoaded', () => {
    const activateBtn = document.getElementById('activateBtn');
    const deactivateBtn = document.getElementById('deactivateBtn');
  
    // Initialize button states based on current active flag
    chrome.storage.local.get('active', (result) => {
      if (result.active) {
        activateBtn.disabled = true;
        deactivateBtn.disabled = false;
      } else {
        activateBtn.disabled = false;
        deactivateBtn.disabled = true;
      }
    });
  
    // Activate button click
    activateBtn.addEventListener('click', () => {
      chrome.runtime.sendMessage({ action: 'activate' }, (response) => {
        if (response.status === 'activated') {
          activateBtn.disabled = true;
          deactivateBtn.disabled = false;
        }
      });
    });
  
    // Deactivate button click
    deactivateBtn.addEventListener('click', () => {
      chrome.runtime.sendMessage({ action: 'deactivate' }, (response) => {
        if (response.status === 'deactivated') {
          activateBtn.disabled = false;
          deactivateBtn.disabled = true;
        }
      });
    });
  });
  