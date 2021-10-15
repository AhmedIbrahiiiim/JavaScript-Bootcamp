//Challenge1
console.log("----<Challenge1>----");
function checkStatus(a, b, c) {
  let all = [a, b, c];
  let name, age, stat;
  for (let i = 0; i < all.length; i++) {
    typeof all[i] === "string"
      ? (name = all[i])
      : typeof all[i] === "number"
      ? (age = all[i])
      : typeof all[i] === "boolean"
      ? (stat = all[i])
      : console.log("Data Not Available");
  }
  return console.log(
    `Hello, ${name}, Your Age Is ${age}, You Are ${
      stat ? "Available" : "Not Available"
    }`
  );
}
checkStatus("Osama", 38, true); // "Hello Osama, Age Is 38, Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Age Is 38, Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Age Is 38, Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Age Is 38, Not Available For Hire"

console.log("----<>----");

// Osama Elzero's Solution Without Conditions
function checkStatus(a, b, c) {
  let all = [a, b, c];
  let name = all.find((x) => typeof x === "string");
  let age = all.find((x) => typeof x === "number") || "Unknown";
  let stat = all.find((x) => typeof x === "boolean");
  return console.log(
    `Hello, ${name}, Your Age Is ${age}, You Are ${
      stat ? "Available" : "Not Available"
    }`
  );
}
checkStatus("Osama", 38, true); // "Hello Osama, Age Is 38, Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Age Is 38, Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Age Is 38, Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Age Is 38, Not Available For Hire"
