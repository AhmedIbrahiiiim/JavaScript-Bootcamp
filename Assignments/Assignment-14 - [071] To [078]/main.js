//Assignment-1
console.log("----<Assignment-1>----");
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let finalName = mix
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce(function (acc, next) {
    return acc === "," ? "" : `${acc}${next}`;
  });
console.log(finalName); // Elzero

//Assignment-2
console.log("----<Assignment-2>----");
let myString = "EElllzzzzzzzeroo";
let fullName = myString
  .split("")
  .filter(function (ele, index) {
    return myString.indexOf(ele) === index;
  })
  .reduce(function (acc, next) {
    return acc === "," ? "" : `${acc}${next}`;
  });
console.log(fullName); // Elzero

//Assignment-3
console.log("----<Assignment-3>----");
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray
  .reduce(function (acc, next) {
    return acc.concat(next);
  })
  .split("")
  .map(function (ele) {
    return ele === "," ? "" : ele;
  })
  .reduce(function (acc, next) {
    return `${acc}${next}`;
  });
console.log(newArray); // Elzero

//Assignment-4
console.log("----<Assignment-4>----");
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let convertedNums = numsAndStrings
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return -ele;
  });
console.log(convertedNums); // [-1, -10, 10, 20, -5, -3]

//Assignment-5
console.log("----<Assignment-5>----");
let nums = [2, 12, 11, 5, 10, 1, 99];
let res = nums.reduce(function (acc, current) {
  return current % 2 === 0 ? acc * current : acc + current;
}, 1);
console.log(res); // 500
