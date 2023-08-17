
let countries = ['China', 'Japan', 'South Korea', 'Vietnam', 'Malaysia'];
let capital = ['Beijing', 'Tokyo', 'Seoul', 'Hanoï', 'Kuala Lumpur'];

function displayCountriesAndCapitals(countries, capitals) {
    if (countries.length !== capitals.length) {
        console.log("Arrays have different lengths. Unable to display.");
        return;
    }

    for (let i = 0; i < countries.length; i++) {
        console.log(`Your country: ${countries[i]} has the capital named: ${capitals[i]}.`);
    }
}

displayCountriesAndCapitals(countries, capital);
