const colorPickerInput = document.getElementById("color-picker-input");
const body = document.querySelector("body");
console.log(colorPickerInput);

let color;

colorPickerInput.addEventListener("input", (e) => {
  console.log(e.target.value);

  color = e.target.value;
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    body.style.backgroundColor = color;
  }
});

const wordCounterTextArea = document.getElementById("word-counter-textarea");
console.log(wordCounterTextArea);

const count = document.getElementById("word-count");
console.log(count);

const btn = document.getElementById("start-count-btn");
console.log(btn);


let wordCountValue = 0;
let wordCounterTextAreaValue = "";
wordCounterTextArea.addEventListener("input", (e) => {
  console.log(e.target.value);
  wordCounterTextAreaValue = e.target.value;
});
btn.addEventListener("click", () => {
  wordCountValue = wordCounterTextAreaValue.split(" ").length;
  count.textContent = `word count: ${wordCountValue}`;
  console.log(wordCountValue);
});
