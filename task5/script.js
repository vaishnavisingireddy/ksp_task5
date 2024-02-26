//operators

//Assigning values to variables
let number1 = 45;
let number2 = 10;
let number3 = 31;
let number4 = 65;

// Arithmetic operators
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);
console.log(number1**2);

//Increment and decrement
console.log(++number3);
console.log(++number1);
console.log(--number1);
console.log(--number2);

//Assignment operators
console.log(number1 += 2);
console.log(number1 -= 2);
console.log(number1 *= 2);
console.log(number1 /= 3);
console.log(number1 %= 3);
console.log(number2 **= 2);

//Comparision operator
console.log(number3==number4);
console.log(number3===number4);
console.log(number3!=number4);
console.log(number3>number4);
console.log(number3<number4);
console.log(number3>=number4);
console.log(number3<=number4);

//logical operator
console.log(number3<40 && number4>40);
console.log(number3>40 && number4<50);
console.log(number3<40 && number4<40);
console.log(number3>40 && number4>40);

console.log(number3<=10 || number4>=40);
console.log(number3>40 || number4<60);
console.log(number3<60 || number4<30);
console.log(number3>40 || number4>40);

console.log(!(number3==35 && number4>=40));
console.log(!(number3>30 || number4>=40));

//javascript functions
function add(number5, number6){
    console.log(number5 + number6);
}
function sub(number5, number6){
    console.log(number5 - number6);
}
function mul(number5, number6){
    console.log(number5 * number6);
}
function div(number5, number6){
    console.log(number5 / number6);
}
add(40, 67);
sub(90, 50);
mul(6, 8);
div(100, 5);

//String Methods

let name1 = "vaishu";
let name2 = "reddy";
console.log(name1.length);
console.log(name1.slice(0,6));
console.log(name1.substring(0,3));
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.concat(name2));
console.log(name1.replace(name2));











