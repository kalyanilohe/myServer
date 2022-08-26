var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var data={
  	name:"Laptop",
	price:"45000",
	manufacturer: "Samsung",
	image:"https://zdnet3.cbsistatic.com/hub/i/r/2020/03/19/4d0e4e03-c980-43db-aa0f-2572aefcf89f/thumbnail/770x578/a5b07c59043890bc94f9de1e8cd4698d/surface-laptop-3-13-5-header.jpg"
  }
  data=JSON.stringify(data);
  res.send(data);

});


module.exports = router;
