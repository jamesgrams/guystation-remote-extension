# GuyStation Remote Extension

This Chrome extension provides enhancements when using GuyStation on a remote computer.

Currently, it includes the ability to execute scripts after opening webpages when opening them remotely (clicking the remote media icon or pressing space).

## Setup

1. Download and extract this repo.
2. Edit the list of IP addresses under `content_scripts` in `manifest.json` to include the ip address(es) of your GuyStation(s).
3. Open Chrome or your Chromium browser.
4. Navigate to `chrome://extensions`.
5. Enable Developer mode in the top right corner.
6. Click "Load unpacked" and select the extracted folder.
7. Reload the GuyStation webpage, and you should be all set! 