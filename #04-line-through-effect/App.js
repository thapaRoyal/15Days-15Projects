const text = document.getElementById("text");
const textArr = text.innerText.split("");

const newEl = document.createElement("h1");
newEl.innerHTML = `
    ${textArr
      .map((letter) => `<span style="${randomVisibility()}">${letter}</span>`)
      .join("")}
`;

newEl.classList.add("overlay");
document.body.appendChild(newEl);

function randomVisibility() {
  return Math.random() < 0.5 ? "visibility: hidden" : "visibility:visible";
}
