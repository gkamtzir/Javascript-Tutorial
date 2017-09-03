## Variables, Primitive Values and Arithmetic Operators

![Tutorial image](https://1.bp.blogspot.com/-2tnkCI3Xxoc/WPinx24esrI/AAAAAAAAAx4/DNNWyoTHbxwMztbQTl-Z5jBDpAcKklzJgCEw/s1600/javascriptTutorial3B.jpg)

Hello and welcome to our third Javascript tutorial. In this tutorial, we are going to be looking at variables, primitive values and arithmetic operators in Javascript. So, let's get to it.

What are variables? A variable is one of the most fundamental elements in a programming language. Essentially, it is a named place where we can store data. In programming, we want to store data in specific places so we can use them later. As I said, each variable has a name which is unique and follows some strict naming rules: 

* They can contain letters, digits, underscores and dollar signs.
* They are case sensitive.
* They must begin with a letter or underscore or dollar sign.
* They cannot have the same name with any of Javascript's reserved word.
* A reserved word is a word that has a special meaning to Javascript. You can see the list of the reserved words [here](https://www.w3schools.com/js/js_reserved.asp). 

How can we use them, though? You can declare a variable by using the reserved word 'var' followed by the variable name, like so:

```javascript
var age;

var name;
```

In the above lines we declare two variables, one named 'age' and the other named 'name'. One important thing that we didn't mention is the semicolon. The semicolon is used to separate statements. For example, we can achieve the same by doing:

```javascript
var age;var name;
```

But If you write every statement on separate lines, you can omit the semicolon. My personal advice is to write every statement on its own line AND add a semicolon. You'll find that really helpful in the future, when you'll use task runners and other similar Javascript tools.

Alrighty then. We, now, know how to declare variables. After you declare a variable, you want to store some sort of data in it. In Javascript we have 5 basic data types which we call primitive data types. These are:

* Number
* String
* Boolean
* Undefined
* Null

In a variable, we can store any number, either integer or floating point. We can store a string which is a sequence of characters. We can store a Boolean, true or false. We can also use the null, which represents the intentional absence of any objects value (we will see what an object is in a future tutorial). If we just declare a variable, exactly as we did before, it will be set to undefined by default. What undefined means is self-explanatory.

We know how to declare variables and what types we can assign to them. But how, exactly, do we assign values? We assign values by using the assignment operator: '='. Let's declare a variable called 'age' and assign to it the value of 20:

```javascript
var age;

age = 20;

//You can also declare and assign at the same line.

var age = 20;
```

Woah…what's that double slash thing? In Javascript, as in any programming language, we can write comments. Comments, are ignored by the language and their only purpose is to make clear how a specific part of the code works. We can write single line comments using '//' or multiline comments using '/*' as the starting point and '*/' as the ending point.

```javascript
//This is a single line comment

/*
This is a
multiline comment.
*/
```
Let's get back to the operators. We saw the assignment operator. There are many operators available and we'll learn most of them in the following tutorials. In this one, we will look at arithmetic operators. These are:

* \+ for addition
* \- for subtraction
* \* for multiplication
* / for division
* % for remainder
* ++ for increment
* -- for decrement

The first five operators are self-explanatory. The increment operator, increments a variable by 1 while the decrement operator does the exact opposite. Let's see an example:

```javascript
//The burger costs 5.3€.

var burgerPrice = 5.3;

//Greek taxes.

var taxes = 0.23;

//Calculating the final price.

var finalPrice = burgerPrice * (1 + taxes);

//Printing the result to the browser console.

console.log(finalPrice);
```

In the above code snippet, we defined three variables, one for the initial price of a burger, one for the taxes and one for the final price. When we calculate the final price, we use in our math formula parenthesis because we want to change the order of operations, just as we do, in math. We, also, used console.log() command which prints what it's been given to the browser's console. Copy the example and paste it in your editor. Save the file and name it however you like. But make sure it has the .js extension. Then right click it and open it with Chrome. You'll see the example code. Open Chrome's developer tools by right clicking on the page and choosing 'Inspect'. Then head to the 'Console' tab. This is the place where we will write our code in the beginning tutorials. Enter line by line or copy and paste the whole example and hit enter. You should see something like that:

![Code image](https://1.bp.blogspot.com/-rfLM889kRvU/WPERmafVUAI/AAAAAAAAAwI/-p2ZFf_I30ohdCWvEUnx3lEeE1jxES7UACEw/s1600/tutorial3pic1.png)

Well done! We wrote our first Javascript snippet for this tutorial. Amazing, right?

Let's look at some extra examples:

```javascript
//Calculating the mean of 5 and 12.

var mean = (5 + 12) / 2;

console.log(mean);

//Calculating the remainder of 5 / 2.

var remainder = 5 % 2;

console.log(remainder);

//Incrementing our age by 1.

var age = 20;

console.log(age);

age++;

console.log(age);

++age;

console.log(age);

//Decrementing our age by 1.

age--;

console.log(age);

--age;

console.log(age);
```

Note that either prefixing or suffixing the increment and decrement operators you get the same result. But when you use them in conjunction with the assignment operator they are quite different.

```javascript
var age = 20;

var ageAfterAYear = age++;

console.log(ageAfterAYear);

age = 20;

ageAfterAYear = ++age;

console.log(ageAfterAYear);
```

The suffix version assigns the variable first, using its original value, and then increments its value. That's why ageAfterAYear is still 20. The prefix version increments the variable's value first and then assigns the value. That's why ageAfterAYear is, then, 21.

![Code image](https://2.bp.blogspot.com/-NMOQoLNfmsY/WPES32WDpyI/AAAAAAAAAwM/h8sgP_vRdX451fhF898KVcgwIoEZ5nkWwCLcB/s1600/tutorial3pic2.png)

That's it for this tutorial. In the next one, we will look at some other examples with different primitive types and operators.
