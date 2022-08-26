var studDetails=[];

function addDetails()
{
	var data= {
		name: document.querySelector("#uname").value,
		age: document.querySelector("#uage").value,
		gender:document.querySelector("input[name='gender']:checked").value,
		country:document.querySelector("#ucountry").value

	};
	studDetails.push(data);   //pushing records into array one by one
	displayData();
	document.querySelector("#uname").value="";
	document.querySelector("#uage").value="";
	document.querySelector("input[value='Female']").checked=true;
	document.querySelector("#ucountry").value=""; //emptying the input fields
	console.log(studDetails);
}

function displayData()
{
	document.querySelector("tbody").innerHTML='';
	for(var i=0;i<studDetails.length;i++){
		var currentObj=studDetails[i]; //current ith object
		var trTag= getHtmlFor(currentObj,i); //creating the UI for current obj
		document.querySelector("tbody").append(trTag);
	}
}

function getHtmlFor(currentObj,i)
{
	var trTag=document.createElement("tr");
	var tdTag=document.createElement("td");
	tdTag.innerHTML=i + 1;
	trTag.append(tdTag);
	for(var temp in currentObj){
		var tdTag=document.createElement("td");
		tdTag.innerHTML=currentObj[temp];
		trTag.append(tdTag);
	}

	var btntd=document.createElement("td"); //creating delete button
	var dltbtn=document.createElement("input");
	dltbtn.setAttribute("type","button");
	dltbtn.setAttribute("value","Delete");
	dltbtn.setAttribute("onclick","deleteRecord("+ i +")");
	btntd.append(dltbtn);

	var editbtn=document.createElement("input"); //creating edit button
	editbtn.setAttribute("type","button");
	editbtn.setAttribute("value","Edit");
	btntd.append(editbtn);

	trTag.append(btntd); //appending two buttons to tr

	return trTag;
}

function deleteRecord(index)
{
	studDetails.splice(index,1);
	displayData();
}