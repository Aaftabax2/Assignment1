"use strict";
let favoritPlaces = ["Makkah", "Madina", "Sakrdu", "Paris", "Alaska"
];
// Seeing the World: Think of at least five places in the world you’d like to visit.
// 1 Store the locations in a array. Make sure the array is not in alphabetical order.
// 2 Print your array in its original order.
console.log("My Favorite Places in Original Order");
console.log(favoritPlaces);
// 3 Print your array in alphabetical order without modifying the actual list.
console.log("\n In Alphabet Order");
console.log([...favoritPlaces].sort());
// 4 Show that your array is still in its original order by printing it.
console.log("\n In Original Order");
console.log(favoritPlaces);
// 5 Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n In Reverse Alphabet Order");
console.log([...favoritPlaces].sort().reverse());
// 6 Show that your array is still in its original order by printing it again.
console.log("\n Showing again In Original Order");
console.log(favoritPlaces);
// 7 Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n Showing reverse alphabetical order without changing In Original Order");
favoritPlaces.reverse();
console.log(favoritPlaces);
// 8 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Showing Back to Original Order");
favoritPlaces.reverse();
console.log(favoritPlaces);
// 9 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n Showing Back to Alphabetical Order");
favoritPlaces.sort();
console.log(favoritPlaces);
// 10 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n Showing Back to reverse Alphabetical Order");
favoritPlaces.sort().reverse();
console.log(favoritPlaces);
