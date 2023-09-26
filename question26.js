"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
exports.alien_colour = void 0;
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
let alien_colour = 'green';
exports.alien_colour = alien_colour;
if (alien_colour === 'green') {
    console.log('You just earned 5 points for shooting the alien!');
}
else {
    console.log('You just earned 10 points for shooting the alien!');
}
// • Write one version of this program that runs the if block and another that runs the else block.
exports.alien_colour = alien_colour = 'blue';
if (alien_colour === 'green') {
    console.log('You just earned 5 points for shooting the alien!');
}
else {
    console.log('You just earned 10 points for shooting the alien!');
}
