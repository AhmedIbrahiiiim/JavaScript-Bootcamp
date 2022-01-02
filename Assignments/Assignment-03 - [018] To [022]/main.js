//Assignment-1
console.log("----<Assignment-1>----");
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0

//Assignment-2
console.log("----<Assignment-2>----");
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(++num + true + true); // 6

num = 3;
// Solution Three
console.log(num * --num); // 6

num = 3;
// Solution Four
console.log(num ** --num - ++num); // 6

num = 3;
// Solution Five
console.log(num + ++num - true); // 6

num = 3;
// Solution Six
console.log(num * num + true - ++num); // 6

//Assignment-3
console.log("----<Assignment-3>----");
let numTwo = "10";

// Solution One
console.log(+numTwo + +numTwo); // 20

numTwo = 10;
// Solution Two
console.log(++numTwo + --numTwo - true); // 20

numTwo = 10;
// Solution Three
console.log((+numTwo / +numTwo + true) * numTwo); // 20

numTwo = 10;
// Solution Four
console.log(((++numTwo % --numTwo) + true) * numTwo); // 20
