const axios = require('axios');
const fs = require('fs');

async function updateCountryList() {
    const countryArray = await getListOfCountries();
    writeArrayToFile(countryArray, "../data/countryList.data");
};

async function getListOfCountries() {
    const countryInfoList = await axios.get('https://restcountries.eu/rest/v2/all')
    const countryArray = countryInfoList.data.map(country => {
        return country.name;
    });
    return countryArray;
}

function writeArrayToFile(array, filepath) {
    const jsonContent = JSON.stringify(array);
    fs.writeFile(filepath, jsonContent, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

updateCountryList();

