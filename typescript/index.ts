/*
class Greeting {
  greet():void {
    console.log("hello world!!!!")
  }
}

var obj = new Greeting();
obj.greet();

var theName:string = "John";
var score1:number = 50;
var score2:number = 42.50;
var sum = score1 + score2
console.log("Name is " + theName)
console.log("First score is " + score1)
console.log("Second score is " + score2)
console.log("Sum of the scores is "+ sum)

var str = "1";
var str2:number = <number> <any> str //str is now of type number
console.log(str2);

var global_num = 12 //global var
class Numbers {
  num_val = 13; //class var
  static sval = 10; // static field

  storeNum():void {
    var local_num = 14; //local variable
  }
}

console.log("Global num:" + global_num)
console.log(Numbers.sval)
var obj = new Numbers();
console.log("Global num: " + obj.num_val)

var avg:number = 20;
var percentage:number = 90; 

console.log ('Value of avg ' + avg + ', value of percentage: ' + percentage);

var res:boolean = ((avg > 50) && (percentage < 80));
console.log(res);

var res:boolean = ((avg > 50) || (percentage > 80))
console.log(res);

var res:boolean = !((avg > 50) && (percentage > 80));
console.log(res);

var a:number = 12;
var b:number = 10;

a %= b
console.log('a/b:' + a);

var num:number = -2
var result = num > 0 ?'positive':'non-positive'
console.log(result)

var num = 12;
console.log(typeof num);

var num:number = 12
if (num % 2 == 0) { 
  console.log('number is even');
} else {
  console.log('number is odd');
}


var num:number = Math.random() * 6
if (num > 0) {
  console.log(num + ' is positive')
} else if (num < 0) {
  console.log(num + ' is negative')
} else {
  console.log(num + ' is neither positive or negative')
}

var grade:string = 'A';
switch(grade) {
  case'A':{
    console.log('Excellent');
    break;
  }
  case'B':{
    console.log('Good');
    break;
  } 
  case'C':{
    console.log('Fair');
    break;
  }
  case'D':{
    console.log('Poor');
    break;
  }
  default:{
    console.log('You retarded boi!');
    break;
  }
}

*/

// Loops
var num:number = 5;
var i:number;
var factorial = 1;
for (i = num; i >= 1; i--) {
  factorial *= i;
}
console.log(factorial)

var j:any;
var n:any = 'a v c';

for (j in n) {
  console.log(n[j])
}

