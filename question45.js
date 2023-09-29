"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function create_car(manufacturer, model, ...keyWords) {
    const car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Process the keyword arguments
    for (let i = 0; i < keyWords.length; i += 2) {
        const key = keyWords[i];
        const value = keyWords[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional name-value pairs
const carInfo = create_car('Toyota', 'Camry', 'color', 'Silver', 'year', 2022, "whealWorking", 4);
// Print the returned Object to verify the stored information
console.log(carInfo);
