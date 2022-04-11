'use strict';

//Q.1)How to compare two JSON have the same properties without order?
//var obj1 = { name: "Person 1", age:5 };
//var obj2 = { age:5, name: "Person 1" };

var obj1 = { name: 'person 1', age: 5 };
var obj2 = { age: 5, name: 'person 1' };
const isEqualOrNot = function (obj1, obj2) {
  const obj1Keys = Object.keys(obj1); //array
  const obj2Keys = Object.keys(obj2); //array
  //console.log(obj1Keys);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let objKey of obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      // console.log(obj1[objKey], typeof obj2[objKey]);
      if (
        typeof obj1[objKey] === 'object' &&
        typeof obj2[objKey] === 'object'
      ) {
        if (!isEqualOrNot(obj1[objKey], obj2[objKey])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};
console.log(isEqualOrNot(obj1, obj2));

//Q.2)Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

//How it is giving ans if we type countries
const getCountriesFlags = () => {
  //creating request
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://restcountries.com/v3.1/all'); //open
  xhr.send(); //send
  xhr.responseType = 'json'; //data format
  xhr.onload = () => {
    const countries = xhr.response;
    const countryFlags = countries.map(country => country.flags.png);
    console.log('Countries flags', countryFlags);
  };
};

getCountriesFlags();

//Q.3)Use the same rest countries and print all countries name, region, sub region and population

const getCountriesDetails = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://restcountries.com/v3.1/all'); //open;
  xhr.send();
  xhr.responseType = 'json';
  xhr.onload = () => {
    const countries = xhr.response;
    const countryNames = countries.map(country => country.name.common);
    //console.log('Countries Names', countryNames);
    const countryRegion = countries.map(country => country.region);
    console.log('Countries region', countryRegion);
    const countrySubRegion = countries.map(country => country.subregion);
    console.log('Countries subregion', countrySubRegion);
    const countryPopulation = countries.map(country => country.population);
    console.log('Countries population', countryPopulation);
  };
};
getCountriesDetails();
