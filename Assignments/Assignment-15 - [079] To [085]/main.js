//Assignment-1
console.log("----<Assignment-1>----");
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
  },
};
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails()); // My Name Is Elzero, My Age Is 38, I Live in Egypt

//Assignment-2
console.log("----<Assignment-2>----");
// Method One
let objMethodOne = { property: "One" };
console.log(objMethodOne.property); // "Method One"
// Method Two
let objMethodTwo = {};
objMethodTwo.property = "Two";
console.log(objMethodTwo.property); // "Method Two"
// Method Three
let objMethodThree = new Object();
objMethodThree.property = "three";
console.log(objMethodThree.property); // "Method Three"
// Method Four
let objMethodFour = Object.create({
  property: "Four",
});
console.log(objMethodFour.property); // "Method Four"

//Assignment-3
console.log("----<Assignment-3>----");
let a = 1;
let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};
let twoNums = {
  e: 5,
  f: 6,
};
let finalObject = Object.assign({ a }, threeNums, twoNums);
console.log(finalObject);
/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

//Assignment-4
console.log("----<Assignment-4>----");
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};
let objectLength = Object.keys(myFavGames).length;
for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]]["publisher"]}`
  );
  console.log(
    `The Price Is ${myFavGames[Object.keys(myFavGames)[i]]["price"]}`
  );
  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
    );
  }
  console.log("#".repeat(20));
}
/*
// Output
"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"
*/
