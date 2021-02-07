Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
- Parameter: a seperator , to to seperate each element of the array, by default it is comma
   - Return: a new array with all the elements joined in order by a seperator.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join(); //"[1,2,3]"
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.join("-"); // [red-green-blue]
     ```
   - `join` accepts a seperator value and  returns one array with all the values in same order seperated by the seperator. It does not change the original array.
   - No it does not mutate the original array

3. `flat`: 
- Parameter:The depth level specifying how deep a nested array structure should be flattened. Defaults to 1
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.flat(); //[1,2,3]
     let sentanceArray = [1,[2,3]];
     sentanceArray.flat();//[1,2,3]
     let sentanceArray = [1,[2,[3]]];
     sentanceArray.flat(2);[1,2,3];//[1,2,3]
     const arr5 = [1, 2, , 4, 5];
     arr5.flat();//[1,2,4,5]
     ```
   - `flat` accepts a depth value and returns one array with all the nesting removed. It does not change the original array.
   - No it does not mutate the original array

4. `push`
- Parameter:The element(s) to add to the end of the array
   - Return:The new length property of the object upon which the method was called.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.push(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.push('dog').join(); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.push('black'); // ['red','green','blue','black']
     ```
   - `push` The push() method adds one or more elements to the end of an array and returns the new length of the array..
   - Yes it mutates the original array

5. `indexOf`
- Parameter: searchElement to locate in the array, and an optional starting index offset which defaults 0
   - Return:The first index of the element in the array; -1 if not found.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.indexOf(2); //1
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.indexOf("A"); //0
     let colors = ['red', 'green', 'blue'];
     colors.indexOf('black'; // -1
     ```
   - `indexOf` The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   - No it does not mutate the original array
6. `lastIndexOf`
- Parameter: searchElement to locate in the array, and an optional starting index offset which defaults array.length-1
   - Return:The last index of the element in the array; -1 if not found.
   - Example:
     ```js
     let numbers = [1, 2, 2, 3];
     numbers.lastIndexOf(2); //2
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').lastIndexOf("dog"); //8
     let colors = ['red', 'green', 'blue'];
     colors.lastIndexOf('black'); //-1
     ```
   - `lastIndexOf` The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex
   - No it does not mutate the original array

7. `includes`
- Parameter: searchElement to locate in the array, and an optional starting index offset which defaults to 0
   - Return: true if found and false if not found
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.includes(4); //false
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').includes('dog'); //true
     let colors = ['red', 'green', 'blue'];
     colors.includes('black'); // false
     [1, 2, 3].includes(3, 3);//false
     ```
   - `includes` The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
   - No it does not mutate the original array

8. `reverse`
- Parameter:none
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.reverse(); //[3,2,1]
     [3,2,1].reverse();//[1,2,3]
     ["a","b","c"].reverse(); //["c","b","a"]
     ```
   - `reverse` it reverses the array, The first array element becomes the last, and the last array element becomes the first.
   - It mutates the original array
9. `every`
- Parameter: a callback function which takes three arguments, an element, index and the array on which it is called, last two     arguments are optional.
   - Return: true if the callback function returns a truthy value for every array element. Otherwise, false.
   - Example:
     ```js
     function isLesser(e){
       return e<40;
     }
     let numbers= [1,40,23,23,12];
     numbers.every(isLesser);//false
     ```
   - `every` The every method executes the provided callback function once for each element present in the array until it finds the one where callback returns a falsy value
   - No it does not mutate the original array

10. `shift`
- Parameter: none
   - Return:The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.shift(); //[2,3]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.shift().join(' '); //"quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.shift(); // ['green','blue]
     ```
   - `shift` The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array..
   - It mutates the original array

11. `splice`
- Parameter: n, the index at which to start changing the array. If negative it startes from the end, count- that tells the number of elements to delete from the array
   - Return: An array containing the deleted elements
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.splice(); //returns [] array and numbers array remains same [1,2,3,]
     let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
     let removed = myFish.splice(2, 1, 'drum', 'guitar')//returns ["mandarin"]
     let colors = ['red', 'green', 'blue'];
     colors.splice(0,1,'black', 'red'); // returns ["red"] and array is now ["black", "red", "green", "blue"]
     ```
   - `splice`  method changes the contents of an array by removing or replacing existing elements and/or adding new elements
   - It mutates the original array

12. `find`
- Parameter: a callback function which takes three arguments, an element, index and the array on which it is called, last two     arguments are optional.
   - Return:The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.find((e)=>e>1); //2
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.find(e=>e==="brown"); //"brown"
     let nums = [1,2,3,4,5];
     nums.find(e=>e%2==0); // 2
     ```
   - `find` The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.
   - No it does not mutate the original array


13. `unshift`
- Parameter: The elements to add to the front of the arr.
   - Return:The new length property of the object upon which the method was called.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.unshift(0); //[0,1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.unshift("Then"); //"Then A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.unshift("blue"); // ['blue','red', 'green', 'blue']
     ```
   - `unhshift` The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
   - It mutates the original array

14. `findIndex`
- Parameter: a callback function which takes three arguments, an element, index and the array on which it is called, last two     arguments are optional
   - Return: The index of the first element in the array that passes the test. Otherwise, -1.
   - Example:
     ```js
    const array1 = [5, 12, 8, 130, 44];
    const isLargeNumber = (element) => element > 13;
    array1.findIndex(isLargeNumber);//3
     
     ```
   - `findIndex` The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
   - No it does not mutate the original array

15. `filter`
- Parameter: a callback function which takes three arguments, an element, index and the array on which it is called, last two     arguments are optional
   - Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
   - Example:
     ```js
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6);//["exuberant", "destruction", "present"]
     ```
   - `filter` The filter() method creates a new array with all elements that pass the test implemented by the provided function.
   - No it does not mutate the original array

17. `forEach`
- Parameter:a callback function which takes three arguments, an element, index and the array on which it is called, last two     arguments are optional
   - Return:undefined.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     let newNumbers=[];
    numbers.forEach(e=>newNumbers.push(e+1));//returns undefined,and newNumbers array now has [2,3,4];
     ```
   - `forEach` The forEach() method executes a provided function once for each array element.
   - No it does not mutate the original array, however the callback may mutate the original array elements


18. `map`
- Parameter: Function that is called for every element of arr. Each time callback executes, the returned value is added to newArray.
   - Return: A new array with each element being the result of the callback function.
   - Example:
     ```js
    const array1 = [1, 4, 9, 16];
    const map1 = array1.map(x => x * 2);
    console.log(map1);//[2, 8, 18, 32]
     ```
   - `map` The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
   - No it does not mutate the original array

19. `pop`
- Parameter: none
   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.pop(); //[1,2]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.pop() //"A quick brown fox jumped over a"
     let colors = ['red', 'green', 'blue'];
     colors.pop(); // ['red','green']
     ```
   - `pop` The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
   - It mutates the original array

20. `reduce`
- Parameter: a call back function which executes for every element except when if no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue. 
             The reducer function takes four arguments: Accumulator, Current Value, Current Index, Source Array
             Reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.
   - Return: The single value that results from the reduction.
   - Example:
     ```js
     const array1 = [1, 2, 3, 4];
     const reducer = (accumulator, currentValue) => accumulator + currentValue;
     console.log(array1.reduce(reducer));//10
     console.log(array1.reduce(reducer, 5));//15
     ```
   - `reduce` The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
   - No it does not mutate the original array

21. `slice`
- Parameter: start index if undefined starts from 9 and end index if undefined runs till array.length , they both are optional
   - Return: A new array containing the extracted elements.
   - Example:
     ```js
     const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
     console.log(animals.slice(2));// ["camel", "duck", "elephant"]
     console.log(animals.slice(2, 4));//Array ["camel", "duck"]
     console.log(animals.slice(1, 5));//Array ["bison", "camel", "duck", "elephant"]
     ```
   - `slice` The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
   - No it does not mutate the original array


22. `some`
- Parameter: a callback function to test for each element, taking three arguments:element, index and array, last two are optional
   - Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false
   - Example:
     ```js
  const array = [1, 2, 3, 4, 5];
  const even = (element) => element % 2 === 0;
  console.log(array.some(even));//true
     ```
   - `some` The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
   - No it does not mutate the original array