//Challenge1
console.log("----<Challenge1>----");
let a = 100;
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
console.log("----<Conditional Ternary>----");
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

//Challenge2
console.log("----<Challenge2>----");
let st = "Elzero Web School";
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

//Challenge3
console.log("----<Challenge3>----");
if (Number.parseInt(st.length) !== "string") {
  console.log("Good");
}
