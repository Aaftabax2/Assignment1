"use strict";
// let pet = [];
// pet[0] = "dog";
// pet[1] = "cat";
// pet[2] = "fish";
// pet[3] = "parrot";
// console.log("🚀 ~ file: class3.ts:36 ~ pet:", pet);
// //shift
// console.log("shift method");
// pet.shift();
// console.log("🚀 ~ file: class3.ts:29 ~ fruitsArray:", pet);
// pet.push("dog")
// console.log("🚀 ~ file: class3.ts:29 ~ fruitsArray:", pet);
// pet.pop()
// console.log("🚀 ~ file: class3.ts:29 ~ fruitsArray:", pet);
// pet.shift()
// console.log("🚀 ~ file: class3.ts:29 ~ fruitsArray:", pet);
// pet.unshift("dog")
// console.log("🚀 ~ file: class3.ts:29 ~ fruitsArray:", pet);
// //add new values
// pet.splice(2, 0, "Lemon", "Banana");
// console.log("🚀 ~ file: class3.ts:56 ~ fruitsArray:", pet);
// pet.splice(2, 1, "Lemon", "Banana");
// console.log("🚀 ~ file: class3.ts:56 ~ fruitsArray:", pet);
// pet.splice(2, 2);
// console.log("🚀 ~ file: class3.ts:56 ~ fruitsArray:", pet);
//for loop
//i++ equal too i=i+1
// console.log("Loop section");
// for (let i = 0; i < 5; i++) {
//   console.log("Hello i am for panaverse");
// }
const cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Faisalabad", "Okara"];
//problem
for (let x = 0; x <= 4; x++) {
    if ("Islamabad" === cleanestCities[x]) {
        console.log("It's one of the cleanest cities");
        break;
    }
    else {
        console.log("No cleanest city found form problem");
    }
}
console.log("2nd Loop");
//solution
let matchFound = false;
for (let i = 0; i <= 4; i++) {
    if ("Islamabad" === cleanestCities[i]) {
        console.log("It's one of the cleanest cities");
        matchFound = true;
        break;
    }
}
if (matchFound === false) {
    console.log("No cleanest city found");
}
const data = ["Asad", 12, 34, 56, 78, 90, 8, 0, 1, 2, 3, 45, 6, 6, 9, 7];
for (let i = 0; i < data.length; i++) {
    console.log("This is umber", data[i]);
}
