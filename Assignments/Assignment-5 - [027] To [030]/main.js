//Assignment-1
console.log("----<Assignment-1>----");
let userName = "Elzero";
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.slice(3, 4)); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.substr(3, 1)); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substring(4, 3)); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.substring(userName.length-3, userName.length-2)); // e
console.log(userName.slice(0, 1).toLowerCase().repeat(3)); // eee

//Assignment-2
console.log("----<Assignment-2>----");
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True