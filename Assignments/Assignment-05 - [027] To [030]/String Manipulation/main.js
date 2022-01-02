let a = "Elzero Web School";

//Challenge1
console.log("----<Challenge1>----");
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

//Challenge2
console.log("----<Challenge2>----");
console.log(a.substr(-4, 1).toUpperCase().repeat(8)); // HHHHHHHH

//Challenge3
console.log("----<Challenge3>----");
console.log(a.split(" ", 1)); // ["Elzero"]

//Challenge4
console.log("----<Challenge4>----");
console.log(`${a.substr(0, 6)} ${a.substr(11, 16)}`); // Elzero School

//Challenge5
console.log("----<Challenge5>----");
console.log(
  a.slice(0, 1).toLocaleLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a.slice(a.length - 1)
); // eLZERO WEB SCHOOl
