// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("formSubmit");
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");
form.addEventListener("click", function() {
   if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "" ) {
      alert("All fields are required!");
      event.preventDefault();
   }
   if (isNaN(fuelLevelInput.value)) {
      alert("Make sure to enter valid information for each field!");
      event.preventDefault();
   } 
   if (isNaN(cargoMassInput.value)){
      alert("Make sure to enter valid information for each field!");
      event.preventDefault();
   }
});
});
   
//document.getElementById("formSubmit").addEventListener("click", function() {
   //alert("Hello World!");
//});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
