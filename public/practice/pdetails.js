var productDetail=
[
	{
		productName: 'Laptop',
	    productPrice:50000,
	    manufacturer: 'dell',
	    seller:"indian electronics",
	    img: "https://images-na.ssl-images-amazon.com/images/I/51CYuZNUcoL._SX679_.jpg"
    },
    {
		productName: 'Laptop',
	    productPrice:50000,
	    manufacturer: 'dell',
	    seller:"indian electronics",
	    img: "https://images-na.ssl-images-amazon.com/images/I/51CYuZNUcoL._SX679_.jpg"
    },
    {
		productName: 'Laptop',
	    productPrice:50000,
	    manufacturer: 'dell',
	    seller:"indian electronics",
	    img: "https://images-na.ssl-images-amazon.com/images/I/51CYuZNUcoL._SX679_.jpg"
    },
    {
		productName: 'Laptop',
	    productPrice:50000,
	    manufacturer: 'dell',
	    seller:"indian electronics",
	    img: "https://images-na.ssl-images-amazon.com/images/I/51CYuZNUcoL._SX679_.jpg"
    },
    {
		productName: 'Laptop',
	    productPrice:50000,
	    manufacturer: 'dell',
	    seller:"indian electronics",
	    img: "https://images-na.ssl-images-amazon.com/images/I/51CYuZNUcoL._SX679_.jpg"
    },
]
	function showData(productDetail)
{
	var ulTag=$("<ul></ul>").addClass("block");
	

	var li1=$("<li></li>").text("product name:"+productDetail.productName);
	ulTag.append(li1);

	var li2=$("<li></li>").text("product price:"+productDetail.productPrice);
		ulTag.append(li2);

	var li3=$("<li></li>").text("manufacturer:"+productDetail.manufacturer);
		ulTag.append(li3);

var li4=$("<li></li>").text("seller:"+productDetail.seller);
		ulTag.append(li4);
  
  var li5=$("<li></li>");
  var imgTag=$("<img/>").attr("src",productDetail.img);
  li5.append(imgTag);
  ulTag.append(li5);

  $("#container").append(ulTag);
	

	console.log(ulTag);
}

function loadData()
{
	for(var i=0;i<productDetail.length;i++)
	{
		showData(productDetail[i]);
	}
}