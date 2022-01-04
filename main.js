// //create div
// let MyElement = document.createElement("div");
// //create h2
// let Myh2 = document.createElement("h2");
// //create paragraphe
// let Myparagraphe = document.createElement("p");
// //create classname to div
// MyElement.className="dive-name";
// // create text variable
// let Myh2Text = document.createTextNode("product-title");
// let MyparagrapheText = document.createTextNode("product-description");
// // ajouter Myh2Text to Myh2
// Myh2.appendChild(Myh2Text);
// // ajouter MyparagrapheText to Myparagraphe
// Myparagraphe.appendChild(MyparagrapheText);
// // ajouter Myh2 to MyElement
// MyElement.appendChild(Myh2);
// // ajouter Myparagraphe to MyElement
// MyElement.appendChild(Myparagraphe);
// //ajouter variable MyText to MyElement
// document.body.appendChild(MyElement);
// create form
// let Myform = document.createElement("form");
// // create label
// let Mylabel = document.createElement("label");
// // create select
// let Myselect = document.createElement("select");
// // create classname to label
// Mylabel.className="label-2";
// // create classname to select
// Myselect.className="select-2";
// // ajouter label to form 
// Myform.appendChild(Mylabel);
// // ajouter select to form 
// Myform.appendChild(Myselect); 
// const Moto = document.getElementById("#moto");
// Moto.addEventListener("click" , function() {
//     console.log("hello");
// })
let nbjour = document.getElementById("nbjour")
let select1 = document.querySelector("#select-1");
let select2 = document.querySelector("#select-2");
let Electrique = document.querySelector("#electrique");
let Hybride = document.querySelector("#hybride");
let Essence = document.querySelector("#essence");
let Diesel = document.querySelector("#diesel");
let Autor = document.querySelector("#auto");
let Manual = document.querySelector("#manual");
select1.addEventListener("change" , function() {
    let SelectText = select1.options[select1.selectedIndex].text;
    console.log( "text : " + SelectText);
    if(SelectText === "Moto")
    {
      document.getElementById("electrique").style.display="block";
      document.getElementById("hybride").style.display="none";
      document.getElementById("essence").style.display="block";
      document.getElementById("diesel").style.display="none";
    }
    else if(SelectText === "Citadine")
    {
      document.getElementById("electrique").style.display="block";
      document.getElementById("hybride").style.display="block";
      document.getElementById("essence").style.display="block";
      document.getElementById("diesel").style.display="block";
    }
    else if(SelectText === "Compact")
    {
      document.getElementById("electrique").style.display="none";
      document.getElementById("hybride").style.display="block";
      document.getElementById("essence").style.display="block";
      document.getElementById("diesel").style.display="block";
    }
    else if (SelectText === "Berline")
    {
      document.getElementById("electrique").style.display="none";
      document.getElementById("hybride").style.display="block";
      document.getElementById("essence").style.display="block";
      document.getElementById("diesel").style.display="block";
    }
    else if (SelectText === "Utilitaire")
    {
      document.getElementById("electrique").style.display="none";
      document.getElementById("hybride").style.display="none";
      document.getElementById("essence").style.display="none";
      document.getElementById("diesel").style.display="block";
    }
    else if (SelectText === "Engin de chantier")
    {
      document.getElementById("electrique").style.display="none";
      document.getElementById("hybride").style.display="none";
      document.getElementById("essence").style.display="block";
      document.getElementById("diesel").style.display="block";
    }
    else if (SelectText === "Camion")
    {
      document.getElementById("electrique").style.display="none";
      document.getElementById("hybride").style.display="none";
      document.getElementById("essence").style.display="none";
      document.getElementById("diesel").style.display="block";
    }
})
// select2.addEventListener("change" , function() {
//   let SlctTxt = select2.options[select2.selectedIndex].text;
//   console.log( "text : " + SlctTxt);
//   if(SlctTxt === "Electrique" || SlctTxt === "Essence")
//   {
//     document.getElementById("auto").style.display="none";
//     document.getElementById("manual").style.display="none";
//   }
//   // if(SlctTxt === "Electrique" || SlctTxt === "Hybride"|| SlctTxt === "Essence" || SlctTxt === "Diesel")
//   // {
//   //   document.getElementById("auto").style.display="none";
//   //   document.getElementById("manual").style.display="block";
//   // }
// })
document.getElementById("button---1").addEventListener("click",function() {{
  let nbjour=document.getElementById("nbjour").value;
  var valType=document.getElementById("select-1").value;
  console.log( valType );
  var valFuel=document.getElementById("select-2").value;
  console.log( valFuel );
  var valGear=document.getElementById("select-3").value;
  var total=0;
  total+=(parseFloat(valType)+(parseFloat(valType)*parseFloat(valFuel))+(parseFloat(valType)*parseFloat(valGear)))*nbjour;
  console.log( total);
  document.getElementById("total").innerHTML=total;
}})
