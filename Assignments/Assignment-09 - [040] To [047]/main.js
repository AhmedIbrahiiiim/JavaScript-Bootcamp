//Assignment-1
console.log("----<Assignment-1>----");
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// Method 1
console.log(
  myFriends.slice(num.toString().length - num.toString().length, num)
); // ["Ahmed", "Elham", "Osama"];
// console.log(myFriends.slice(0, 3));
// console.log(num.toString().length - num.toString().length) // 0
// Method 2
myFriends.pop();
console.log(myFriends);
// Method 3
myFriends.length = num;
console.log(myFriends);
// Method 4
console.log(
  myFriends.splice(num.toString().length - num.toString().length, num)
); // ["Ahmed", "Elham", "Osama"];
// console.log(myFriends.splice(0, 3));
//Assignment-2
console.log("----<Assignment-2>----");
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]
//Assignment-3
console.log("----<Assignment-3>----");
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = arrOne.concat(arrTwo);
console.log(finalArr.sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]
//Assignment-4
console.log("----<Assignment-4>----");
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO3
//Assignment-5
console.log("----<Assignment-5>----");
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if (haystack.includes(needle)) {
  console.log("Found");
} else {
  console.log("Not Found");
}
if (haystack.indexOf(needle) === 1) {
  console.log("Found");
} else {
  console.log("Not Found");
}
if (haystack.lastIndexOf(needle) === 1) {
  console.log("Found");
} else {
  console.log("Not Found");
}
// console.log(haystack.includes(needle));
// console.log(haystack.indexOf(needle));
// console.log(haystack.lastIndexOf(needle));
//Assignment-6
console.log("----<Assignment-6>----");
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
allArrs = arr1.concat(arr2).sort().join("").toLowerCase().slice(arr2.length);
console.log(allArrs); // fxy


