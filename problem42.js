//42. Concat all the names the friends array and return as comma “,” seperated string

let friends = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran',
];

let dummy = '';
//let splitArray = str.split("").join(" ");
//console.log(splitArray);

//console.log(str.join(" "));

for (let i = 0; i < friends.length; i++) {
  dummy += friends[i] + ',' + ' ';
}
let z = dummy.trim();
console.log(z.slice(0, -1));
