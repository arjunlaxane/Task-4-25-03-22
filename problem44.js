//44. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

let friends = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran',
];
let sum = 0;
for (let i = 0; i < friends.length; i++) {
  sum += friends[i].length;
  console.log(sum);
}
console.log(sum);
let avg = sum / friends.length;
console.log(avg.toFixed(3));
