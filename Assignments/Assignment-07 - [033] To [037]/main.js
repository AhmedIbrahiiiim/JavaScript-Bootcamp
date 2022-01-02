//Assignment-1
console.log("----<Assignment-1>----");
// Test Case 1
let numOne = 9; // "009"
if (numOne < 10) {
  console.log(`00${numOne}`);
}
// Test Case 2
let numTwo = 20; // "020"
if (numTwo > 10 && numTwo < 100) {
  console.log(`0${numTwo}`);
}
// Test Case 3
let numThree = 110; // "110"
if (numThree >= 100) {
  console.log(`${numThree}`);
}

//Assignment-2
console.log("----<Assignment-2>----");
let num1 = 9;
let str = "9";
let str2 = "20";
if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}
if (num1 !== str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num1 != str2 && typeof num1 !== typeof str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (typeof str == typeof str2 && str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

//Assignment-3
console.log("----<Assignment-3>----");
let num11 = 40;
let num22 = 30;
let num33 = "30";
if (num33 > num11 && typeof num33 != typeof num22) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
} else if (num33 > num11 && num33 == num22 && typeof num33 != typeof num22) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
} else if (num33 !== num11 && typeof num33 != typeof num22) {
  console.log(
    "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}

//Assignment-4
console.log("----<Assignment-4>----");
let num111 = 10;
let num222 = 1;
let num333 = +"10";
let num444 = 40;
// Condition 1
if (num111 > num222) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 2
if (num111 > num222 && num111 < num444) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 3
if (num111 > num222 && num111 === num333) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 4
if (num111 + num222 < num444) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 5
if (num111 + num333 < num444) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 6
if (num111 + num222 + num333 < num444) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 7
if (num444 - (num111 + num333) + num222 === 21) {
  console.log("True");
} else {
  console.log("False");
}
