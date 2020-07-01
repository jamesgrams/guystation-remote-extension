/**
 * Open a url and run a script.
 * This needs to be called within the content script to work properly.
 * externally_connectable doesn't seem to work on local ips.
 * @param {string} event.detail.url - The url to run the script on.
 * @param {string} event.detail.code - The JavaScript code to execute.
 */
function gsExtensionRunScript( event ) {
    chrome.runtime.sendMessage({url: event.detail.url, code: event.detail.code});
}
window.addEventListener('gsExtensionRunScript', gsExtensionRunScript);

// Inject the function on the page for use.
var script = document.createElement("script");
script.textContent = "var gsExtensionRunScript = function(url, code) { window.dispatchEvent( new CustomEvent('gsExtensionRunScript', { detail: {url:url,code:code} }) ); }";
document.body.appendChild(script);