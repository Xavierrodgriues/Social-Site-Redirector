document.addEventListener('DOMContentLoaded', () => {
  const urlInput = document.getElementById('urlInput');
  const addBtn = document.getElementById('addBtn');
  const blockedList = document.getElementById('blockedList');

  function renderList(urls) {
    blockedList.innerHTML = '';
    urls.forEach((url, index) => {
      const li = document.createElement('li');
      li.textContent = url;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
      removeBtn.addEventListener('click', () => {
        urls.splice(index, 1);
        chrome.storage.local.set({ blockedUrls: urls });
        renderList(urls);
      });

      li.appendChild(removeBtn);
      blockedList.appendChild(li);
    });
  }

  chrome.storage.local.get('blockedUrls', (result) => {
    const urls = result.blockedUrls || [];
    renderList(urls);
  });

  addBtn.addEventListener('click', () => {
    const newUrl = urlInput.value.trim();
    if (!newUrl) return;
    chrome.storage.local.get('blockedUrls', (result) => {
      const urls = result.blockedUrls || [];
      if (!urls.includes(newUrl)) {
        urls.push(newUrl);
        chrome.storage.local.set({ blockedUrls: urls });
        renderList(urls);
        urlInput.value = '';
      }
    });
  });
});
