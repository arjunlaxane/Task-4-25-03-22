//37.Find the person is ur friend or not.

const friends = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran',
];
function dataHandling(input, name) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === 'Jeff') {
      let x = 'Jeff is my friend';

      return x;
    }
  }
}
console.log(dataHandling(friends, 'Jeff'));
