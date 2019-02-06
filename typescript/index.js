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

var m:number = 5;
while (m > 5) {
  console.log('Entered while');
}

do {
  console.log('Entered do... while');
}
while (m > 5);

var i:number = 1;
while (i <= 10) {
  if (i % 5 == 0) {
    console.log('The first multiple of 5 between 1 and 10 is: ' + i)
    break;
  }
  i++
}

var num:number = 0;
var count:number = 0;

for (num = 0; num <=20; num++) {
  if (num % 2 == 0) {
    continue
  }
  count++
}
console.log('The count of odd values between 0 and 20 is: ' + count)

var array:any = [10, 15, 30, 45, 60, 1000]
var a:any

for (a in array) {
  console.log(array[a]);
}

var num:number = 5;
var factorial:number = 1;

while (num >= 1) {
  factorial = factorial * num;
  num--;
}
console.log('The factorial is ' + factorial)

*/
//Functions
function test_params(n1, s1) {
    console.log(n1);
    console.log(s1);
}
test_params(1010, 'This is a test of the emergency code writing system');
function disp_details(id, name, butt, mail_id) {
    if (butt === void 0) { butt = true; }
    console.log('ID: ', id);
    console.log('Name: ', name);
    var butt2 = butt; //butt is now of type string
    console.log('Butt?: ', butt2);
    if (mail_id != undefined) {
        console.log('Email address: ', mail_id);
    }
}
disp_details(1, 'Kevin', false, 'kfatkin@fuckyomotha.com');
disp_details(2, 'Dana');
// Rest parameters in a function
function addNumbers() {
    var nums2 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums2[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums2.length; i++) {
        sum = sum + nums2[i];
    }
    console.log('Sum of the numbers passed into the function: ', sum);
}
addNumbers(10, 15, 6, 881);
addNumbers(10, 10, 10, 10, 10, 10, 10, 10, 10);
var msg = function () {
    return 'Hello World';
};
console.log(msg());
var myFunction = new Function('a', 'b', 'return a * b');
var x = myFunction(4, 3);
console.log(x);
function factorial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
}
;
console.log(factorial(6));
var foo = function (x) { return 10 + x; };
console.log(foo(100));
var foo = function (x) {
    x = 10 + x;
    console.log(x);
};
foo(100);
var func = function (x) {
    if (typeof x == 'number') {
        console.log(x + ' is numeric');
    }
    else if (typeof x == 'string') {
        console.log(x + ' is a string');
    }
};
func(12);
func('Kevin');
var month = 0;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("Month is " + month);
}
else {
    console.log("Value Accepted");
}
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, 'Bob');
employee.prototype.email = "bob@abc.com";
console.log('Employee ID is ' + emp.id);
console.log('Employee name is ' + emp.name);
console.log('Employee email is ' + emp.email);
console.log(emp);
var num1 = 1223.30;
var val = num1.toExponential();
console.log(val);
