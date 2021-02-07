let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push("Papaya");

// Remove the last element from fruits array
fruits.push();
// Log the current length of fruits array
console.log(fruits.length);
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0];
// Log the element on index 0 and 1
console.log(fruits[0]);//undefined
console.log(fruits[1]);//"orange"
// If the element at 0 index is undefined and index 1 is 'Orange' shift all the values to one lower index (use shift method)
fruits.shift();

// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift("guava");
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift("Dragon Fruit");

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'guava' or not
console.log(fruits[0] === "Dragon Fruit" && fruits[1] === "guava");//true
// Update the value of index 1 to `Pears`
fruits[1] = "Pears";
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1, 0, "Kiwi", "Lemon");
// Remove (slice) all the element from index 5
fruits.slice(5);
// Create another array named moreFruits with values ['Berries', 'Melons']
moreFruits = ["Berries", "Melons"];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits = fruits.concat(moreFruits);
// Log the name of all fruit in console
fruits.forEach(e => console.log(e));
// Convert each fruit name to lowercase and log it
fruits.forEach(e => console.log(e.toLowerCase());
// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits = [];
fruits.forEach(e => lowercaseFruits.push(e.toLowerCase());
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits = [];
fruits.forEach(e => uppercaseFruits.push(e.toUpperCase();


let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
numbers = numbers.flat();
console.log(numbers);
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
numbersTwo = numbersTwo.flat(2);
numbersTwo.forEach(e => console.log(e));
// Convert the numbersThree array to one level element.
numbersThree = numbersThree.flat(4);

// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
numbersThree.forEach(e => console.log(e));

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let doubleNumbers = numbersThree.map(e => e * 2);
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers = numbersThree.map(e => e * 3);
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let tripleNumbers = numbersThree.map(e => e / 2);
// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers = numbersThree.filter(e => e % 2 !== 0);
// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers = numbersThree.filter(e => e % 2 == 0);
// Find the index of 10 in numbersThree array
numbersThree.indexOf(10);//9
// Reverse the values of numbersThree array
numbersThree.reverse();
// Reverse the values of numbersTwo array
numbersTwo.reverse();
// Join all fruits with '-', convert to uppercase and log it
console.log(fruits.join("-").toUpperCase());
// Join all fruits with '&', convert to lowercase and log it
console.log(fruits.join("&").toLowerCase());