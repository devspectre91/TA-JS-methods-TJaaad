Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   -Parameter: none
   -Return:, it gives a new string capitalizing the calling string, also it gives type a error when run on null or undefined
   -Example:
   ```js
   let str="Alt Campus, Dharamshala"
   str.toUpperCase();// "ALT CAMPUS, DHARAMSHALA"
   let str2="  abcd   ";
   str2.toUpperCase();//"  ABCD   "
   let str3="1234";
   str3.toUpperCase();//"1234"
3. `toLowerCase`
-Parameter: none
   -Return: it gives a new string capitalizing each character in it
   -Example:
   ```js
   let str4="Alt Campus, Dharamshala"
   str4.toLowerCase();// "alt campus, dharamshala"
   let str5="  Abcd   ";
   str5.toLowerCase();//"  abcd   "
   let str6="1234";
   str6.toLowerCase();//"1234"
```
-`toLowerCase` returns a new string in capitalized form, when it is applied on a string

4. `trim`
  

-Parameter: none
   -Return:new string with white spaces removed from both ends
   -Example:
   ```js
   let str4="   Alt Campus, Dharamshala    "
   str4.trim();// "Alt Campus, Dharamshala"
   let str5="  Abcd   ";
   str5.trim();//"ABCD"
   let str6="   12  34";
   str6.trim();//"12  34"
```
-`trim` returns a new string with any type of spaces removed from star and end, when it is applied on a string

5. `trimEnd`

-Parameter: none
   -Return:new string with white spaces removed from right end
   -Example:
   ```js
   let str4="   Alt Campus, Dharamshala    "
   str4.trim();// "   Alt Campus, Dharamshala"
   let str5="  Abcd   ";
   str5.trim();//"   ABCD"
   let str6="   12  34";
   str6.trim();//"   12  34"
```
-`trimEnd` returns a new string with any type of spaces removed from the end, when it is applied on a string
6. `trimStart`

-Parameter: none
   -Return:new string with white spaces removed from right end
   -Example:
   ```js
   let str4="   Alt Campus, Dharamshala    "
   str4.trim();// "Alt Campus, Dharamshala   "
   let str5="  Abcd   ";
   str5.trim();//"ABCD   "
   let str6="   12  34";
   str6.trim();//"12  34"
```
-`trimStart` returns a new string with any type of spaces removed from the start, when it is applied on a string


7. `concat`

-Parameter: srings seperaed by commas to be concatenated o the calling string.
   -Return:new string having all the srings combined.
   -Example:
   ```js
   let str7="Alt Campus, Dharamshala"
   str7.concat(", ", "start learning");// "Alt Campus, Dharamshala, start learning"
  str7.concat("");//"Alt Campus, Dharamshala";
  str7.concat({})//"Alt Campus, Dharamshala[object Object]"
  str.concat(null)//"Alt Campus, Dharamshalanull"
```
-`concat` returns a new string which is the combination of orin=ginal string combined with specified string.

8. `endsWith`

-Parameter: the first param is a string that has to be searched at the end of a string, and the second param is length of string which defaults to string length.
-Return: true if the search string is found at the specified end.
-Example: 
```js 
   let str= "hello world this is devanshu";
   str.endsWith("o", 5); //true
   str.endWith(); //false
   str.endWith("devanshu")//true
```
-`endsWith` returns a boolean value based on the presence of a search string at the specified end value. 

9. `includes`

-Parameter: the first param is a string that has to be searched in the string, and the second param is the position from where the search has to start, defaults to 0. It is optional.
-Return: true if the search string is found.
-Example: 
```js 
   let str= "hello world this is devanshu";
   str.includes("o", 5); //true
   str.includes("dev"); //true
   str.includes("l",5)//false
```
-`includes` returns a boolean value based on the presence of a search string in a string, where we can start searching from a specified position.

10. `indexOf`
-Parameter: the first param is a string that has to be searched in the string which defaults to "undefined", and the second param is the position from where the search has to start, defaults to 0. It is optional.
-Return: it returns an integer specifying the first occurence of the search string, if not foud it returns -1. Position starts from 0
-Example: 
```js 
   let str= "hello world this is devanshu";
   str.indexOf("o"); //4
   str.indexOf("dev"); //20
   str.indexOf("l")//2
   str.indexOf("l",5)//9
```
-`indexOf` returns an integer specify the first occurence if a search string in a given string, it starts searching from the start position provided. If not found returns to -1

11. `lastIndexOf`

-Parameter: the first param is a string that has to be searched in the string, and the second param is the index value upto where the search has to be done. Its default value is +Infinity and it is optional.
-Return: it returns an integer specifying the last occurence of the search string, if not foud it returns -1. Position starts from 0
-Example: 
```js 
   let str= "hello world this is devanshu";
   str.lastIndexOf("o"); //7
   str.lastIndexOf("dev"); //20
   str.lastIndexOf("l")//9
   str.lastIndexOf("l",5)//3
```
-`lastIndexOf` returns an integer specify the last occurence if a search string in a given string, it starts searching from the start position provided. If not found returns to -1

12. `padEnd`

-Parameter: the first param is the length after padding (if its value is lower than string length the current string will be returned), and second param is the string that has to be padded at the end of the string, by default it is " ". It is optional
-Return:it returns a new string with the provided string padded at the end
-Example: 
```js 
   let str= "hello world this is devanshu";
   str.padEnd(3,"*"); //"hello world this is devanshu"
   str.padEnd(30,"*"); //"hello world this is devanshu**"
   "hello".padEnd(5," ")//"hello"
   "hello".padEnd(10, " ")//"hello     "
```
-`padEnd` returns a new string padding the given string at the end such that the length of new string is equal to the length provided.
13. `padStart`

-Parameter: the first param is the length after padding (if its value is lower than string length the current string will be returned), and second param is the string that has to be padded at the start of the string, by default it is " ". It is optional
-Return:it returns a new string with the provided string padded at the start
-Example: 
```js 
   let str= "hello world this is devanshu";
   str.padEnd(3,"*"); //"hello world this is devanshu"
   str.padEnd(30,"*"); //"**hello world this is devanshu"
   "hello".padEnd(5," ")//"hello"
   "hello".padEnd(10, " ")//"     hello"
```
-`padStart` returns a new string padding the given string at the start such that the length of new string is equal to the length provided.

14. `repeat`

-Parameter: the first param is the length after padding (if its value is lower than string length the current string will be returned), and second param is the string that has to be padded at the end of the string, by default it is " ". It is optional
-Return:it returns a new string with the provided string padded at the end
-Example: 
```js 
   let str= "hello world this is devanshu";
   str.padEnd(3,"*"); //"hello world this is devanshu"
   str.padEnd(30,"*"); //"hello world this is devanshu**"
   "hello".padEnd(5," ")//"hello"
   "hello".padEnd(10, " ")//"hello     "
```
-`padEnd` returns a new string padding the given string at the end such that the length of new string is equal to the length provided.

15. `replace`

-Parameter: the first param is a regex or a substring that has to be replaced if found in given string and the seond param is a function or a string that is to be inserted in place of found match. 
-Return:it returns a new string with specified replacement at the first occurence of provided string.
-Example: 
```js 
   let str= "hello world this is devanshu";
   str.replace("hello", "hi");// "hi world this is devanshu";
   str.replace("", "*");// "*hello world this is devanshu";
   str.replace("devanshu", "ajay");// "hello world this is ajay";
  

  
```
-`replace` The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 

16. `slice`

-Parameter: the first param is the beginning index from where the string has to be cut, the second param is the end index upto where the string has to be cut. The character at end index is not included in sliced string. It is optional and defaults to end of the string.
-Return:A new string containing the extracted section of the string. But if the end index is greater than start index "" is returned.
-Example: 
```js 
   let str= "hello world this is devanshu";
   str.slice(4);//o world this is devanshu";
   str.slice(4,5);//"o"
  "hello".slice(0,2);//"he"
```
-`slice` returns a part of the string between the specified indices.

17. `split`

-Parameter: the first param is the seperator which is either a string or a regex. The second param is a limit value on the no of splits to be included in the output string.
-Return:it returns an array of sub strings.
-Example: 
```js 
   let str= "hello world this is devanshu";
   str.split(" ");//["hello", "world", "this", "is", "devanshu"]
  "hello-world-this-is-devanshu".split("-")//  ["hello", "world", "this", "is", "devanshu"]
  "hello-world-this-is-devanshu".split("-",2)//  ["hello", "world"]

```
-`split` returns an array containing ordered substrings from a given string based on the split patter provided.


18. `substring`

-Parameter: the first param is the index of the first character to be included in return string and the second param is the index of the first charcater that has to be excluded from the putput string. It is by default the end of string. If the start value is greater than the second param , they are considered as swapped.
-Return:it returns a sub string within specified indices
-Example: 
```js 
   let str= "hello world this is devanshu";
   str.substring(0,1);// "h"
   str.substring(1,0);// "h"
   str.substring(0,3);// "hel"
   str.substring(0);//"hello world this is devanshu";

  
```
-`subString` returns a part of the string between the specified indices.