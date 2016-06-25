
// chrome.runtime.onMessage.addListener(
// 	  function(request, sender, sendResponse) 
// 	  {
// 		if( request.message === "clicked_browser_action" ) 
// 		{
			
// 		}
// 		// chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
// 	  });

var mapName={};
function create()
{

	chrome.storage.sync.get(/* String or Array */null, function(items)
	    {
	    	for (var key in items) {
			    if (items.hasOwnProperty(key)) {
					mapName[key]=items[key];
			    }
			}
		});
}		

function aText(obj)
{
	// console.log(obj);
	if (mapName[obj.innerHTML])
	{
		obj.innerHTML=mapName[obj.innerHTML];
	}
}

function Chat(obj)
{
	str = obj.innerHTML;
	data = str.split(">");
	data[1] = data[1].split("<");
	if (mapName[data[1][0]])
	{
		obj.innerHTML=data[0]+">"+mapName[data[1][0]]+"<"+mapName[data[1][1]]+">";
	}
}
function nodesRun(nodes,func)
{
	for (var i = nodes.length - 1; i >= 0; i--) {
		func(nodes.eq(i)[0]);
	}
}


function updateName()
{
	nodesRun($("div[class^='_55lr']"),aText);
	nodesRun($("a[class^='titlebarText']").children(),Chat);
	nodesRun($("div[class^='userContentWrapper']"),aText);
	nodesRun($("a:not(:has(*))[data-hovercard^='/ajax/hovercard/']"),aText);
	nodesRun($("div[class^='ellipsis']"),aText);
}

create();
document.addEventListener('DOMNodeInserted', function(obj) {
	updateName();
});