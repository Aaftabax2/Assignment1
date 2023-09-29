// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const magicians: string[] = ["Aaftab", "Asad", "Abubakar", "Hassan",]
function show_magicians(mag: string | any[]) {
    for (let i = 0; i < mag.length; i++) {
        console.log(mag[i])
    }
}
// show_magicians(magicians)

// Q42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function the_Great( magicians: string | any[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`${magicians[i]} The great!`);
    }
}
// the_Great(magicians)

// Q43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let new_magicians: string[] = []

function unchanged_magicians( magicians: string | any[]) {
    for (let i = 0; i < magicians.length; i++) {
        new_magicians.push(`${magicians[i]} The great!`)
    }
    return new_magicians
}
unchanged_magicians(magicians);
show_magicians(magicians);
show_magicians(new_magicians);

// console.log(new_magicians);