#!/usr/bin/env node

const {
    getCode,
    getName
} = require('country-list');
const axios = require('axios');
var dayjs = require('dayjs');


//recup pays
// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });

let country = process.argv[2];
let year = process.argv[3];
if (year === undefined) {
    year = new Date().getFullYear();

}

if (country != undefined) {
    let countryCode = getCode(country);
    if (countryCode != undefined) {
        axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${countryCode}`)
            .then((response) => {
                // handle success
                response.data.forEach(element => {
                    let datebe = dayjs(element.date).format('dddd, DD MMMM YYYY');





                    console.log(datebe + " : " +
                        element.localName);

                });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });

    }
}