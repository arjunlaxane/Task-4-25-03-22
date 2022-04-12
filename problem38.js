//38. We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

let friends1 = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran',
];
let friends2 = ['Gabbar', 'Rajinikanth', 'Mass', 'Spiderman', 'Jeff', 'ET'];

function dataHandling(input1, input2) {
  let combinearray = [...input1, ...input2];
  combinearray.sort();
  console.log(combinearray);
}

dataHandling(friends1, friends2);
