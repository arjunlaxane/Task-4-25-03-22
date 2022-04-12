//47. Find the name with min characters and return the name.
let friends = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran',
];
let x;
let min = friends[0].length;
for (i = 0; i < friends.length; i++) {
  if (friends[i].length <= min) {
    min = friends[i].length;
    x = friends[i];
  }
}
console.log(min, x);
