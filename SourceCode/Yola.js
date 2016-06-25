function apply(){
	// document.getElementById('Remove').addEventListener('click', function(e) {
	// 	console.log(e.target);
	//     Remove(obj);
	// });

	var Add = document.getElementById('add');
	Add.addEventListener('click', function(e) {
	    add();
	});

	var Crt = document.getElementById('create');
	Crt.addEventListener('click', function(e) {
	    create();
	});
}
function create()
{
	data={};
	chrome.storage.sync.clear();
    Trow 		= document.getElementsByTagName("tr");
    for (var i 	= Trow.length-2; i >= 1; i--)
    {
    	inputs 	= Trow[i].getElementsByTagName("input");
    	Name 	= String(inputs[0].value);
    	Nick 	= String(inputs[1].value);
    	if(Name!="")
    	{
    	data[Name]=Nick;
        chrome.storage.sync.set(data, function() {});
    	}
    }
    chrome.storage.sync.get(/* String or Array */null, function(items)
    {
		console.log(items);
	});
}

function Remove(e)
{
	e.closest('tr').remove();
	data = document.getElementById('Remove');
	if(data==null)
	{
		add();
	}
}
function add() 
{

	var node 	= document.createElement("tr");                 // Create a <li> node
	var td 		= document.createElement("td");
	var input 	= document.createElement("input");
	input.setAttribute("type","Text");
	input.setAttribute("class","col-sm-12");
	input.setAttribute("placeholder","Real Name"); 
	td.appendChild(input);
	node.appendChild(td);
	var td 		= document.createElement("td");
	var input 	= document.createElement("input");
	input.setAttribute("type","Text");
	input.setAttribute("class","col-sm-12");
	input.setAttribute("placeholder","Nick Name"); 
	td.appendChild(input);
	node.appendChild(td);
	var td 		= document.createElement("td");
	var button 	= document.createElement("button");
	button.setAttribute("class","col-sm-6");
	button.setAttribute("id","Remove;");
	button.innerHTML="Remove";
	td.appendChild(button);
	node.appendChild(td);
	button.addEventListener('click', function(e){Remove(e.target);});
	document.getElementById("Data").appendChild(node);
}
function addData(key,data) 
{

	var node 	= document.createElement("tr");                 // Create a <li> node
	var td 		= document.createElement("td");
	var input 	= document.createElement("input");
	input.setAttribute("type","Text");
	input.setAttribute("class","col-sm-12");
	input.setAttribute("placeholder","Real Name");
	input.setAttribute("value",key); 
	td.appendChild(input);
	node.appendChild(td);
	var td 		= document.createElement("td");
	var input 	= document.createElement("input");
	input.setAttribute("type","Text");
	input.setAttribute("class","col-sm-12");
	input.setAttribute("placeholder","Nick Name");
	input.setAttribute("value",data); 
	td.appendChild(input);
	node.appendChild(td);
	var td 		= document.createElement("td");
	var button 	= document.createElement("button");
	button.setAttribute("class","col-sm-6");
	button.setAttribute("id","Remove");
	button.innerHTML="Remove";
	td.appendChild(button);
	node.appendChild(td);
	button.addEventListener('click', function(e){Remove(e.target);});
	document.getElementById("Data").appendChild(node);
}
document.addEventListener('DOMContentLoaded', function() 
{
	flag = 1
	chrome.storage.sync.get(/* String or Array */null, function(items)
	    {
	    	for (var key in items) {
			    if (items.hasOwnProperty(key)) {
			    	flag=0; 
					addData(key,items[key]);
			    }
			}
			if (flag) {
				add();
			}
		});
	apply();
	
// onClick's logic below:

});