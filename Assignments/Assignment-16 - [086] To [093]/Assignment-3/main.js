//Assignment-1
console.log("----<Assignment-1>----");
let current = document.querySelector("[name='dollar']");
let usd = document.querySelector("form div span:first-child");
let egp = document.querySelector("form div span:last-child");
let result = document.getElementsByClassName("result");
current.oninput = function () {
  usd.innerHTML = current.value;
  egp.innerHTML = (current.value * 15.6).toFixed(2);
};
document.forms[0].onsubmit = function (e) {
  e.preventDefault();
};
