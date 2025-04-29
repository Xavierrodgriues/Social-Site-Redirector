# Chrome Extension: URL Blocker

## Overview

This Chrome extension is designed to block URLs from specific websites (LinkedIn, Facebook, Instagram) and redirect the user to **Google** when they attempt to visit these sites. It helps users stay focused by preventing them from accessing distracting social media platforms.

### Features:
- Block websites such as LinkedIn, Facebook, and Instagram.
- Redirect users to **Google** when they try to visit these sites.
- Easy to enable or disable through a popup interface.

## Installation Instructions

Follow these steps to install the extension manually in Chrome:

### Step 1: Download the Extension Files
1. Go to the [GitHub repository](https://github.com/your-repo-url) (or download the ZIP file).
2. Download or clone the repository to your local computer.

### Step 2: Enable Developer Mode in Chrome
1. Open Google Chrome.
2. In the address bar, type `chrome://extensions/` and press **Enter**.
3. On the Extensions page, toggle the **Developer mode** switch to **ON** (top-right corner).

### Step 3: Load the Unpacked Extension
1. Click the **Load unpacked** button.
2. In the file dialog, navigate to the folder where you downloaded/cloned the extension files.
3. Select the folder containing the extension files (e.g., `URL-Blocker`).

### Step 4: Enable the Extension
1. Once loaded, you should see the extension icon in your Chrome toolbar.
2. Click the extension icon to open the popup and activate or deactivate the URL blocker.

### Step 5: Usage
- When activated, the extension will block any attempts to visit **LinkedIn**, **Facebook**, or **Instagram**, and automatically redirect the user to **Google**.
- You can **activate** or **deactivate** the extension at any time via the popup interface.

## How It Works
- The extension uses Chrome's `chrome.webNavigation` API to listen for navigation requests.
- When a user tries to visit a blocked URL, the extension will intercept the request and redirect them to **Google**.
- Users can control the functionality via the popup interface, which allows them to activate or deactivate the blocking feature.

## Technologies Used
- **JavaScript**: For the core functionality.
- **Chrome Extensions API**: Specifically `chrome.webNavigation`, `chrome.runtime`, and `chrome.storage` for managing background tasks and storing settings.
- **HTML/CSS**: For the popup user interface.

## Contributing

Feel free to contribute to this project! If you encounter any issues or have suggestions for improvements, please create an issue or submit a pull request.

### To Contribute:
1. Fork the repository.
2. Clone your fork to your local machine.
3. Make changes, fix bugs, or add features.
4. Submit a pull request with a description of what you’ve done.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
If you have any questions or need support, feel free to reach out to me via [LinkedIn](https://www.linkedin.com/in/your-profile) or email at [your-email@example.com].

---

Thank you for using this extension!
