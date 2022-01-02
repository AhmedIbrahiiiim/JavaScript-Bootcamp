//Assignment-1
console.log("----<Assignment-1>----");
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    theGender = "Mr ";
  } else if (theGender === "Female") {
    theGender = "Mrs ";
  } else {
    theGender = "";
  }
  console.log(`Hello ${theGender}${theName}`);
}
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//Assignment-2
console.log("----<Assignment-2>----");
function calculate(firstNum = 0, secondNum = 0, operation = "add") {
  if (secondNum === 0) {
    console.log("Second Number Not Found");
  }
  if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
}
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

//Assignment-3
console.log("----<Assignment-3>----");
function ageInTime(theAge) {
  let years = theAge;
  let months = theAge * 12.008;
  let weeks = months * 4.345;
  let days = weeks * 7;
  let hours = days * 24;
  let minutes = hours * 60;
  let seconds = minutes * 60;
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(`${years} Years
${months.toFixed(1)} Month
${weeks.toFixed(1)} Weeks
${days.toFixed(1)} Days
${hours.toFixed(1)} Hours
${minutes.toFixed(1)} Minutes
${seconds.toFixed(1)} Seconds`);
  }
}
ageInTime(110); // Age Out Of Range
ageInTime(38); // 38 Years 456.3 Month 1982.6 Weeks 13878.5 Days 333083.7 Hours 19985020.1 Minutes 1199101204.2 Seconds

//Assignment-4
console.log("----<Assignment-4>----");
console.log("Look At (Shuffled Arguments Message/main.js)");

//Assignment-5
console.log("----<Assignment-5>----");
console.log("Look In The HTML Page");
function createSelectBox(startYear, endYear) {
  let chooseYear = [];
  for (let i = startYear; i <= endYear; i++) {
    chooseYear.push(i);
  }
  document.write(`<select>`);
  for (let i = 0; i < chooseYear.length; i++) {
    document.write(
      `<option value="${chooseYear[i]}">${chooseYear[i]}</option>`
    );
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

//Assignment-6
console.log("----<Assignment-6>----");
function multiply(...xNumbers) {
  for (let i = 0; i < xNumbers.length; i++) {
    if (typeof xNumbers[i] !== "number") continue;
    xNumbers[i] = parseInt(xNumbers[i]);
    if (
      typeof xNumbers[i + 1] === "undefined" ||
      typeof xNumbers[i + 1] === "string"
    )
      continue;
    else console.log(xNumbers[i] * xNumbers[i + 1]);
  }
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
