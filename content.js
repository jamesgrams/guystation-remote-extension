/**
 * Open a url and run a script.
 * This needs to be called within the content script to work properly.
 * externally_connectable doesn't seem to work on local ips.
 * @param {string} event.detail.url - The url to run the script on.
 * @param {Array<string>} event.detail.script - The JavaScript script to execute. Each entry contains a line to be run 3 seconds after one another.
 */
function gsExtensionRunScript( event ) {
    chrome.runtime.sendMessage({url: event.detail.url, script: event.detail.script});
}
window.addEventListener('gsExtensionRunScript', gsExtensionRunScript);

// Inject the function on the page for use.
var script = document.createElement("script");
script.textContent = "var gsExtensionRunScript = function(url, script) { window.dispatchEvent( new CustomEvent('gsExtensionRunScript', { detail: {url:url,script:script} }) ); }";
document.body.appendChild(script);