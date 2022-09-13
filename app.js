/* eslint-disable no-undef */
const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
 function getCountryByIso3(isoCode){
    //Complete with your code
    let iso = countries.filter(element => element.iso3 = isoCode)
    return iso;
}
/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
 function getCountryTranslatedName(isoCode, language){
    let codigoIso = countries.filter(element => element.codigoIso3 = isoCode);
    let codigoIso2 = codigoIso.filter(element => element.translations = language);
    let codigoIso3 = JSON.stringify(codigoIso2);
    return codigoIso3;
    //Complete with your code
}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    //Complete with your code
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();