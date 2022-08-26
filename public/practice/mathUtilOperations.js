var count=10;
const Abc={
 doSubtraction: function(firstval,secondval)
{
  count++;
  var result=0;
  result=firstval-secondval;
  return result;
},
 doMultiplication:function(firstval,secondval)
{
  count++;
  var result=0
  result=firstval*secondval;
  return result;
},
doDivision:function(firstval,secondval)
{
  count++;
  var result=0;
  result=firstval/secondval;
  return result;
},

 doAddition:function(firstval,secondval)
  {
    count++;
    var result=0;
    result=firstval+secondval;
      return result;
  }

}


