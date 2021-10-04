let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
//Challenge1
console.log("----<Challenge1>----");
console.log(
  Math.min(Math.floor(a), Math.floor(b), Math.floor(c), Math.floor(d))
);

//Challenge2
console.log("----<Challenge2>----");
console.log((Math.trunc(a + b) * c) / Math.ceil(d));

//Challenge3
console.log("----<Challenge3>----");
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(d.toFixed());

//Challenge4
console.log("----<Challenge4>----");
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)) // 66.67

//Answer :)
console.log(Math.ceil(Math.floor(b) / Math.ceil(d))) // 67
//Mine!!!
console.log(
  Math.trunc((b + d + a * d + b + Math.floor(d * Math.sqrt(b))) / Math.sqrt(a))
); //67
