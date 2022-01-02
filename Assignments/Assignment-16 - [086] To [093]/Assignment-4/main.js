//Assignment-1
console.log("----<Assignment-1>----");
let devOne = document.querySelector(".one");
let devTwo = document.querySelector(".two");
let devTwoTitle = devTwo.title;
let devTwoText = devTwo.innerHTML;

devTwo.title = devOne.title;
devOne.title = devTwoTitle;

devTwo.innerHTML = `${devOne.innerHTML} ${
  document.querySelectorAll("div").length
}`;
devOne.innerHTML = devTwoText;
