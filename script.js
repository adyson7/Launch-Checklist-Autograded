window.addEventListener("load", function () {
//variables to store the listed planets and the response from the myFetch function
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    
    //handles the response from the myFetch function
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets); //logs listed planets to the console
    }).then(function () {
 //after fetching the planets, selects a random planet and adds it's info to the HTML
        let selectPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectPlanet.name, selectPlanet.diameter, selectPlanet.star, selectPlanet.distance, selectPlanet.moons, selectPlanet.image);
    })
//hides the faulty items list initially
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
//event listener for the form submission
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); //prevents the default form submission behavior when values are extracted from the form


    //validates input and get values from the form
        validateInput(document);
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelInput.value);
        let cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoInput.value);

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    //submits the form on the page with the extracted values
    })
});

  


