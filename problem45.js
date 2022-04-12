//45. Find the names and return the list starting with letter M.

let friends = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran',
];

for (let i = 0; i < friends.length; i++) {
  if (friends[i][0] === 'M') {
    console.log(friends[i]);
  }
}
