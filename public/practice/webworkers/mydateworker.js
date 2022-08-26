console.log("hello");

function getDate()
{
	var date=new Date();
	var fullYear=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    postMessage(fullYear);
}
setInterval(function(){
getDate();

},1000);

