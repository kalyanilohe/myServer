
var mathUtil=(function(){
	function sample()
    {
	console.log("bye for today");
    }


    var count=10;

function doAddition(firstval,secondval)
{
  count++;
  var result=0;
  result=firstval+secondval;
  return result;
}
function doSubtraction(firstval,secondval)
{
  count++;
  var result=0;
  result=firstval-secondval;
  return result;
}
function doMultiplication(firstval,secondval)
{
  count++;
  var result=0
  result=firstval*secondval;
  return result;
}
function doDivision(firstval,secondval)
{
  count++;
  var result=0;
  result=firstval/secondval;
  return result;
}
return
{
	 function doAddition(firstval,secondval)
       {
         count++;
         result=firstval+secondval;
         return result;
       }
}
})();