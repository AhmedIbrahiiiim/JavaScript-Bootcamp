//Challenge1
console.log("----<Challenge1>----");
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,1,2,0,z";
let zLetter = myString[myString.length - true];
let res = myString
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .filter(function (ele) {
    return ele !== "," && ele !== zLetter;
  })
  .map(function (ele) {
    return ele === "_" ? " " : ele;
  })
  .reduce(function (acc, current) {
    return acc === current ? acc : `${acc}${current}`;
  });
console.log(res); // Elzero Web School
