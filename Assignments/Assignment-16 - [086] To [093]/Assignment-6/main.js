let myNum = document.querySelector("form input[type='number']");
let myTxt = document.querySelector("form input[type='text']");
let submit = document.querySelector("form input[type='submit']");
let parent = document.querySelector("form div.results");
let type = document.querySelector("form select");
let count, text;
// To Not Make The Page Reload On Submitting Or Clicking On The Form
document.forms[0].onsubmit = (e) => e.preventDefault();
// To Get The Typed Value In The Form
myNum.oninput = () => (count = myNum.value);
myTxt.oninput = () => (text = myTxt.value);
// To Make The Results
submit.onclick = function () {
  // To Delete The Old Created Divs OR Sections
  document.querySelectorAll(".results .box").forEach((box) => box.remove());
  // To Make The Number Of Wanted Divs OR Sections And Adding The ClassName & Attributes In Them
  for (let i = 1; i <= count; i++) {
    let ele = document.createElement(type.value);
    ele.className = "box";
    ele.setAttribute("title", "Element");
    ele.setAttribute("id", `id-${i}`);
    let mainTxt = document.createTextNode(text);
    ele.appendChild(mainTxt);
    parent.appendChild(ele);
  }
  console.log(`${count} ${text}`);
};
