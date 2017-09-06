function welcome(name) {

    console.log('Welcome ' + name);

}

//Calling the function
welcome('George');

//typeof examples
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

//Checking if there is a parameter
function welcomeFoo(name) {

    if(typeof name !== 'string'){

        console.log('Welcome stranger');

    } else {

        console.log('Welcome ' + name);

    }

}

//Calling the function
welcomeFoo('George');

//Calling the function without input
welcomeFoo();

//Squared
function squared(number) {

    if (typeof number !== 'number') {

        return 'That\'s not a number';

    }

    return number * number;

}

console.log(squared(5.5));
console.log(squared('Hey'));

//Celcius conversion
var convertToCelsius = function (temperature) {

    if (typeof temperature !== 'number') {

        return 'That\'s not an actual temperature';

    }

    return (temperature - 32) * 5 / 9;

};

console.log(convertToCelsius(68));

console.log(convertToCelsius(true));
