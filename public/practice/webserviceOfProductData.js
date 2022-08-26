var pDetail;


function getData()
{
	$(".loadingblock").show();
 $.ajax({
 	url:'/data/product-details',
 	method:'GET',
 	dataType:'JSON',
 	data: {},
 	success:function(res){
 		$(".loadingblock").hide();
        pDetail=res.productData;
        loadData();
 	},
 	error: function(err){
        console.log("error");
        console.log(err);
        $(".errblock").show();
        $(".loadingblock").hide();
 	}
 });
}

	
function showData(productData)

{
	var ulTag=$("<ul></ul>").addClass("block");
	

	var li1=$("<li></li>").text("product name:"+productData.name);
	ulTag.append(li1);

	var li2=$("<li></li>").text("product price:"+productData.price);
		ulTag.append(li2);

	var li3=$("<li></li>").text("manufacturer:"+productData.manu);
		ulTag.append(li3);

var li4=$("<li></li>").text("seller:"+productData.sellerName);
		ulTag.append(li4);
  
  var li5=$("<li></li>");
  var imgTag=$("<img/>").attr("src",productData.image);
  li5.append(imgTag);
  ulTag.append(li5);

  $("#container").append(ulTag);
	

	console.log(ulTag);
}

function loadData()
{
	for(var i=0;i<pDetail.length;i++)
	{
		showData(pDetail[i]);
	}
}