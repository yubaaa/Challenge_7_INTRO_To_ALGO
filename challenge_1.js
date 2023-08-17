let message = "There is no war in Ba Sing Se";

function countWords(message) {
    // Using the split() method to split the string into an array of words
    let wordsArray = message.split(' ');

    // Counting the number of words in the array
    return wordsArray.length;
}

// Call the function 
console.log("Number of words:", countWords(message));