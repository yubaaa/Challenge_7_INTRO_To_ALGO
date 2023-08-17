
let randomizer = Math.floor(Math.random() * 4); // Generates a random number between 0 and 3

let fate;

if (randomizer === 0) {
    fate = "A certain victory";
} else if (randomizer === 1) {
    fate = "not so certain victory";
} else if (randomizer === 2) {
    fate = "an uneasy victory";
} else {
    fate = "Your fate is unclear, ô chosen undead";
}

console.log("Your fate:", fate);
