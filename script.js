// this page sets up event listeners and async functions to handle...
//..the window load event and form submission event for shuttle launch checklist

// window "load" event listener - function will execute when window finishes loading
window.addEventListener("load", function () {
    let listedPlanets;
  
    // fetches planetary data
    let listedPlanetsResponse = myFetch();
  // myFetch function returns a Promise, `then` function handles result
    listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
  
      // calls helper functions to pick a planet from the 
      //list of planets and adds that information to your destination.
      const selectedPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        selectedPlanet.name,
        selectedPlanet.diameter,
        selectedPlanet.star,
        selectedPlanet.distance,
        selectedPlanet.moons,
        selectedPlanet.image
      );
    });
  
    // Form submission event
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      //get form values
      const pilotInput = document.querySelector("input[name=pilotName]");
      const copilotInput = document.querySelector("input[name=copilotName]");
      const fuelInput = document.querySelector("input[name=fuelLevel]");
      const cargoInput = document.querySelector("input[name=cargoMass]");
  
      // Form submission
      formSubmission(
        document,
        document.getElementById("faultyItems"),
        pilotInput.value,
        copilotInput.value,
        fuelInput.value,
        cargoInput.value
      );
  
      // Additional code using the original provided functions
      const launchStatus = document.getElementById("launchStatus");
      const list = document.getElementById("faultyItems");
      const fuelInput = document.querySelector("input[name=fuelLevel]");
      const cargoInput = document.querySelector("input[name=cargoMass]");
  
      // Example usage of updateLaunchStatus function
      updateLaunchStatus(document, list, fuelInput.value, cargoInput.value);
  
    });
  });
  


