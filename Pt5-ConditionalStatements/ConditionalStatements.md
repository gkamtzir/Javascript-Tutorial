## Conditional Statements

![Tutorial image](https://1.bp.blogspot.com/-B_KtAyngOeU/WPinymSUtzI/AAAAAAAAAyE/uaFtAGWlX-8zLAz5Tllq5bqFsrUMA0d5gCEw/s1600/javascriptTutorial5B.jpg)

Hello and welcome to another Javascript Tutorial. In this one, we will have a look at conditional statements.

In programming, we want to have full control over our program, including its flow. One way to control the program flow is to use conditional statements. These statements allow you to take specific actions depending on a statement. The statement usually evaluates to either true or false. Thus, you can choose explicitly what you'd like to do in a certain scenario.

In Javascript, we have 4 different conditionals:

* if
* else if 
* else
* switch

The if statement has the following syntax:

```javascript
if (statement) {

/*
If and only if the statement is evaluated to true
every line in this block will be executed.
If the statement is evaluated to false this block
of code will be ignored.
The flow continues.
*/

}
```

Let's see an example:

```javascript
var age = 20;

var limit = 18;

if (age >= limit) {

console.log('You are allowed');

}

console.log('Flow continues');
```

As you can see, the messages 'You are allowed' and 'Flow continues' are consoled out. If you change the age's value to something that is less than 18, only the 'Flow continues' will be consoled out. Simple.

What if we want to do something when the age is between limit and limit – 5. You could use another if statement. You can also use an else if statement. The else if statement is bound to a previous if or else if statement.

```javascript
if (statement1) { 
/* If the statement1 is evaluated to true
every line in this block will be executed.
Then the program will ignore the following
else if statements and will continue its
flow. If the statement1 is evaluated to
false this block will be ignored and the
program flow will continue to the next else-if statement.
*/
} else if (statement2) { 
// Same logic. 
} else if (statement3) { 
//Same logic. 
}
```

You can have as many else if statements as you want. Let's see an example:

```javascript
var age = 15;

if (age > 15) {

console.log('Greater than 15');

} else if (age > 10) {

console.log('Greater than 10');

} else if (age > 5) {

console.log('Greater than 5');

} else if (age > 0) {

console.log('Grater than 0');

}
```

Well, we could achieve the same by using only if statements, right? Nope. If we use separate if statements we will get: 

>Greater than 10

>Greater than 5

>Greater than 0

Instead of:

>Greater than 10

That is, because the multi-if statements are all get evaluated, even if one of them is evaluated to true. So, it's up to you to choose, depending on what you want to achieve.

When all if and else if statements are evaluated to false, the program flow will continue without taking any action. We can change that by adding an else statement at the end:

```javascript
if (statement1) {

} else if (statement2) {

} else {

/*
This block’s lines will be executed
If and only if all the above statements are
evaluated to false.
If one of the above is evaluated to true then
this block of code will be ignored.
*/

}
```

The else statement is bound to an if or else if statement and must be, always, at the end.

```javascript
var age = 15;

if (age > 15) {

console.log('Greater than 15');

} else if (age > 10) {

console.log('Greater than 10');

} else if (age > 5) {

console.log('Greater than 5');

} else if (age > 0) {

console.log('Grater than 0');

} else {

console.log('Negative or zero age?!');

}
```

Play around with those and see what happens.

We've seen how if, else if and else conditionals work. Let's see what's up with the switch statement. It has the following syntax:

```javascript
switch (value) {

case testValue1:

/*
This code will be executed when 'value'
equals to 'testValue1'.
*/

break;

. . .

case testValueN:

. . .

break;

}
```

This might look kind of confusing, so let's see an example:

```javascript
var age = 5;

switch (age) {

case 5:

console.log('You are 5 years old');

break;

case 10:

console.log('You are 10 years old');

break;

}
```
Basically, the value in the switch statement is compared with the values of each case. When there is a match, the corresponding block of code will be executed.

Pretty simple, right? But, what is that 'break' thing? This is the break operator which exits the switch block when is executed. That means that if we omit those operators, the example above will console out both messages. Give it a try.

Switch statements have, also, a default case whose lines are executed when there is no match. In other words, it works just like the else statement.

```javascript
var age = 15;

switch (age) {

case 5:

console.log('You are 5 years old');

break;

case 10:

console.log('You are 10 years old');

break;

default:

console.log('Not 5, neither 10');

}
```

Note that you don’t have to use the break operator for obvious reasons.
