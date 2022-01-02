//Assignment-1
console.log("----<Assignment-1>----");
console.log(100000); // 100000
console.log(1_000_00); // 100000
console.log(10_00_00.0); // 100000
console.log(100 ** 2.5);
console.log(10e4); // 100000
console.log(2e4 * 5); // 100000
console.log(6e5 / 6); // 100000
console.log(Number.parseInt(100000.5555)); // 100000
console.log(Number.parseInt("100000.555 ahmed")); // 100000
console.log(Math.floor(100000.5555)); // 100000
console.log(Math.trunc(100000.5555)); // 100000
console.log(Math.ceil(99999.5555)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.round(Math.pow(Math.sqrt(100000), 2))); // 100000

//Assignment-2
console.log("----<Assignment-2>----");
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//Assignment-3
console.log("----<Assignment-3>----");
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

//Assignment-4
console.log("----<Assignment-4>----");
let myVar = "100.56789 Views";
console.log(Math.trunc(parseInt(myVar))); // 100
console.log(Number(Number.parseFloat(myVar).toFixed(2))); // 100.57

//Assignment-5
console.log("----<Assignment-5>----");
let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

//Assignment-6
console.log("----<Assignment-6>----");
let flt = 10.4;
console.log(Number.parseInt(flt)); // 10
console.log(flt.toFixed()); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10

//Assignment-7
console.log("----<Assignment-7>----");
console.log(Math.floor(Math.random() * (4 - 0 + 1) + 0));
/* Math.random() * (max - min + 1) + min */
