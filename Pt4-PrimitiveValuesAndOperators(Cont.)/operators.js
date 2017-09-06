//Comparison operators
var myAge = 20;

var myAgeString = '20';

var someonesAge = 20;

var sameAge = (myAge == someonesAge);

console.log('Simple: ' + sameAge);

var sameAgeStrict = (myAgeString === someonesAge);

console.log('Strict: ' + sameAgeStrict);

var Kappa = (true && true) || false;

console.log(Kappa);

var EleGiggle = (5 >= 5) && ('21' === 21);

console.log(EleGiggle);

var BabyRage = (!(true) || ('5' == 5) && (55 < 23));

console.log(BabyRage);

//Ternary operators
var age = 20;

var limit = 18;

var allowed = age >= limit ? 'You are allowed' : 'You are not allowed';

console.log(allowed);
