let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
//Challenge1
console.log("----<Challenge1>----");
// my = my.slice(0, 3 + 1).reverse();
my = my.slice(zero, counter + zero.toString().length).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

//Challenge2
console.log("----<Challenge2>----");
console.log(my.slice(zero.toString().length, counter).reverse()); // ["Elham", "Mazero"]
// console.log(my.slice(1, 3).reverse()); // ["Elham", "Mazero"]

//Challenge3
console.log("----<Challenge3>----");
console.log(
  my[zero.toString().length].slice(zero, counter - zero.toString().length) +
    my[counter - zero.toString().length].slice(counter - zero.toString().length)
); // "Elzero"
// console.log(my[1].slice(0, 2) + my[2].slice(2)); // "Elzero"

//Challenge4
console.log("----<Challenge4>----");
console.log(
  my[counter - zero.toString().length].slice(
    counter + zero.toString().length,
    counter + counter - zero.toString().length
  ) +
    my[counter - zero.toString().length]
      .slice(counter + counter - zero.toString().length, counter + counter)
      .toUpperCase()
); // "rO"
// console.log(my[2].slice(4, 5) + my[2].slice(5, 6).toUpperCase()); // "rO"
