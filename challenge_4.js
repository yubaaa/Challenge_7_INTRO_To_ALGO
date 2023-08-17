function checkSeason(month) {
    if (typeof month !== 'number' || month < 1 || month > 12) {
        return "Invalid month";
    }

    if (month >= 3 && month <= 5) {
        return "Spring";
    } else if (month >= 6 && month <= 8) {
        return "Summer";
    } else if (month >= 9 && month <= 11) {
        return "Autumn";
    } else {
        return "Winter";
    }
}

console.log(checkSeason(3));   // Output: Spring
console.log(checkSeason(7));   // Output: Summer
console.log(checkSeason(10));  // Output: Autumn
console.log(checkSeason(12));  // Output: Winter
console.log(checkSeason(13));  // Output: Invalid month