//36.Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

let friends = [
  'Mari',
  'MaryJane',
  'CaptainAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran',
];

function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === 'CaptainAmerica') {
      break;
    } else {
      console.log(input[i]);
    }
  }
}

console.log(dataHandling(friends));

for (let i = 0; i < friends.length; i++) {
  if (friends[i] === 'CaptainAmerica') {
    break;
  } else {
    console.log(friends[i]);
  }
}
