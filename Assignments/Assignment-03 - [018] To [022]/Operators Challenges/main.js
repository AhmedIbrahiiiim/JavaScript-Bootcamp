//Challenge1
console.log("----<Challenge1>----");
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
  Examples:
  [++a]
    - Value: 11
    - Explain: Pre-Increment
  [+]
    - Explain: Addition Operator
  [+]
    - Explain: Unary Plus Operator
  [b++]
    - Value: 20
    - Explain: Post-Increment
  [+]
    - Explain: Addition Operator
  [+]
    - Explain: Unary Plus Operator
  [c++]
  - Value: 80
  - Explain: Post-Increment
  [-]
    - Explain: Subtraction Operator
  [+]
    - Explain: Unary Plus Operator
  [a++]
  - Value: 11
  - Explain: Post-Increment
*/
console.log(++a + -b + +c++ - -a++ + +a);
/*
  Examples:
  [++a]
    - Value: 13
    - Explain: Pre-Increment
  [+]
    - Explain: Addition Operator
  [-b]
    - Value: -21
    - Explain: Unary Negation Operator
  [+]
    - Explain: Addition Operator
  [+]
    - Explain: Unary Plus Operator
  [c++]
    - Value: 81
    - Explain: Post-Increment
  [-]
    - Explain: Subtraction Operator
  [-]
    - Explain: Unary Negative Operator
  [a++]
    - Value: 11
    - Explain: Post-Increment
  [+]
    - Explain: Addition Operator
  [+]
    - Explain: Unary Plus Operator
  [a]
    - Value: 15
    - Explain: We Had a Post-Increment to Print, That is The Print
*/
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  Examples:
  [--c]
    - Value: 81
    - Explain: Pre-Decrement
  [+]
    - Explain: Addition Operator
  [+b]
    - Value: 21
    - Explain: Unary Plus Operator
  [+]
    - Explain: Addition Operator
  [--a]
    - Value: 13
    - Explain: Pre-Decrement
  [*]
    - Explain: Multiplication Operator
  [+]
    - Explain: Unary Plus Operator
  [b++]
    - Value: 21
    - Explain: Post-Increment
  [-]
    - Explain: Subtraction Operator
  [+b]
    - Value: 22
    - Explain: We Had a Post-Increment to Print, That is The Print
  [*]
  - Explain: Multiplication Operator
  [a]
    - Value: 13
    - Explain: We Had a Pre-Increment to Print, That is The Print
  [+]
    - Explain: Addition Operator
  [--a]
    - Value: 12
    - Explain: Pre-Decrement
  [-]
    - Explain: Subtraction Operator
  [+true]
    - Value: 1
    - Explain: Boolean Value [true=1, false=0]
*/

//Challenge2
console.log("----<Challenge2>----");
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * e); // 2000
console.log(-d + ++f + ++e * ++g); // 173
