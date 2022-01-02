//Assignment-1
console.log("----<Assignment-1>----");
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
while (index < friends.length) {
  if (typeof friends[index] !== "number" && !friends[index].startsWith("A")) {
    console.log(`${counter + 1} => ${friends[index]}`);
    counter++;
  }
  index += 1;
}
// Output "1 => Sayed" "2 => Mahmoud"
