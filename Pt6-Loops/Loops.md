## Loops

![Tutorial image](https://2.bp.blogspot.com/-RZsuALGOFkM/WPiny9dJUWI/AAAAAAAAAyY/g0f39zSmXLgBWRgSJobKZiaF4JH3u39pwCEw/s1600/javascriptTutorial6B.jpg)

Hello and welcome to another Javascript tutorial. In this tutorial, we will learn about loops.

In the previous tutorial, we've seen a very useful way of controlling our program flow: conditional statements. But there is another approach to that too. We can control the program flow by using loops. A loop is a block that executes repeatedly the containing code. 

Let's say that we want to console out the word 'Summer' 5 times. We should do:

```javascript
console.log('Summer');

console.log('Summer');

console.log('Summer');

console.log('Summer');

console.log('Summer');
```

In programming, we have a basic principle which is called *DRY*. *DRY* stands for "Don't repeat yourself". In the above code snippet, we did the exact opposite. To fix this we can use a loop.

There are 3 basic loop types: *while*, *for* and *do-while*.

The while loop has the following syntax:

```javascript
while (condition) {

    /*
    This code will be executed repeatedly
    while the condition evaluates to true.
    */

}
```

So, if we want to console out the word 'Summer' 5 times we would do something like:

```javascript
var i = 0;

while (i < 5) {

    console.log('Summer');
    i++;

}
```

We set a variable called 'i' to 0. That variable will get incremented by one at each iteration and will, essentially, count how many times the word 'Summer' was consoled out. Our condition is checking if variable 'i' is greater than 5, in other words if 'Summer' was consoled out 5 times.

We can achieve the same by using a *for* loop. It has the following syntax:

```javascript
for (initialExpression; condition; incrementExpression) {

    /*
    This code will be executed while
    the condition evaluates to true.
    */

}
```

As you can see, the *for* loop is much more compact than the *while* loop.

```javascript
for (var i = 0; i < 5; i++) {

    console.log('Summer');

}
```

We, usually, use *for* loops instead of *while* loops because they are more readable and have the initial value, the condition and the increment expression in a single line. 

Lastly, we have the *do-while* loop. It has the following syntax:

```javascript
do {

    /*
    This code will be executed for
    at least one time and while the
    condition evaluates to true.
    */

} while (condition);
```

If we know that our code will be executed at least one time then we should, probably, use a *do-while* loop. It works exactly as the *while* loop but the condition is checked at the end.

```javascript
var i = 0;

do {

    console.log('Summer');

    i++;

} while (i < 5);
```

These are the basic loop types. There are two additional types of loop designed for objects and arrays, but we don't know what objects and arrays are yet.

You may be thinking: what if the condition evaluates always to true? A loop whose condition evaluates always to true is called *infinite loop*. It's a loop that never stops and it's, mostly, a huge problem caused by mistake. There are some cases in which you want to have an infinite loop such as in video games. So, make sure your loop ends at some point.

Now we know how to write a loop. Let's check a more complicated example. We will write a loop that will iterate from 0 to 99 and search for a number stored in a variable.

```javascript
var secret = 5;

for (var i = 0; i < 100; i++) {

    if (i === secret) {

        console.log('FOUND!');

     } else {

     console.log('NOT FOUND');

     }

}
```

If you run it, you'll get something like:

![Code image](https://2.bp.blogspot.com/-Na4UnnCfuk4/WQWdE7osUpI/AAAAAAAAA0M/h3_GTOgCUCcxWasRz_TA19O40u96VNyLACLcB/s1600/Javascript6pic1.png)

As you can see, at the sixth iteration the variable 'i' is equal to the variable 'secret'. However, the for loop continues to iterate. Is there a way to stop the loop? The answer is *YES*. To do that we should use the keyword *break*. The same break we used in our *switch* statement.

```javascript
var secret = 5;

for (var i = 0; i < 100; i++) {

    if (i === secret) {

        console.log('FOUND!');
        break;

     } else {

     console.log('NOT FOUND');

     }

}
```

![Code image](https://1.bp.blogspot.com/-1yX_i39CxTI/WQWdE6_jnBI/AAAAAAAAA0I/l8_zvsoTFOgvjMoyGKos3l-4yE6n70nJQCEw/s1600/Javascript6pic2.png)

You can use the *break* keyword in all three loops.

While dealing with loops, we can, also, use the *continue* keyword. The *continue* keyword cancels the current iteration and moves to the next one. Let's see an example:

```javascript
for (var i = 0; i < 10; i++) {

     if ( i % 2 === 0 ) {

         continue;

     }

     console.log(i);

}
```

![Code image](https://1.bp.blogspot.com/-Qi4n6nyOgd4/WQWdE1YjcRI/AAAAAAAAA0Q/eDVOSpd9tzk8afsjNWVLztOnQ9-fvT98QCEw/s1600/Javascript6pic3.png)

We iterate from 0 to 9 and we use the *continue* keyword to console out only the odd numbers. When 'i' is even, the *if* statements evaluates to true and the *continue* is executed. That means that every line below that will be ignored.

Keep in mind that using the *continue* keyword is considered a bad practice because it causes confusion.
