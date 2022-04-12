//48.Find the average in the array below.
//Make sure you add only the numbers and do avg.

const friendsInfo = [
  6,
  12,
  'Mari',
  1,
  true,
  'Munnabai',
  '200',
  'CaptianAmerica',
  8,
  10,
];

//console.log(typeof friendsInfo[6]);

let sum = 0;
let count = 0;
for (let i = 0; i < friendsInfo.length; i++) {
  if (friendsInfo[i] === +friendsInfo[i]) {
    sum += friendsInfo[i];
    count++;
  } else {
    continue;
  }
}

console.log(sum / count);
