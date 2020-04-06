// Write your JavaScript code here!
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      return response.json().then(function (json) {
         const div = document.getElementById("missionTarget");
            div.innerHTML += `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diamter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance from Earth: ${json[3].distance}</li>
               <li>Number of Moons: ${json[3].moons}</li>
            </ol>
            <img src="${json[3].image}">
            `; 
      });
   });
window.addEventListener("load", function() {
   let form = document.getElementById("formSubmit");
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");

form.addEventListener("click", function() {
   event.preventDefault();
   if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "" ) {
      alert("All fields are required!");
   }
   if (isNaN(fuelLevelInput.value)) {
      alert("Make sure to enter valid information for each field!");
   } 
   if (isNaN(cargoMassInput.value)){
      alert("Make sure to enter valid information for each field!");
   }
      let pilotUpdate = document.getElementById("pilotStatus");
      pilotUpdate.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`

      let copilotUpdate = document.getElementById("copilotStatus");
      copilotUpdate.innerHTML = `Co-Pilot ${copilotNameInput.value} is ready for launch`
      
   if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000){
      visible.style.visibility = "hidden"
      launchReady = document.getElementById("launchStatus");
      launchReady.innerHTML = "Shuttle is ready for launch";
      launchReady.style.color = "green"
   }
   if (fuelLevelInput.value < 10000 && cargoMassInput.value < 10000){
      visible = document.getElementById("faultyItems");
      visible.style.visibility = "visible"
      update = document.getElementById("launchStatus");
      update.innerHTML = "Shuttle Not Ready to Launch"
      update.style.color = "red"
      let lowFuelStatusUpdate = document.getElementById("fuelStatus");
      lowFuelStatusUpdate.innerHTML = "Fuel level too low for launch";
      let highCargoStatusUpdate = document.getElementById("cargoStatus");
      highCargoStatusUpdate = "Cargo mass low enough for launch";

   }
   if (cargoMassInput.value > 10000 && fuelLevelInput.value < 10000 ){
      visible = document.getElementById("faultyItems");
      visible.style.visibility = "visible"
      update = document.getElementById("launchStatus");
      update.innerHTML = "Shuttle Not Ready to Launch"
      update.style.color = "red"
      let highCargoStatusUpdate = document.getElementById("cargoStatus");
      highCargoStatusUpdate.innerHTML = "Cargo mass too high for launch";
      let lowFuelStatusUpdate = document.getElementById("fuelStatus");
      lowFuelStatusUpdate.innerHTML = "Fuel level too low for launch";
   }
   if (cargoMassInput.value > 10000 && fuelLevelInput.value > 10000 ){
      visible = document.getElementById("faultyItems");
      visible.style.visibility = "visible"
      update = document.getElementById("launchStatus");
      update.innerHTML = "Shuttle Not Ready to Launch"
      update.style.color = "red"
      let highCargoStatusUpdate = document.getElementById("cargoStatus");
      highCargoStatusUpdate.innerHTML = "Cargo mass too high for launch";
      let lowFuelStatusUpdate = document.getElementById("fuelStatus");
      lowFuelStatusUpdate.innerHTML = "Fuel level high enough for launch";
   }
});
});

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
