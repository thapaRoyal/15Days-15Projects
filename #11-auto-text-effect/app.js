const text = document.getElementById("text");
const prog = "We Love Programming";
let idx = 1;

setInterval(writeText, 100);

function writeText() {
  text.innerHTML = prog.slice(0, idx);
  idx++;

  if (idx > prog.length) {
    idx = 1;
  }
}
