//Challenge1
console.log("----<Challenge1>----");
// let names = function (...num) {
//     return `[${num.join("], [")}] => Done !`;
// };
let names = (...num) => `[${num.join("], [")}]`;
console.log(names("Osama", "Mohammed", "Ali", "Ibrahim")); // [Osama], [Mohammed], [Ali], [Ibrahim]

//Challenge2
console.log("----<Challenge2>----");
let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + +nums;
let calc = function (one, two, ...nums) {
  return one + two + +nums;
};
console.log(calc(10, myNumbers[+false], myNumbers[+true]));
