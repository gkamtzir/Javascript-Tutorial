## Filter, Map and Reduce

![Tutorial image](https://4.bp.blogspot.com/-Q3Pxd5IxmVI/WQtfrjAsZNI/AAAAAAAAA1w/Kg4MNPbuxJ8zXunoMIOiK-24MdGmO5d3wCLcB/s1600/javascriptTutorial10B.jpg)

Hello and welcome to another Javascript tutorial. This is the last tutorial of the beginners series, but don't worry because there will be an intermediate tutorial series too. During these 2 weeks, you've learned a lot about Javascript. Most of that knowledge was basic. However, it is enough to build simple, yet useful, programs. So, keep up the learning and if you want to read through our next Javascript tutorials first, don't forget to like our Facebook page!

In this final tutorial, we will have a look at 3 basic functions that make Javascript a very delightful language. These 3 functions are widely used in Functional Programming. But what exactly is Functional Programming? You probably remember that Object-Oriented Programming is a programming approach that depends on objects. Following the same logic, Functional Programming is a programming approach that relies on functions. You don't have to know anything else about it right now. We will dive into Functional Programming in a future tutorial.

Let's see our functions one by one. First, we have the *filter* function. This function is used on arrays and takes as an argument a *callback*. But, what is a *callback*? A *callback* is a function that is passed to another function as a parameter. Simple as that. This *callback* is executed for each element of the array and finally produces a new filtered array. It sounds pretty confusing but you will feel much better when you read the example. This *callback* takes 3 arguments: the element that is being processed, its index and the array that was called upon. Let's have a look at the following example:

```javascript
var marks = [55, 90, 85, 23, 54, 99, 100, 98, 91, 21, 88, 5, 15, 1, 99];

var marksPassed = marks.filter(function (value) {

    return value >= 50;

});

console.log(marksPassed);
```

Basically, we use *filter* to produce an array that contains only those marks whose value is greater than 50. As you can see, we have a *callback* that takes only one argument: each element of the array. You can omit the others if you don't plan on using them. So for each element we check if the value is greater than 50. If that evaluates to true then this particular item will be included in the final array. Otherwise, it will not. Keep in mind that the *filter* function does not mutate the array that it is called upon:

```javascript
console.log(marks);
```

![Code image](https://1.bp.blogspot.com/-9Cug5kArJkQ/WQuBMUJsT4I/AAAAAAAAA2M/xhK_UBJ1LLwgwZFQNffyC3Ii6tj-f5eBACEw/s1600/Javascript10pic2.png)

Another example:

```javascript
var numbers = [5, 8, 1, 12, 54, 21, 38, 2, 7, 44, 2, 5];

var even = numbers.filter(function (value) {

    return value % 2 === 0;

});

console.log(even);
```

![Code image](https://3.bp.blogspot.com/-cByafbeZhAw/WQuBMdao-JI/AAAAAAAAA2k/EkF6gmFYVlUq2L0AvTmP30bBToRBFlKugCEw/s1600/Javascript10pic3.png)

```javascript
var odd = numbers.filter(function (value) {

    return value % 2 !== 0;

});

console.log(odd);
```

![Code image](https://3.bp.blogspot.com/-GPVnHHSgrzE/WQuBMqkSKxI/AAAAAAAAA2U/4cOwoHU-rakq_OMfXUxWu8P58IJ9uUvCgCEw/s1600/Javascript10pic4.png)

Cool! You can achieve the same if you use a *for* loop but you will end up writing a less elegant and productive code.

Let's move on and see what's up with the *map* function. The map function is syntactically just like the *filter* function but it used to alter arrays' values.

```javascript
var numbers = [6, 5, 42, 47, 1, 24, 5, 7, 2, 9, 3, 55];

var squared = numbers.map(function (value) {

    return value * value;

});

console.log(squared);

//It does not alter the initial array too.
console.log(numbers);
```

![Code image](https://2.bp.blogspot.com/-TlgiWFq0jFI/WQuBMgv8P5I/AAAAAAAAA2Y/oZhs1rMfjQE6GDJtyVRc7uAPK_7uSI0zACEw/s1600/Javascript10pic5.png)

Finally, the *reduce* function is a little more complicated. It shares the same syntax with some slight changes. It takes a *callback* and an optional value. The *callback* takes 4 arguments. The first is the value that is being previously returned by the callback (confusion alert!) and the other 3 are the exact same as the previous functions. What's that optional value, though? That is the value that will be used in the first execution as the first parameter of the *callback* (CONFUSION ALERT INTENSIFIES!). If we don't specify one, the first item will be used. Let's quickly see an example:

```javascript
var numbers = [5, 1, 12, 6, 8, 10];

var sum = numbers.reduce(function(prev, value) {

    return prev + value;

});

console.log(sum);
```

![Code image](https://2.bp.blogspot.com/-Q50uKpWswhw/WQuBM-4cTDI/AAAAAAAAA2c/NDoPiISPWzcRNOeJskwchT6UNUbk361gACEw/s1600/Javascript10pic6.png)

As you can see, in this example the *reduce* calculated the sum of all the elements in the array. Basically, it adds the first two numbers and then passes the result to the next call where the next value will be added to the result and so on and so forth. It might be confusing at the beginning but when you'll get used to it, be sure that it'll be a hell of a tool. To highlight the difference between not using and using the optional value let's see the following example:

```javascript
var sum5 = numbers.reduce(function(prev, value) {

    return prev + value;

}, 5);

console.log(sum5);
```

![Code image](https://1.bp.blogspot.com/-LjBeMQo2Mg4/WQuBNP-aQbI/AAAAAAAAA2k/yk88YZRWNG8U-aka-y7JChGtqmsGrSdfACEw/s1600/Javascript10pic7.png)

The initial value is now 5 and that's why sum5 equals sum + 5.

These 3 functions are very useful in Functional Programming. It's a huge plus to know about them, so study them carefully.
