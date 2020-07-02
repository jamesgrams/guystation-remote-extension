// Listen for requests to run code.
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {

    chrome.tabs.create({
        url: request.url
    }, function( tab ) {
        if( request.script ) {
            let script = request.script;
            script.unshift(""); // this will ensure a delay at the start
            script = script.join("; await new Promise(resolve => setTimeout(resolve, 3000));")
            script = "(async function() {" + script + "})();";
            console.log(script);
            chrome.tabs.executeScript(tab.id, {
                "code": script
            });
        }
    });

    sendResponse();
} );