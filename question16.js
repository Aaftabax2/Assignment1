"use strict";
// 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest2 = [`Asad `, `Bilal `, `Ahmad `, `Hassan`];
for (let guest of guest2) {
    console.log(`Hello, ${guest}, We have found a bigger dinner table`);
}
let newguestatstart = "Aaftab";
let newguestatmiddle = "Zahid";
let newguestatend = "Abid";
guest2.unshift(newguestatstart);
// console.log(guest2)
let middleIndex = Math.floor(guest2.length / 2);
guest2.splice(middleIndex, 0, newguestatmiddle);
// console.log(guest2)
guest2.push(newguestatend);
// console.log(guest2)
console.log("New Set of invitation Messages");
for (let guest of guest2) {
    console.log(`Dear ${guest}, you are invited for dinner tonight.`);
}
