function loadPage(type)
{
	var filename;
	switch(type)
	{
		case 'login':
			filename="template/login.htm";
		break;

		case 'forgotpwd':
		filename="template/forgotpassword.html"
		break;

		case 'newsignup':
		filename="template/signup.htm"
		break;
	}
	getTemplateContentFromFile(filename);
}

function getTemplateContentFromFile(filename)
{
	var container="";
	$.ajax({
		url:filename,
		method :'GET',
		success : (res) =>{
			$("#container").html(res);
		},
		error: (err) => {
			console.log("error");
			console.log(err);
		}
	});

}

$(document).ready(function(){
loadPage('login');
});
