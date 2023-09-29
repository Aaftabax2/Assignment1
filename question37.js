"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function large_shirt(size, message = "I love TypeScript") {
    console.log(message);
}
large_shirt("large");
function medium_shirt(size, message = "I love TypeScript") {
    console.log(message);
}
medium_shirt("medium");
function small_shirt(size, message = "I love AI.") {
    console.log(message);
}
small_shirt("small");
