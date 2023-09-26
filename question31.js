"use strict";
// // No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// console.log("Empty list of users array\n");
// const emptyUsers =[] 
// // • If the list is empty, print the message We need to find some users!
// console.log("Non Empty list of users array \n");
// const nonEmptyUsers = ['Eric ', ' John ', ' Mary ', ' Peter', ' admin'];
// console.log(`Non Empty list of users array ${nonEmptyUsers}.\n`);
// function greetUsers(nonEmptyUsers:string[]): void {
//     if (nonEmptyUsers.length===0) {
//         console.log("We need to find some users!\n"); return;
//     }}
//     for (const nonEmptyUser of nonEmptyUsers) {
//         if (nonEmptyUser ==='Eric') {
//             console.log(`Hello Eric, do you need some assistance?\n`);
//         } else {
//             console.log(`Hello ${nonEmptyUser}, thank you for logging in again`);
//         }}
// // • Remove all of the usernames from your array, and make sure the correct message is printed.
const userNames = ['Eric', ' John', ' Mary', ' Peter', ' admin'];
if (userNames.length === 0) {
    console.log("Need to add a user");
}
else {
    console.log(`We have ${userNames}`);
}
