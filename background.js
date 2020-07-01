// Listen for requests to run code.
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {

    chrome.tabs.create({
        url: request.url
    }, function( tab ) {
        chrome.tabs.executeScript(tab.id, {
            "code": request.code
        });
    });

    sendResponse();
} );