// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const laptop= {
    name: "Lenovo ThinkPad",
    model: "P50",
    cpu: "Intel Core i7",
    price: "1000",
}
// Define an array of objects.
let laptops: Array <typeof laptop>= [];
// Multiple objects pushed into the array
laptops.push(laptop);
laptops.push({
    name: "Lenovo ThinkPad",
    model: "P51",
    cpu: "Intel Core i5",
    price: "800",
})
let laptop2 =
    {
    name: "Lenovo IdeaPad",
    model: "15",
    cpu: "Intel Core i7",
    price: "600",
 
    }
laptops.push(laptop2);

console.log(laptops);
function displayLaptops(laptops: Array<typeof laptop>){
    for (let i of laptops) {
        console.log(`Title: ${i.name}`
        + `\nModel: ${i.model}`
        + `\nCPU: ${i.cpu}`
        + `\nPrice: ${i.price}`
        + `\n----------------`);
}
}

displayLaptops(laptops);
