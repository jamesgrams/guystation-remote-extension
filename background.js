// Listen for requests to run code.
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {

    chrome.tabs.create({
        url: request.url
    }, function( tab ) {
        if( request.script ) {
            let script = request.script;
            script.unshift(""); // this will ensure a delay at the start
            var endString = "; break; } catch(err) {await new Promise(resolve => setTimeout(resolve, 3000));} }";
            script = script.join(endString + " await new Promise(resolve => setTimeout(resolve, 3000)); for(var gsi=0; gsi<4; gsi++) { try {")
            script = script.replace(endString,"") + endString;
            script = "(async function() {" + script + "})();";
            console.log(script);
            chrome.tabs.executeScript(tab.id, {
                "code": script
            });
        }
    });

    sendResponse();
} );