//Assignment-1
console.log("----<Assignment-1>----");
for (let i = 0; i < document.images.length; i++) {
  if (document.images[i].hasAttribute("alt")) {
    document.images[i].alt = "Old";
  } else {
    document.images[i].alt = "Elzero New";
  }
}
