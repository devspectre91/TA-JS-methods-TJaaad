let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
var sorted = [];

function findLongestWord(arr) {
  sorted = [...arr].sort((a, b) => a.length - b.length);
  return sorted[sorted.length - 1];
}
findLongestWord(words); //"crocodile"

// - Convert the above array "words" into an array of length of word instead of word.
for (let i = 0; i < sorted.length; i++) {
  sorted[i] = sorted[i].length;
}
// - Create a new array that only contains word with atleast one vowel.
var containsVowel = [];
for (word of words) {
  if (word.includes("a") || word.includes("e") || word.includes("i") || word.includes("o") || word.includes("u")) {
    containsVowel.push(word);
  }
}
console.log(containsVowel);
// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));
// - Create a new array that contians words not starting with vowel.
var noStartingVowel = [];

for (word of words) {
  if (!(word.startsWith("a") || word.startsWith("e") || word.startsWith("i") || word.startsWith("o") || word.startsWith("u"))) {
    noStartignVowel.push(word);
  }
}
console.log(noStartingVowel);
// - Create a new array that contains words not ending with vowel
var noEndingVowel = [];

for (word of words) {
  if (!(word.endsWith("a") || word.endsWith("e") || word.endsWith("i") || word.endsWith("o") || word.endsWith("u"))) {
    noEndingVowel.push(word);
  }
}
console.log(noEndingVowel);


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arr) {
  return arr.reduce((a, c) => a + c);
}
sumArray(numbers);

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let thrice = [];
for (number of numbers) {
  thrice.push(number * 3);
}
// - Create a new array that contains only even numbers
let evenNumbers = [];
for (number of numbers) {
  if (number % 2 == 0) {
    evenNumbers.push(number);
  }
}
console.log(evenNumbers);
// - Create  a new array that contains only odd numbers.
let oddNumbers = [];
for (number of numbers) {
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
}
console.log(oddNumbers);
// - Create a new array that should have true for even number and false for odd numbers.
let booleanNumbers = [];
for (number of numbers) {
  if (number % 2 !== 0) {
    booleanNumbers.push(false);
  }
  else {
    booleanNumbers.push(true);
  }
}
console.log(booleanNumbers);
// - Sort the above number in ascending order.
numbers.sort((a, b) => a - b);
// - Does sort mutate the original array?
Yes, it mutates the original "Array"
// - Find the sum of the numbers in the array.
numbers.reduce((a, c) => a + c);//87
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(arr) {
  let sum = arr.reduce((a, c) => a + c);
  return sum / arr.length;
}
averageNumbers(numbers);//8.7
let words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(arr) {

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].length;
  }
  let sum = arr.reduce((a, c) => a + c);
  return sum / arr.length;
}

averageWordLength(words2);