
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
// • Tests using the lower case function
const test1: string = "Aaftab";
const test2: string = "aaftab";
console.log(test1 === test2); //Fasle
console.log(test1 !== test2); //True
console.log(test1.toLowerCase() === test2); //True

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number =2
const num2: number = 4
console.log(num1 === num2); //False
console.log(num1!== num2); //True
console.log(num1 > num2); //False
console.log(num1 >= num2); //False
console.log(num1 < num2); //True
console.log(num1 <= num2); //True

// • Tests using "and" and "or" operators
const x: number = 2
const y: number = 4
const z: number = 6

console.log(x > y && x < z); //False
console.log(x > y || x < z); //True
console.log(x > y && y < z); //False
console.log(x > y || y < z); //True
console.log(x > y && x < y); //False
console.log(x > y || x < y); //True

// • Test whether an item is in a array
// • Test whether an item is not in a array
const fruit: string[] = ['apple', 'orange', 'banana', 'strawberry']
console.log(fruit.includes('apple')); //True
console.log(fruit.includes('melon')); //False
console.log(!fruit.includes('orange')); //False
console.log(!fruit.includes('melon')); //True

