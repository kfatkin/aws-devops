//console.log(typeof 4.5)
///console.log(typeof 'x')
//console.log(- (10 - 2))
//console.log('Apple' == 'Orange')
//console.log("five" * 2)
//console.log(null == undefined);
//console.log(null == 0);

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