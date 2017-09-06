//Object with function
var person = {

    age: 20,
    hello: function () {
        console.log('Hello');
    }

};

console.log(person.age);

person.hello();

//Adding function to the object
person.goodNight = function () {

    console.log('Good night!');

};

person.goodNight();

//Deleting function from object
delete person.goodNight;

person.goodNight();

//for-in loop
for (var prop in person) {

    console.log(prop);

}

//Example with 'this'
var personFoo = {
    name: 'George',
    age: 20,
    nationality: 'Greek'
};

personFoo.hello = function () {

    console.log('Hello, my name is ' + this.name + ', I’m ' + this.age + ' years old and I’m ' + this.nationality);

};

personFoo.hello();
