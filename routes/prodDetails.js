var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data={
	"productData": [
		{
			"name": "lipstick",
			"price": "2000",
			"brand": "Lakme",
			"sellerName": "INDIAN COSMETICS",
			"image": "https://media.allure.com/photos/5c0802bb4691a52cf2eb0829/1:1/w_2000,h_2000,c_limit/BobbiBrownLip.png"
		},
		{
			"name": "lipgloss",
			"price": "5000",
			"brand": "Lakme",
			"sellerName": "INDIAN COSMETICS",
			"image": "https://www.refinery29.com/images/9329572.jpg?format=webp&width=583&height=800&quality=85"
		},
		{
			"name": "Maskara",
			"price": "700",
			"brand": "Bhuewheal",
			"sellerName": "INDIAN COSMETICS",
			"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaADCXZqhK9qr0vG2duFxUgPsOSfXHsn7MBQ&usqp=CAU"
		},
		{
			"name": "Compact powder",
			"price": "1500",
			"brand": "Lakme",
			"sellerName": "INDIAN COSMETICS",
			"image": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1529075520-best-makeup-0008-honestbeautyblush-1529075512.jpg?crop=1xw:1xh;center,top&resize=480:*"
		}
	]
}
var data=JSON.stringify(data);

setTimeout(function(){
res.send(data);
},500);

});



module.exports = router;