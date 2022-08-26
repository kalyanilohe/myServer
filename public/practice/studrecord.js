function onformSubmit()
{
	var formData=readFormData();
	insertNewRecord(formData);

}
function readFormData()
{
	var formData={};
	formData[username]=document.getElementById("username").value;
	formData[userage]=document.getElementById("userage").value;
	formData[gender]=document.getElementById("gender").value;
	formData[country]=document.getElementById("country").value;
	return formData;
}
function insertNewRecord(data)
{
  var table=document.getElementById("employeelist").getElementByTagName[("tbody")[0]];
  var newRow=table.insertRow(table.length);
  cell1=newRow.insertCell(0);
  cell1.innerHTML=data.username;
  cell2=newRow.insertCell(1);
  cell2.innerHTML=data.userage;
  cell3=newRow.insertCell(2);
  cell3.innerHTML=data.gender;
  cell4=newRow.insertCell(3);
  cell4.innerHTML=data.country;
  cell4=newRow.insertCell(4);
  cell4.innerHTML= "<a>Edit</a> <a>Delete</a>";  
}