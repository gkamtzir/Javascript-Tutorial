## Functions

![Tutorial image](https://3.bp.blogspot.com/-XaVhKeoS0NE/WPinzqIdVBI/AAAAAAAAAyY/J6drGjqSFew1m2wljC7VhVNWjMeMV-OQwCEw/s1600/javascriptTutorial8B.jpg)

Hello and welcome to another Javascript tutorial. In this one, we will look at Javascript functions.

What is a function? A function can be visualized as a box which has an input and an output. We give it something for input and we get a result. For example, a Celsius-Fahrenheit conversion can be implemented with a function. The function is, also, reusable. We can define it somewhere in our program and then use it as many times as we please.

Most functions have a name (there are anonymous functions too) and they can get many inputs. The only restriction is that they can return only 1 result (it is not so restrictive as it sounds).

The function declaration has the following syntax:

```javascript
function <name>(arg1, arg2, …, argN) {

    //Implement logic here.

}
```

Let's create a function that welcomes the user:

```javascript
function welcome(name) {

    console.log('Welcome ' + name);

}

//Calling the function
welcome('George');
```

![Code image](https://4.bp.blogspot.com/-YtYiZXUqzSY/WQcMfwra3fI/AAAAAAAAA08/-9mStrc_gaQNxRN-xxvwqJmwXPAARNPsgCEw/s1600/Javascript8pic1.png)

So, we call the function by using its name which is followed by the input enclosed in parenthesis. What if we call the function without providing an input.

```javascript
//Calling the function without input
welcome();
```

![Code image](https://2.bp.blogspot.com/-mL9dXkssmic/WQcMf8LYs2I/AAAAAAAAA08/GvqfapI0H5o1wyFUQWxY-8AcKQ_ZFaXxACEw/s1600/Javascript8pic2.png)

If we don't provide the corresponding inputs, then the arguments will be undefined and the result will not be the expected one. To overcome this problem, we will check if the arguments are defined and if they are we will use them. Otherwise, we will do something different. To do so, we must make use of the typeof operator. This operator returns a string representing the type of the operand. Let's see some examples:

```javascript
console.log(typeof 5);

console.log(typeof 5.5);

console.log(typeof 'Woohoo');

console.log(typeof true);

console.log(typeof {name: 'Stuart'});

var name = 'George';

var dunno;

function hello() {

    console.log('Hello');

}

console.log(typeof name);

console.log(typeof dunno);

console.log(typeof hello);
```

![Code image](https://1.bp.blogspot.com/-i5UNIqtGmLQ/WQcMf41HXjI/AAAAAAAAA08/F_2vxEQxFPg4JQ3wp_R3iuMDRaf66NwCwCEw/s1600/Javascript8pic3.png)

Now that we know how to use the typeof operator let's change our function's code a bit:

```javascript
function welcome(name) {

    if(typeof name !== 'string'){

        console.log('Welcome stranger');

    } else {

        console.log('Welcome ' + name);

    }

}

//Calling the function
welcome('George');

//Calling the function without input
welcome();
```

![Code image](https://3.bp.blogspot.com/-mzh1rOCCns8/WQcMgOG-IcI/AAAAAAAAA08/p6ba7Kh0kyc2tiQgJ20wGVZucyT2yuQHACEw/s1600/Javascript8pic4.png)

Let's create a function that returns the input squared:

```javascript
function squared(number) {

    return number * number;

}

var newNumber = squared(2);

console.log(newNumber);

```

![Code image](https://4.bp.blogspot.com/-jaDjv656wzo/WQcMgvgkSAI/AAAAAAAAA08/VlxbLPi8FwIYzBz2lJYVFncFfE40EOlBACEw/s1600/Javscript8pic5.png)

What's that return, though? We use the return statement to return a single value or object or even a function. If we don't use the return statement, undefined will be returned. An important thing to know is that when the return statement is executed all the lines below that are ignored.

A better implementation of the squared function would be:

```javascript
function squared(number) {

    if (typeof number !== 'number') {

        return 'That\'s not a number';

    }

    return number * number;

}

console.log(squared(5.5));
console.log(squared('Hey'));
```

![Code image](https://3.bp.blogspot.com/-lNadBIJoynQ/WQcMgaOwCmI/AAAAAAAAA08/yC7UgyV17UwqwM9iIAka2ZAXTIh4r1CmQCEw/s1600/Javascript8pic6.png)

A very interesting feature of Javascript is that it treats functions just as any other data type. This means that we can assign a function to a variable! Let's create a function that converts Fahrenheit to Celsius.

```javascript
var convertToCelsius = function (temperature) {

    if (typeof temperature !== 'number') {

        return 'That\'s not an actual temperature';

    }

    return (temperature - 32) * 5 / 9;

};

console.log(convertToCelsius(68));

console.log(convertToCelsius(true));
```

![Code image](https://3.bp.blogspot.com/-yoXJV8_8OWY/WQcMgZCqItI/AAAAAAAAA08/rXzIZrRXbuoOHyv4XLYtS5A1M3WUgE1aQCEw/s1600/Javascript8pic7.png)

This approach is called function expression, while the first one is called function declaration. Is there any difference between those two? The answer is *ΥES*. If you use the function expression approach, you can, only, call the function after the function definition. If you use the function declaration approach, you can call the function wherever you want, even before the function definition. That happens because of the hoisting. We will explain what this is in a future (intermediate) tutorial.

So, which one to choose? You can choose whatever you like. The only thing to remember is to be consistent. Pick one and stick with it!



