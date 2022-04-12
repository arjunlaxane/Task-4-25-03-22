//46. Find the name with max characters and return the name.

let friends = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran',
];
let x;
let max = friends[0].length;
for (i = 0; i < friends.length; i++) {
  if (friends[i].length > max) {
    max = friends[i].length;
    x = friends[i];
  }
}
console.log(max, x);
