//filter
var marks = [55, 90, 85, 23, 54, 99, 100, 98, 91, 21, 88, 5, 15, 1, 99];

var marksPassed = marks.filter(function (value) {

    return value >= 50;

});

console.log(marksPassed);

var numbers = [5, 8, 1, 12, 54, 21, 38, 2, 7, 44, 2, 5];

var even = numbers.filter(function (value) {

    return value % 2 === 0;

});

console.log(even);

var odd = numbers.filter(function (value) {

    return value % 2 !== 0;

});

console.log(odd);

//map
var numbers = [6, 5, 42, 47, 1, 24, 5, 7, 2, 9, 3, 55];

var squared = numbers.map(function (value) {

    return value * value;

});

console.log(squared);

//It does not alter the initial array too.
console.log(numbers);

//reduce
var numbers = [5, 1, 12, 6, 8, 10];

var sum = numbers.reduce(function(prev, value) {

    return prev + value;

});

console.log(sum);

var sum5 = numbers.reduce(function(prev, value) {

    return prev + value;

}, 5);

console.log(sum5);
