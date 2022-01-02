let title = "Elzero",
  description = "Elzero Web School",
  creationDate = "25/10";

let pageContent = `
  <div class='parent'>
    <h3>${title}</h3>
    <p>${description}</p>
    <sp>${creationDate}</span>
  </div>
`;

document.write(`${pageContent}`.repeat(4));
