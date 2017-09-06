//While
var i = 0;

while (i < 5) {

    console.log('Summer');
    i++;

}

//For
for (var i = 0; i < 5; i++) {

    console.log('Summer');

}

//Do-while
i = 0;

do {

    console.log('Summer');

    i++;

} while (i < 5);

//Guess what
var secret = 5;

for (var i = 0; i < 100; i++) {

    if (i === secret) {

        console.log('FOUND!');

     } else {

     console.log('NOT FOUND');

     }

}

//Break
secret = 5;

for (var i = 0; i < 100; i++) {

    if (i === secret) {

        console.log('FOUND!');
        break;

     } else {

     console.log('NOT FOUND');

     }

}

//Continue
for (var i = 0; i < 10; i++) {

     if ( i % 2 === 0 ) {

         continue;

     }

     console.log(i);

}
