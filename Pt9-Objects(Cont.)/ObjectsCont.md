## Objects (Cont.)

![Tutorial image](https://3.bp.blogspot.com/-4ksY9413wzA/WPinzTVjv6I/AAAAAAAAAyY/SrOshIFH58EyDbbfLUsoxi2w1vznFs6PwCEw/s1600/javascriptTutorial9B.jpg)

Hello and welcome to another Javascript tutorial. In this one, we will take a closer look at objects.

An object is a very useful model because it can easily represent every single real object. This is one of the core features that makes the Object-Oriented Programming approach so elegant and popular. As we mentioned in the 7th tutorial, Javascript is an OOP language that uses objects as a building block. Keep in mind that Javascript can, also, be used as a Functional Programming language. We will see some of those features in the next tutorial. For now, let's focus on objects.

What we haven't seen yet are objects containing functions as properties. Let's create an object:

```javascript
var person = {

    age: 20,
    hello: function () {
        console.log('Hello');
    }

};

console.log(person.age);

person.hello();
```

The *person* object has 2 properties: *age* and *hello*. The *age* property is just a number. The *hello* property is a function. To call that function we use, again, the *dot* notation followed by the function name followed by a set of parentheses.

![Code image](https://2.bp.blogspot.com/-b6pNeWz5SXQ/WQox2fuHBhI/AAAAAAAAA1I/UrpwOxA-tJEkh6_VAYo9MVowODYxA46rgCLcB/s1600/Javascript9pic1.png)

Our *person* object has only 2 properties. We can enhance it by adding more. To achieve that we can do:

```javascript
person.goodNight = function () {

    console.log('Good night!');

};

person.goodNight();
```

![Code image](https://3.bp.blogspot.com/-WF8EtlPV770/WQox2QP82CI/AAAAAAAAA1Q/-SIdPP9bTk4qfqiAjr_Engq71FH7sX_QQCEw/s1600/Javascript9pic2.png)

Simple as that. We can delete a property too:

```javascript
delete person.goodNight;

person.goodNight();
```

![Code image](https://1.bp.blogspot.com/-T6SyIPqGDQA/WQox2R2djYI/AAAAAAAAA1M/bqpclY7W5VU2R1rSqkwff8P3DEU6U3u2gCEw/s1600/Javascript9pic3.png)

Note that when we use the *delete* keyword to delete a function property we mustn't use parentheses.

Objects have a very helpful feature when it comes to looping: the *for-in* loop. It has the following syntax:

```javascript
for (var <property> in <object>) {

    //Logic.

}
```

Let's iterate through the *person* object:

```javascript
for (var prop in person) {

    console.log(prop);

}
```

![Code image](https://2.bp.blogspot.com/-bvRvw55IePI/WQox2o1XE5I/AAAAAAAAA1U/PfkZ9kouJCM1wb8BDbk-7HaA8SQtuTqhACEw/s1600/Javascript9pic4.png)

If you want to access the properties' values you must avoid the *dot* notation, because if you do

```javascript
console.log(person.prop);
```

Javascript will think that prop is an actual property (which is not). We should do:

```javascript
for (var prop in person) {

    console.log(person[prop]);

}

```

![Code image](https://2.bp.blogspot.com/-3gJkGKhywHc/WQox22w4uDI/AAAAAAAAA1g/o0KO3OWTadYZjzbvRI5dWfkaB4wFRXrawCEw/s1600/Javascript9pic5.png)

Let's create a more precise *person* object:

```javascript
var person = {

    name: 'George',
    age: 20,
    nationality: 'Greek'

};
```

So, George is 20 years old and he is from Greece. We want to create one function which will console out our object's values. Basically, we want to access our object's properties inside the object. To do that we must use the *this* keyword. The this is a special tool used to identify the object. If we want to access the object's name we will do:

```javascript
this.name;
```
Let's add the function:

```javascript
person.hello = function () {

    console.log('Hello, my name is ' + this.name + ', I’m ' + this.age + ' years old and I’m ' + this.nationality);

};

person.hello();
```

![Code image](https://2.bp.blogspot.com/-5V5if96hKc0/WQox29AdguI/AAAAAAAAA1g/HU4Xaxy4psI3NkzQ_Bb4Hf26GdyvO3YlgCEw/s1600/Javascript9pic6.png)

To sum up, objects in Javascript represent real world objects. They can have numbers, strings, arrays, other objects and even functions for properties. We can add new properties or delete others. We can loop through their properties by using the *for-in* loop and we can also access those inside the object with the *this* keyword.

Now you know a lot about objects. Cool, right?
