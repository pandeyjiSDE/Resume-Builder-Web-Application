function addNewWEField()
{
   // console.log("Adding");

   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here");

   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weAddButton");


   weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField()
{
    let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here");

   let aqOb = document.getElementById("aq");
   let aqAddButtonOb = document.getElementById("aqAddButton");


   aqOb.insertBefore(newNode, aqAddButtonOb);
}

//Generating Resume
function generateResume()
{
  // console.log("playing");

  let namefield = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = namefield;

  //direct
  
  document.getElementById("nameT2").innerHTML = namefield;

  //contact

 document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

 //address

 document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

 //Email

 document.getElementById("gmailT").innerHTML = document.getElementById("gmailField").value;

//links

document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;


//objective

document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;


//Work Experience

let wes = document.getElementsByClassName("weField");

let str = "";

for(let e of wes){
   str = str + `<li> ${e.value} </li>`;
}
document.getElementById("weT").innerHTML=str;


//Academic Qualification

let aqs = document.getElementsByClassName("eqField");

let str1 = "";

for(let e of aqs){
   str1 += `<li> ${e.value} </li>`;
}
document.getElementById("aqT").innerHTML=str1;

document.getElementById("cv-form").style.display="none"; //dikkattttttttt
document.getElementById("cv-template").style.display="block";

}


//Print Resume..
function printResume()
{
   window.print();
   // document.getElementById("btn1").style.display="none";
}

/// Add Image in Templet 
function readURL(input) {
   if (input.files && input.files[0]) {
   
     var reader = new FileReader();
     reader.onload = function (e) { 
       document.querySelector("#img").setAttribute("src",e.target.result);
     };

     reader.readAsDataURL(input.files[0]); 
   }
 }
