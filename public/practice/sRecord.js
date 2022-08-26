function addRow()
{
	document.querySelector(".studentRecord").style.display='block';
	var data={};
	data.name=document.querySelector("#u_name").value;
	data.age=document.querySelector("#u_age").value;
	data.gender=document.querySelector("input[type=radio]:checked").value;
	data.country=document.querySelector("#u_country").value;
	
	data.generateUserRecord=function()
	{
		var tabTag=document.createElement("table");
           for(var temp in this)
           {
             if(typeof(this[temp]) !='function')
               {
                 var trTag=document.createElement("tr");
                 trTag.innerHTML=temp+":"+this[temp];
                 var tdTag=document.createElement("td");
                 tdTag.innerHTML=temp+":"+this[temp];
                 trTag.append(tdTag);
                 tabTag.append(trTag);
               }
           }
      document.querySelector(".studentRecord").append(tabTag);
    }
       data.generateUserRecord();
}


	



/*{
	document.querySelector("#rowname").innerText=data.name;
	document.querySelector("#rowage").innerText=data.age;
	document.querySelector("#rowgender").innerText=data.gender;
	document.querySelector("#rowcountry").innerText=data.country;
}*/
	    

