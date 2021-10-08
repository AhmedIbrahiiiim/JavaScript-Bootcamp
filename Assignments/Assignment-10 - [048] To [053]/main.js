//Assignment-1
console.log("----<Assignment-1>----");
let start1 = 10;
let end1 = 100;
let exclude1 = 40;
for (
  let i = end1.toString().length - start1.toString().length;
  i <= start1;
  i++
) {
  if (start1 * i === exclude1) continue;
  console.log((start1 * i).toString());
} // Output 10 20 30 50 60 70 80 90 100

//Assignment-2
console.log("----<Assignment-2>----");
let start2 = 10;
let end2 = 0;
let stop2 = 3;
for (let i = start2; i <= start2; i--) {
  if (i < end2) break;
  if (i === start2) {
    console.log(`${i}`);
  } else {
    console.log(`${end2}${i}`);
  }
} // Output 10 09 08 07 06 05 04 03

//Assignment-3
console.log("----<Assignment-3>----");
let start3 = 1;
let end3 = 6;
let breaker3 = 2;
for (let i = start3; i <= end3; i++) {
  console.log(`${i}`);
  for (let j = breaker3; j < end3; j++) {
    if (j === breaker3 + start3) continue;
    if (j === end3 - start3) break;
    console.log(`-- ${j}`);
  }
}
/*
// Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/

//Assignment-4
console.log("----<Assignment-4>----");
let index = 10;
let jump = 2;
let end = 0;
for (let i = index; i <= index; i--) {
  if (i === end) break;
  if (i === jump) break;
  console.log(`${i--}`);
} // Output 10 8 6 4

//Assignment-5
console.log("----<Assignment-5>----");
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = +false;
for (let i = count; i < friends.length; i++) {
  if (friends[i][0] === letter.toUpperCase()) continue;
  console.log(`"${++count} => ${friends[i]}"`);
}
/*
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/

//Assignment-6
console.log("----<Assignment-6>----");
let start = 0;
let swappedName = "elZerO";
let final = [];
for (let i = 0; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLocaleLowerCase()) {
    final.push(swappedName[i].toUpperCase());
    continue;
  } else {
    final.push(swappedName[i].toLocaleLowerCase());
  }
}
console.log(`"${final.join("")}"`); // Output "ELzERo"

//Assignment-7
console.log("----<Assignment-7>----");
let start7 = 0;
let mix7 = [1, 2, 3, "A", "B", "C", 4];
for (let i = start7; i < mix7.length; i++) {
  if (typeof mix7[i] === "string") continue;
  if (mix7[i] === start7.toString().length) continue;
  console.log(`${mix7[i]}`);
} // Output 2 3 4
