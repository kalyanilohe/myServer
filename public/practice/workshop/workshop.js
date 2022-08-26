var getData=() => 
{
	var dataUrl="http://localhost:8082/data/workshop-on-webservices";

	$.ajax({
		url:dataUrl,
		dataType:'JSON',
		method:'GET',
		data:{},
		success:function(response){
			console.log("success");
			console.log(response);
		    loadData(response);
		},
		error:function(){
			console.log("error");
		}

	});
}

var loadData= (pData) =>
{

	var source = document.querySelector("#productTemplate").innerHTML;   //we are compiling template here
    var template = Handlebars.compile(source);    //handlebars is the object of handlebar api 
    var Finalhtml = template(pData);
    $(".container").html(Finalhtml);
}