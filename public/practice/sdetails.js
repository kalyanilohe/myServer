function StudentData(obj)  //defining class-classes are the structure of objects
{
  this.name=obj.name;
  this.age=obj.age;
  this.gender=obj.gender;
  this.class=obj.class;
  this.marks=obj.marks;
  this.getTotalandAvg=function()
        {
          this.total=0;
          this.avg=0;
          for(var i=0;i<this.marks.length;i++)
             {
               this.total+=this.marks[i];//calculating marks
             }
          this.avg=this.total/this.marks.length;
           //returning json object
       };
     this.getGrade=function()
         {
            this.grade="";
            if(this.grade>=40)
            {
                  if(this.grade>=60)
                  {
                    this.grade="1st class";
                  }else
                  {
                    this.grade="2nd class";
                  }
            }else
                {
                   this.grade="surprise";
                }

             };
       this.progressCard=function()
          {
            this.getTotalandAvg();
            this.getGrade();
             var ulTag=document.createElement("ul");
              for(var temp in this)
              {
              if(typeof(this[temp]) !='function')
                  {
                     var liTag=document.createElement("li");
                     liTag.innerHTML=temp+":"+this[temp];
                     ulTag.append(liTag);
                  }
             }
      document.querySelector(".progressCard").append(ulTag);
         }
  }     

function readStudInfo()  //defining function
	{
       var data={};
       data.name=document.querySelector("#s_name").value;
       data.age=document.querySelector("#s_age").value;
       data.gender=document.querySelector("input[type=radio]:checked").value;
       data.class=document.querySelector("#s_class").value;
       data.marks=[];
       var id;
       for(var i=0;i<5;i++)
       {
       	id="#m"+ (i+1);
       	data.marks[i]=document.querySelector(id).value;
       	data.marks[i]=parseInt(data.marks[i]);
      }
      var s1=new StudentData(data);
      s1.progressCard();
    }
       
      
   