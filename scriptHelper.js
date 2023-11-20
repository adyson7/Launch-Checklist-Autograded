// validates the input for the shuttle launch form
// checks if the input is empty, a valid number or neither
// returns a string indicating whether the input is empty, not a number or a number
function validateInput(testInput) {
    if (testInput === "") {
        console.error("All fields are required!"); // log an error if any field is empty
        return "Empty";
    } else if (isNaN(testInput)) {
        console.error("Please enter a valid number for fuel and cargo."); // log an error if fuel or cargo is not a number
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

// form submission for the shuttle launch
// validates input for pilot name, co-pilot name, fuel level, and cargo mass
// updates the display with relevant info and checks if the shuttle is ready for launch
function formSubmission(document, list, pilot, copilot, fuel, cargo) {
    // checking validity of input values
    const pilotStatus = validateInput(pilot);  // validate the pilot name
    const copilotStatus = validateInput(copilot);  // validate the co-pilot name
    const fuelStatus = validateInput(fuel);  // validate the fuel level
    const cargoStatus = validateInput(cargo);  // validate the cargo mass

    // display pilot and co-pilot names via document.getElementId
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

    // updates shuttle requirements
    const faultyItems = document.getElementById("faultyItems"); // variable that represents HTML element faultyItems
    if (fuelStatus === "Is a Number" && cargoStatus === "Is a Number") {
        // checks if fuel and cargo are valid numbers
        if (fuel < 10000) {
            // if fuel is less than 10,000, display an error
            faultyItems.style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        } else if (cargo > 10000) {
            // if cargo is more than 10,000, display an error
            faultyItems.style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        } else {
            // if all conditions are met, the shuttle is ready for launch
            faultyItems.style.visibility = "hidden";
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        }
    } else {
        // log an error if fuel or cargo is not a valid number
        console.error("Please enter valid numbers for fuel and cargo.");
    }
}


// fetches a list of planets from an external API (application programming interface)
// returns a promise with the JSON response
function myFetch() {
    // the fetch function makes an HTTP request to the specified URL
    // this returns a Promise that resolves to the Response to that request
    return fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(response => response.json()) // when the response is received, parses it as JSON
        .catch(error => console.error(error)); // logs an error if the fetch fails
}


// function pickPlanet takes in planets array as an argument
function pickPlanet(planets) {
    const index = Math.floor(Math.random() * planets.length);
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
        <img src="${image}" alt="Mission Destination Image">
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