//Assignment-1
console.log("----<Assignment-1>----");
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `Hello ${zName.slice(0, zName.indexOf(" "))} ${zName
      .slice(zName.indexOf(" ") + 1, zName.indexOf(" ") + 2)
      .toUpperCase()}.`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 1).toUpperCase()}${zCountry.slice(
      1,
      2
    )}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(
      zCountry
    )}`;
  }
  return fullDetails();
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//Assignment-2
console.log("----<Assignment-2>----");
let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//Assignment-3
console.log("----<Assignment-3>----");
function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Available`;
    };
  };
}
console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Available

console.log("----<Currying Function Technique - 1>----");
let checkerOne = (zName, status, salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Available`;

console.log(checkerOne("Osama", "Available", 4000)); // My Salary Is 4000
console.log(checkerOne("Ahmed", "Not Available")); // Iam Not Available

console.log("----<Currying Function Technique - 2>----");
let checkerTwo = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Available`;
console.log(checkerTwo("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checkerTwo("Ahmed")("Not Available")()); // Iam Not Available

//Assignment-4
console.log("----<Assignment-4>----");
function specialMix(...data) {
  let res = 0;
  for (let i = 0; i < data.length; i++) {
    data[i] = parseInt(data[i]);
    if (isNaN(data[i])) continue;
    else res += data[i];
  }
  if (res === 0) return `All Is Strings`;
  return res;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
