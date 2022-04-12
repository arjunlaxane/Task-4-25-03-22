//53. How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)

const arr = [
  'Guvi',
  'Geek',
  6,
  'IIT-M RP',
  'Chennai',
  'Amazon',
  'Inc',
  31,
  'SP Infocity',
  'Chennai',
  'Google',
  'Alphabet',
  '34 Amphitheater Parkway',
  'MountainView',
  'Tesla Inc , 32, 333 Santana Row,San Jose',
];

const obj = {
  name: ['Guvi', 'Geek', 6],
  institutuon: ['IIT-M RP', 'Chennai', 'Amazon', 'Inc', 31, 'SP Infocity'],
  address: 'Chennai',
  compan: [
    'Google',
    'Alphabet',
    '34 Amphitheater Parkway',
    'MountainView',
    'Tesla Inc , 32, 333 Santana Row,San Jose',
  ],
};

console.log(obj);
