var userDetails=[];
var isEdit=false;
var currentIndex;
function registerDetails()
{
	var obj={
		Name : $("#uname").val(),
		Age : $("#uage").val(),
		Location :$("#uloc").val(),
	};
	if(isEdit)
	{
		userDetails[currentIndex]=obj;
		updateData(currentIndex);
		isEdit=false;

	}else{
       userDetails.push(obj);
       addDetails(obj,userDetails.length-1)
	}
	clearDetails();
}
	
function clearDetails()
{
    $("#uname").val('')
	$("#uage").val('')
	$("#uloc").val('')
}
var addDetails=(data,index) =>
{
	var trTag=$("<tr id='row_"+index +"'></tr>");
	var tdTag1=$("<td></td>").html(index+1);
	trTag.append(tdTag1);
    var tdTag2=$("<td name='uname'></td>").html(data.Name);
	trTag.append(tdTag2);
	var tdTag3=$("<td name='uage'></td>").html(data.Age);
	trTag.append(tdTag3);
	var tdTag4=$("<td name='uloc'></td>").html(data.Location);
	trTag.append(tdTag4);

	var tdTag5=$("<td></td>");
	var bt1=$("<input type='button' class='btn btn-primary'  value='Delete' onclick='deleteRecord(" + index + ")'>");
    var bt2=$("<input type='button' class='btn btn-success' value='Edit' onclick='editRecord(" + index + ")'>");
    tdTag5.append(bt1);
    tdTag5.append(bt2)
    trTag.append(tdTag5);
    $("tbody").append(trTag);
}

var deleteRecord = (index) =>
{
   //alert("delete"+index);
   userDetails.splice(index,1);
   reloadData();
  
}
var editRecord = (index) =>
{
 var data=userDetails[index];
 $("#uname").val(data.Name);
 $("#uage").val(data.Age);
 $("#uloc").val(data.Location);

 isEdit=true;
 currentIndex=index;
}
var reloadData=() =>
{
	$("tbody").empty();
	for(var i=0;i<userDetails.length;i++)
	{
		addDetails(userDetails[i],i);
	}
}
var updateData=(index) =>
{
   var selector= "#row_"+index;
   $(selector).find('[name="uname"]').html(userDetails[index].Name);
   $(selector).find('[name="uage"]').html(userDetails[index].Age);
   $(selector).find('[name="uloc"]').html(userDetails[index].Location);
}