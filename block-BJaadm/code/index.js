let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of name key from persons array

let peopelName = persons.map(e => e.name);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map(e => e.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopelSex = persons.map(e => e.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopelName.filter(e => e.startsWith("J") || e.startsWith("P")));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
(peopelName.filter(e => e.startsWith("A") || e.startsWith("C"))).forEach(e => console.log(e.length));
// Log all the filtered male ('M') in persons array
(persons.filter(e => e.sex == "M")).forEach(e => console.log(e));
// Log all the filtered female ('F') in persons array
(persons.filter(e => e.sex == "F")).forEach(e => console.log(e));
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
((persons.filter(e => e.sex == "F")).filter(e => e.name.startsWith("C") || e.name.startsWith("J"))).forEach(e => console.log(e));
// Log all the even numbers from peopleGrade array
peopleGrade.filter(e => e % 2 == 0).forEach(e => console.log(e));
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find(e => e.name.startsWith("J")));
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find(e => e.name.startsWith("P")));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.find(e => e.name.startsWith("J") && e.grade > 10 && e.sex == "F"));
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(e => e.sex == "F");
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(e => e.sex == "M");
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((a, c) => a + c);
// Find the average grade
console.log(gradeTotal / peopleGrade.length);
// Find the average grade of male
console.log((malePersons.map(e => e.grade).reduce((a, c) => a + c)) / malePersons.length);
// Find the average grade of female
console.log((femalePersons.map(e => e.grade).reduce((a, c) => a + c)) / femalePersons.length);
// Find the highest grade
peopleGrade.sort((a, b) => a - b);
console.log(peopleGrade[peopleGrade.length - 1]);
// Find the highest grade in male
let maleGrades = malePersons.map(e => e.grade);
maleGrades.sort((a, b) => a - b);
console.log(maleGrades[maleGrades.length - 1]);
// Find the highest grade in female
let femaleGrades = femalePersons.map(e => e.grade);
femaleGrades.sort((a, b) => a - b);
console.log(femaleGrades[femaleGrades.length - 1]);
// Find the highest grade for people whose name starts with 'J' or 'P'
let customPeople = (persons.filter(e => e.name.startsWith("J") || e.name.startsWith("P"))).map(e => e.grade);
customPeople.sort((a, b) => a - b);
console.log(customPeople[customPeople.length - 1]);
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a, b) => a - b);
console.log(peopleGrade);
// Sort the peopleGrade in descending order
peopleGrade.sort((a, b) => b - a);
console.log(peopleGrade);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a, b) => b - a););
// Sort the array peopelName in ascending `ABCD..Za....z`
peopelName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopelName].sort();