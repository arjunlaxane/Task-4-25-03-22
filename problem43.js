//43. Find the friends names who has letter ‘a’ and return the list.

let friends = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran',
];
for (let i = 0; i < friends.length; i++) {
  for (let j = 0; j < friends[i].length; j++) {
    if (friends[i][j] === 'a') {
      console.log(friends[i]);
      break;
    }
  }
}
