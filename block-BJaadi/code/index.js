// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));//8

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));//11

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentence"
strings = strings.concat("called", "sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
for (element of strings) {
  if (element.includes("is")) {
    console.log(element);
  }
}
// - Find all the words that contain 'is' use string method 'indexOf'
for (element of strings) {
  if (element.indexOf("is") !== -1) {
    console.log(element);
  }
}
// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every(e => e % 3 == 0));//false
// -  Sort Array from smallest to largest
[...numbers].sort(function (a, b) {
  return a - b;
});
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
let sortedNumbers = [...numbers].sort(function (a, b) {
  return a - b;
});
console.log(sortedNumbers[sortedNumbers.length - 1]);
// - Find longest string in strings
let sortedStrings = [...strings].sort((a, b) => a.length - b.length);
console.log(`The longest string is ${sortedStrings[sortedStrings.length - 1]}`);
// - Find all the even numbers
console.log(numbers.filter(e => e % 2 == 0));
// - Find all the odd numbers
console.log(numbers.filter(e => e % 2 !== 0));
// - Place a new word at the start of the array use (unshift)
strings.unshift("Hello");
// - Make a subset of numbers array [18,9,7,11]
numSubset = numbers.slice(3, 7);
// - Make a subset of strings array ['a','collection']
subStrings = strings.slice(3, 5);
// - Replace 12 & 18 with 1221 and 1881
numbers[numbers.indexOf(12)] = 1221;
numbers[numbers.indexOf(18)] = 1881;
// - Replace words in strings array with the length of the word
for (let i = 0; i < strings.length; i++) {
  strings[i] = strings[i].length;
}
// - Find the sum of the length of words using above question
let sum = 0;
for (element of strings) {
  sum = sum + element;
}
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
console.log(customers.filter(e => e.firstname.startsWith("J")));
// - Create new array with only first name
let newArray = [];
for (customer of customers) {
  newArray.push(customer.firstname);
}
console.log(newArray);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullNames = [];
for (customer of customers) {
  fullNames.push(customer.firstname + " " + customer.lastname);

}
console.log(fullNames);
// - Sort the array created above alphabetically
fullNames.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.

function myfunction(e) {
  return e.firstname.includes("a") || e.firstname.includes("e") || e.firstname.includes("i") || e.firstname.includes("o") || e.firstname.includes("u");
}
newCustomers = customers.filter(myfunction);