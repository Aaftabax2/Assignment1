"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Create a function that will return an array.
Object.defineProperty(exports, "__esModule", { value: true });
function createFruits(name, color, taste) {
    return { name, color, taste };
}
const fruits = [
    createFruits('Apple', 'Red', 'Sweet'),
    createFruits('Orange', 'Orange', 'Sweet'),
    createFruits('Pear', 'Yellow', 'Sweet'),
    createFruits('Grapes', 'Green', 'Sweet'),
    createFruits('Strawberry', 'Red', 'Sweet'),
];
const invalidIndexError = 8;
console.log(`Fruit at Index ${invalidIndexError}`, fruits[invalidIndexError]);
fruits.forEach((fruit) => { console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Tast: ${fruit.taste}`); });
