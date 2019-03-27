function loadJson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  console.log(xhr);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile)
  Career_objective(data.Career_objective)
  Education(data.Education)
  Skills(data.Skills)
})
var left=document.querySelector(".left");

function profile(p){
  var image=document.createElement("img");

  image.src=p.image;
  left.append(image);

  var name=document.createElement("h2");
  name.textContent=p.name;
  left.append(name);

  var designation=document.createElement("h2");
  designation.textContent=p.designation;
  left.append(designation);
  var na=document.createElement("h2");
  na.textContent=p.email_id;
  left.append(na);

  var mobi=document.createElement("h2");
  mobi.textContent=p.mobile;
  left.append(mobi);
}

var right=document.querySelector(".right");
// Career_objective
function Career_objective(r){

var car=document.createElement("h2");
car.textContent="Career_objective";
right.append(car);

var hr=document.createElement("hr");
right.append(hr);

var care=document.createElement("h2");
care.textContent=r.info;
right.append(care);
}
// Education detail in table format
function Education(edu){
  var car=document.createElement("h2");
  car.textContent="Education detail";
  right.append(car);

  var hr=document.createElement("hr");
  right.append(hr);
   var table=document.createElement("table");
  //table.broder="2";
   right.append(table);
  var tr3="<tr><td>Education detail</td></tr>";
   var tr1="<tr><th>s_no</th><th>Qualification</th><th>intitute</th><th>percentage</th><th>yop</th></tr>";
   var tr2="";
   for (var i = 0; i < edu.length; i++) {
    tr2=tr2+"<tr><td>"+edu[i].s_no+"</td><td>"+edu[i].Qualification+"</td><td>"+edu[i].intitute+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].yop+"</td></tr>";
   }
   right.append(table);
   table.innerHTML=tr3+tr1+tr2;

}
function Skills(s) {
  var car=document.createElement("h2");
  car.textContent="Skills";
  right.append(car);

  var skl=document.createElement("hr");
  right.append(skl);
  var ul=document.createElement("order");
  right.append(ul);
  for(var i in s){
    var li=document.createElement("li");
    li.innerHTML=s[i].name+":"+s[i].info;
    ul.append(li);
  }
right.append(ul);
}
