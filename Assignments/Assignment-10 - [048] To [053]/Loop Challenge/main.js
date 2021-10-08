//Challenge1
console.log("----<Challenge1>----");
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
let count = 0;
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;
  count++;
}
document.write(`<div>We Have <strong>${count}</strong> Admins</div><hr>`);
for (let i = 0; i < count; i++) {
  document.write(`<div>The Admin For Team is ${myAdmins[i]}`);
  document.write(`<h4>Team Members: </h4>`);
  let orderedNames = [];
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0] === myEmployees[j][0]) {
      orderedNames.push(myEmployees[j]);
    }
  }
  console.log(orderedNames);
  for (let k = 0; k < orderedNames.length; k++) {
    document.write(`<p>- ${k + 1} ${orderedNames[k]}</p>`);
  }
  document.write(`<hr>`);
  document.write(`</div>`);
}
