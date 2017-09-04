## Primitive Values and Operators (Cont.)

![Tutorial image](https://4.bp.blogspot.com/-hlgLtscb3wM/WPinyTxsqjI/AAAAAAAAAyA/IatGOukPF5Iz-9KEFNpofzzOz6JVTQMQQCEw/s1600/javascriptTutorial4B.jpg)

Hello and welcome to another Javascript tutorial. In this tutorial, we will continue our journey with more examples on primitive values and operators.

We know that we can assign numbers by using the assignment operator. But let me tell you something: there are more assignment operators! These are:
* += used as x += y (same as x = x + y)
* -= used as x -= y (same as x = x – y)
* *= used as x *= y (same as x = x * y)
* /= used as x /= y (same as x = x / y)
* %= used as x %= y (same as x = x % y)

Feeling lost and confused? Let's clear things up:

```javascript
var cost = 0;

var funds = 10;

var donut = 1.5;

//Buying 2 donuts;

cost += donut;

funds -= donut;

cost += donut;

funds -= donut;

console.log('Cost: ' + cost + ' Remaining funds: ' + funds);
```

The rest of the assignment operators follow the same principles.

We've seen how we can use numbers in Javascript. Let's see how we can use strings. As we've said, a string is a sequence of characters. To assign a string to a variable you must enclose the string in single ('Hello') or double quotes ("World"). It's up to you to choose, but remember to be consistent. Let's see some examples:

```javascript
//Assigns string using single quotes.

var name = 'George';

//Assigns string using double quotes.

var lastName = "Kamtziridis";

console.log(name);

console.log(lastName);
```

Note that there isn't any difference in the output. But what if you want to use a single quote in a string which is enclosed in single quotes. That's a problem. You can overcome it by escaping the single quote using the backslash: '\'.

```javascript
var sentence = 'George\'s house';

console.log(sentence);
```

Strings can, also, use the '+' operator. It is used for concatenation. Let's see an example:

```javascript
var name = 'George';

var lastName = 'Kamtziridis';

var fullName = name + ' ' + lastName;

console.log(fullName);
```

Note that you should separate the variables 'name' and 'lastName' with an empty space. Otherwise, the output will be 'GeorgeKamtziridis'.

We can store a Boolean value in a variable, too. There are two possible values: true and false.

```javascript
var truthy = true;

var falsy = false;

console.log(truthy);

console.log(falsy);
```

Boolean values are used in conjunction with the logical operators. These are:

* && used for logical 'AND'
* || used for logical 'OR'
* ! used for logical 'NOT'

Arithmetic and string values are, also, used in conjunction with the comparison operators. These are:

* == used to check if a value is equal to some other value
* === used to strictly check if a value is equal to some other value
* != used to check if a value is not equal to some other value
* !== used to strictly check if a value is equal to some other value
* \> used to check if a value is greater than some other value
* < used to check if a value is less than some other value
* \>= used to check if a value is greater than or equal to some other value
* <= used to check if a value is less than or equal to some other value

Their use is explained pretty well, but what 'strictly' means, really? It means, that, when we check for equality, we check both the value and the data type. Feeling confused, again? Let's look at some examples:

```javascript
var myAge = 20;

var myAgeString = '20';

var someonesAge = 20;

var sameAge = (myAge == someonesAge);

console.log('Simple: ' + sameAge);

var sameAgeStrict = (myAgeString === someonesAge);

console.log('Strict: ' + sameAgeStrict);
```

![Code image](https://1.bp.blogspot.com/-MfmwFD_HElc/WPKUX9PHHLI/AAAAAAAAAws/IOsFS6gRzYgSXheAex5BiYjrOjJmnecRQCLcB/s1600/tutorial4pic1.png)

Javascript does something that is called coercing. When the operands of an operator are of different types, Javascript converts one of them to the equivalent value of the other operand's type. When we check if '20' equals to 20 using the '==' operator, one type will be converted to the other type and that's why the result is true. Although, when we perform the exact same operation using the '===' operator none of them are converted and that's why 'false' is consoled out. Let's combine logical and comparison operators and see what happens:

```javascript
var Kappa = (true && true) || false;

console.log(Kappa);

var EleGiggle = (5 >= 5) && ('21' === 21);

console.log(EleGiggle);

var BabyRage = (!(true) || ('5' == 5) && (55 < 23));

console.log(BabyRage);
```

![Code image](https://4.bp.blogspot.com/-UiZ97N4vnas/WPKUYxZgrMI/AAAAAAAAAww/j2xBB396hJ8Ny3JeI1yro3vDbyOnmwLGACEw/s1600/tutorial4pic2.png)

The '!==' operator works under the same principles. There is, also, the '?' operator or as it is called: ternary operator. This operator checks if a statement is true or false and based on that it acts differently. Let's see an example:

```javascript
var age = 20;

var limit = 18;

var allowed = age >= limit ? 'You are allowed' : 'You are not allowed';

console.log(allowed);
```

![Code image](https://1.bp.blogspot.com/-D3gATIcwlkw/WPKUZW6Ys1I/AAAAAAAAAw0/hex_PXrfly4Pz0GfrBJmkb-qEXLaJSm_QCEw/s1600/tutorial4pic3.png)

So, first it checks if age is greater than or equal to limit. If it's true it returns the value that's on the left-hand side of ':'. If it's false it returns the value that's on the right-hand side of ':'. Simple as that.

That's it for this tutorial. In the next one, we will learn about if-else statements and flow control.

