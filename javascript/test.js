//console.log(typeof 4.5)
///console.log(typeof 'x')
//console.log(- (10 - 2))
//console.log('Apple' == 'Orange')
//console.log("five" * 2)
//console.log(null == undefined);
//console.log(null == 0);

/*
let theNumber = Number(112);
if (!Number.isNaN(theNumber)) {
    console.log('Your number is the square root of ' 
                + theNumber * theNumber); 
}

for (let number = 0; number <= 12; number += 2) {
    console.log(number)
}

switch(prompt('What is the weather like?')) {
    case 'rainy':
        console.log('Remember to bring an umbrella');
        break;
    case 'sunny':
        console.log('Dress lightly');
        break;
    case 'cloudy':
        console.log('Go outside');
        break;
    default:
        console.log('Unknown weather type');
        break;
}
*/

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

let number = 0
for (let number = 0; number <= 100; number = number +=1) {
    if (number % 3 == 0) {
        if (number % 3 == 0 && number % 5 ==0) {
            console.log('FizzBuzz');
            continue;
        }
        console.log('Fizz');
    } 
    else if (number % 5 == 0) {
        if (number % 5 == 0 && number % 3 == 0) {
            console.log('FizzBuzz');
            continue;
        }
        console.log('Buzz');
    }
    else {
        console.log(number)
    }
}

let size = 12;
let board = '';
for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
        if ((x + y ) % 2 == 0) {
            board += ' ';
        }
        else {
            board += '#';
        }
    }
    board += '\n';   
}
console.log(board);

