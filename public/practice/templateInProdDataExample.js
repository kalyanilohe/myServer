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
 	$("#container").loadTemplate( $("#productTemplate"), productData, {append:true});

 }

function loadData()
{
	for(var i=0;i<pDetail.length;i++)
	{
		showData(pDetail[i]);
	}
}