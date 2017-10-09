var userAgentApplication = new Msal.UserAgentApplication('20d34c96-396e-4bf0-a008-472ef10a5099', null, function (errorDes, token, error, tokenType) {
  // this callback is called after loginRedirect OR acquireTokenRedirect. It's not used with loginPopup,  acquireTokenPopup.
  if (error)
      console.log(error + ": " + errorDes);
  else
      console.log("Token type = " + tokenType);
});

var port = chrome.runtime.connect();

var payload = { "type": "autosavechange", "content": false };
port.postMessage(payload);

riot.mount("sidebar"); // mount the left menu
swap('save'); // show first tab
var savetab = riot.mount("save"); // mount the first tab

require.config({ paths: { 'vs': 'monaco-editor/min/vs', 'js': 'js' } });

var pnpjsconsole = null;
var fileeditorsubs = [];
var fileeditormain = null;
var fileeditoreditor;
var appcatalogeditor;
var selectedFile = null;
var pageeditorlisteners = [];
var fileeditorlisteners = {};
var bgautosave = false;
var bgautopublish = false;
// this is called from multiple tabs, so it will be here
function addscriptlink(scope, scriptsequence, scriptpath) {

    if (scriptpath == "") {

        var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
        script += " exescript(alertError, 'Script path cannot be empty!');";
        chrome.devtools.inspectedWindow.eval(script);

        return;
    }
    else if (scriptsequence == "") {

        var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
        script += " exescript(alertError, 'Sequence cannot be empty!');";
        chrome.devtools.inspectedWindow.eval(script);

        return;
    }

    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addCustomAction;
    script += " exescript(addCustomAction, '" + scope + "', '" + scriptpath + "', '" + scriptsequence + "');";
    chrome.devtools.inspectedWindow.eval(script);
}


