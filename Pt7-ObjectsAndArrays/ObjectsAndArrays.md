## Objects and Arrays

![Tutorial image](https://3.bp.blogspot.com/-uC-z0H0yz30/WPinzD81E-I/AAAAAAAAAyY/q1JNzl1Ge4M9R1XN8KvLyMbhQds_1amWQCEw/s1600/javascriptTutorial7B.jpg)

Hello and welcome to another Javascript tutorial. In this tutorial, we will take a brief look at Javascript objects and arrays.

A Javascript object is a container which has several name:value pairs separated by commas and is, for sure, one of the most fundamental aspects of Javascript. You can create an object by enclosing its pairs in curly braces, like so:

```javascript
//Creating an empty object.
var firstObject = {};
```

This is an empty object because it has no pairs. A non-empty object would look like:

```javascript
// Non-empty object.
var id = {

name: 'George',
lastName: 'Kamtziridis',
age: 20

};
```

As you can see, the 'id' object consists of 3 pairs. The pair's name must follow the variable naming rules and it is, generally, called property. However, if you enclose your property name in quotes you can, simply, forget the naming rules. Don't do that, though. It may cause unnecessary confusion. So, the 'id' object has a 'name' property, a 'lastName' property and a 'age' property. The pair's value can be any primitive data, object or function. If you don't know what a function is, don't worry. We will see what's up with those in a future tutorial. 

This is how we can create one. How can we interact with it, though? We can interact with it by accessing its properties. To do that, we use the object's name followed by the dot ('.') operator followed by the property's name. So, to get our object's name we do:

```javascript
console.log(id.name);
```

We can, also, access our object's properties by doing:

```javascript
console.log(id['name']);
```

Both can be used, but in Object Oriented Programming languages (these are languages that are, mainly, based on objects and Javascript is one of them) the dot notation conquers. Its, only, disadvantage is that it cannot be used when your property does not follow the variable naming rules:

```javascript
var test = {

'my-name': 'George'

};

//You cannot do that.
console.log(test.my-name);

//You must use the other notation.
console.log(test['my-name']);
```

But as I mentioned above, avoid using property names inside quotes that don't follow the variable naming rules and you will have no problem using the dot notation.

In Javascript, almost, everything is an object. We can even have number, string and Boolean objects! You'll learn about that in a future tutorial. 

Arrays are objects too. But, what is an array? An array in programming is, essentially, a list that contains data separated by commas, in a specific order. Basically, it contains data in arithmetic order (first, second, third and so on and so forth). Its data are enclosed in square braces. We can declare an array by doing:

```javascript
//Creating an empty array.
var firstArray = [];

//Creating a non-empty array.
var marks = [85, 92, 100, 63];

//You must use the other notation.
console.log(test['my-name']);
```

In an array, each value has an index. Array indexes start with 0. So, to access a mark we do:

```javascript
//Access the first mark.
console.log(marks[0]);

//Access the fourth mark.
console.log(marks[3]);
```

Remember, array indexes start with 0. So, to access the fourth mark you must get the element with index 3.

An array can have any type of data. The most fascinating part about arrays, is that they can have different types of data at the same time. That's a privilege that not many programming languages have.

```javascript
var amazingRight = ['I am a string', 55.5, 5, true];

console.log(amazingRight[0]);

console.log(amazingRight[1]);

console.log(amazingRight[2]);

console.log(amazingRight[3]);
```

That was a very quick overview at objects and arrays. Their power, also, lies in the functions that they may have. But, currently we don't know what a function is. Stay tuned and you will find out soon.
