---
title: "JavaScript: Array Tips and Tricks You Should Know"
description: In this article, we will look at some of the tips that you should know about manipulating arrays in javascript.
img: https://engineering.fb.com/wp-content/uploads/2012/12/javascript-illustration.png
category: Cheat Sheet
tags: ['javascript','tips and tricks']
createdAtDate: 2021-04-27T00:00:00.000Z
---

We already know that aside from objects, most of the time we use arrays on every javascript program. It is one of the important types that anyone should know.

In this article, we will look at some of the tips that you should know about manipulating arrays in javascript. 

### Number One: How to remove **duplicates** inside an array?
Sometimes we only want unique data in our array, so how can we do this? we do this by using `Set` object. Because a set should contain a unique value, so it removes the duplicates.

```javascript
var numbers = [“1”, “2”, “3”, “4”, “5”, “3”, “9”, “1”];

var uniqueNumbers = […new Set(numbers)];
console.log(uniqueFruits2);
// returns [“1”, “2”, “3”, “4”, “5”,"9"]
```

### Number 2: How to replace a specific value in an Array?

Sometimes it’s necessary to replace a specific value in the array while creating code, and there is a nice short method to do it which you might not know yet. For this, we may use .splice(start, value to remove, valueToAdd) and pass there all three parameters specifying where we want to start modification, how many values we want to change and the new values.

```javascript
var fruits = [“banana”, “apple”, “orange”, “watermelon”, “apple”, “orange”, “grape”, “apple”];
fruits.splice(0, 2, “potato”, “tomato”);
console.log(fruits); // returns [“potato”, “tomato”, “orange”, “watermelon”, “apple”, “orange”, “grape”, “apple”]

```

### 3. Map array without .map()

Probably everyone knows .map() method of arrays, but there is a different solution that may be used to get a similar effect and very clean code as well. We can use .from() method for this purpose.

```javascript
var friends = [
    { name: ‘John’, age: 22 },
    { name: ‘Peter’, age: 23 },
    { name: ‘Mark’, age: 24 },
    { name: ‘Maria’, age: 22 },
    { name: ‘Monica’, age: 21 },
    { name: ‘Martha’, age: 19 },
]
 

var friendsNames = Array.from(friends, ({name}) => name);
console.log(friendsNames); // returns [“John”, “Peter”, “Mark”, “Maria”, “Monica”, “Martha”]

```

### 4. Empty an array

Do you have an array full of elements but you need to clean it for any purpose, and you don’t want to remove items one by one? It’s very simple to do it in one line of code. To empty an array, you need to set an array’s length to 0, and that’s it!

```javascript
var fruits = [“banana”, “apple”, “orange”, “watermelon”, “apple”, “orange”, “grape”, “apple”];
 

fruits.length = 0;
console.log(fruits); // returns []

```

### 5. Convert array to an object

It happens that we have an array, but for some purpose, we need an object with this data, and the fastest way to convert the array into an object is to use a well-known spread operator (…).

```javascript
var fruits = [“banana”, “apple”, “orange”, “watermelon”];
var fruitsObj = { …fruits };
console.log(fruitsObj); // returns {0: “banana”, 1: “apple”, 2: “orange”, 3: “watermelon”, 4: “apple”, 5: “orange”, 6: “grape”, 7: “apple”}

```

### 6. Fulfill array with data

There are some situations when we create an array, and we would like to fill it with some data, or we need an array with the same values, and in this case .fill() method comes with an easy and clean solution.

```javascript
var newArray = new Array(10).fill(“1”);
console.log(newArray); // returns [“1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”]

```

### 7. Merge arrays

Do you know how to merge arrays into one array not using .concat() method? There is a simple way to merge any amount of arrays into one in one line of code. As you probably realized already spread operator (…) is pretty useful while working with arrays and it’s the same in this case.

```javascript
var fruits = [“apple”, “banana”, “orange”];
var meat = [“poultry”, “beef”, “fish”];
var vegetables = [“potato”, “tomato”, “cucumber”];
var food = […fruits, …meat, …vegetables];
console.log(food); // [“apple”, “banana”, “orange”, “poultry”, “beef”, “fish”, “potato”, “tomato”, “cucumber”]

```

### 8. Find the intersection of two arrays

It’s also one of the most popular challenges which you can face on any Javascript interview because it shows if you can use array methods and what is your logic. To find the intersection of two arrays, we will use one of the previously shown methods in this article, to make sure that values in the array we are checking are not duplicated and we will use .filter method and .includes method. As a result, we will get the array with values that were presented in both arrays. Check the code:

```javascript
var numOne = [0, 2, 4, 6, 8, 8];
var numTwo = [1, 2, 3, 4, 5, 6];
var duplicatedValues = […new Set(numOne)].filter(item => numTwo.includes(item));
console.log(duplicatedValues); // returns [2, 4, 6]

```

### 9. Remove falsy values from an array

At first, let’s defined falsy values. In Javascript, falsy values are false, 0, „”, null, NaN, undefined. Now we can find out how to remove this kind of values from our array. To achieve this, we are going to use the .filter() method.

```javascript
var mixedArr = [0, “blue”, “”, NaN, 9, true, undefined, “white”, false];
var trueArr = mixedArr.filter(Boolean);
console.log(trueArr); // returns [“blue”, 9, true, “white”]

```

### 10. Get random value form the array

Sometimes we need to select a value from the array randomly. To create it in an easy, fast, and short way and keep our code clean we can get a random index number according to the array length. Let’s see the code:

```javascript
var colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];
var randomColor = colors[(Math.floor(Math.random() * (colors.length)))]

```

### 11. Reversing an array

When we need to flip our array there is no need to create it through the complicated loops and functions, there is an easy array method which does it all for us, and with one line of code, we may have our array reversed. Let’s check it:

```javascript
var colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];
var reversedColors = colors.reverse();
console.log(reversedColors); // returns [“brown”, “black”, “yellow”, “orange”, “purple”, “pink”, “navy”, “green”, “white”, “blue”]

```

### 12. .lastIndexOf() method

In Javascript, there is an interesting method which allows finding the index of the last occurrence of the given element. For example, if our array has duplicated values, we can find the position of the last occurrence of it. Let’s see the code example:

```javascript
var nums = [1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7];
var lastIndex = nums.lastIndexOf(5);
console.log(lastIndex); // returns 9

```

### 13. Sum all the values in the array

Another challenge which happens very often during Javascript Engineer interviews. Nothing scary comes here; it can be solved using .reduce method in one line of code. Let’s check out the code:

```javascript
var nums = [1, 5, 2, 6];
var sum = nums.reduce((x, y) => x + y);
console.log(sum); // returns 14

```

### Conclusion

In this article, I presented you 13 tricks and tips which can help you with coding and keep your code short and clean. Also, remember there are lots of different tricks which you may use in Javascript worth exploring, not only about arrays but also different data types. I hope you like the solutions provided in the article, and you will use them to improve your development process.

Have a nice coding!

### REF:
https://www.blog.duomly.com/13-useful-javascript-array-tips-and-tricks-you-should-know/

### Related readings 📖

[How to code – learn step by step how to become a programmer with Duomly](https://www.blog.duomly.com/how-to-code-learn-step-by-step-how-to-become-a-programmer-with-duomly/)

[For loop, while loop, do…while loop and other JavaScript loops – comparison and performance](https://www.blog.duomly.com/for-loop-while-loop-do-while-loop-and-other-javascript-loops-comparison-and-performance/)
