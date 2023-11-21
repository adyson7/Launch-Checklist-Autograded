

// function to validate input fields
function validateInput(string) {
    if (string === ""){
        return "Empty"
    }
    if (!isNaN(Number(string))) {
        return "Is a Number";
    } else {
        return "Not a Number";
    //checks for empty fields (=== empty string)
//returns a string indicating that the input has empty fields
//checks for non-numeric values for fuel and cargo
//returns a string indicating that input is valid (a numeric value)
    }
}

// function that handles form submission and updates status
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //gets specified elements from the document
    const items = document.getElementById("faultyItems");
    const status = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    //updates pilot and copilot status
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    // checks fuel level and updates status and visibility accordingly
    if (fuelLevel < 10000) {
        items.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        status.innerHTML = "Shuttle Not Ready for Launch";
        status.style.color = "red";
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }
    // checks cargo mass and updates status and visibility accordingly
    if (cargoLevel > 10000) {
        items.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        status.innerHTML = "Shuttle Not Ready for Launch";
        status.style.color = "red";
        
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }
    // if both fuel and cargo are within limits, updates status to 'ready for launch'
    if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        status.style.color = "green";
        status.innerHTML = "Shuttle is Ready for Launch";
       // items.style.visibility = "visible";
       // fuelStatus.innerHTML = "Fuel level high enough for launch";
        //cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }
}
    
//async function that fetches a list of planets from remote JSON file
// uses the fetch API to make a network request to the specified URL
//if the function returns a value, the Promise will be resolved with that value
async function myFetch() {
    let planetsReturned;
//keyword "await" pauses the execution of the function until the Promise is resolved
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        if (response.status >= 400) {
    //checks if the response status is 400 or higher (indicating an error) and throws an error if true
            throw new Error("bad response");
        } else {
            return response.json()
    //if response is successful, parses the JSON content and returns the list of planets
        }
    });

    return planetsReturned;
}
//function pickPlanet takes in planets array as an argument
function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
     //math.random will run through the length of planets array
    //math.floor rounds down the result to the nearest integer
    return planets[index];
}


// adding information about the mission destination to the HTML
// Updates the missionTarget element with details about the selected planet
function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    //this selects the HTML element with the name "missionTarget"
    // this variable now holds a reference to that element
    const missionTarget = document.getElementById("missionTarget");
    // this will update the HTML for missionTarget element using template literal
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li> 
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${image}">
    `; //${} are placeholders that will be replaced with the actual values of the corresponding parameters
}

// exports the functions for testing
// made module.exports into an object as a shorthand
module.exports = {
    addDestinationInfo,
    validateInput,
    formSubmission,
    pickPlanet,
    myFetch
};
// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
