const titleElement = document.getElementById("page-title");
console.log(titleElement);
// getting element by id

const famContacts = document.getElementsByClassName("family");
console.log(famContacts);
// getting element by classname

console.log(famContacts[0]);
// getting elements through array

const allContacts = document.getElementsByTagName("p");
console.log(allContacts);
// getting elements by tagname
const firstWorkContact = document.querySelector(".work");
console.log(firstWorkContact);

const thirdBtn = document.querySelector("div button:nth-child(3)");
console.log(thirdBtn);

const allBtns = document.querySelectorAll("button");
console.log(allBtns);

const topic = document.getElementById("topic");

topic.innerHTML = "<p> This is the <b>new</b> topic </P>";
console.log(topic.innerHTML);

const paragraph = document.querySelector("p");

console.log("innerText: ", paragraph.innerText);
console.log("textContent: ", paragraph.textContent);

const p = document.getElementById("inner-text");
console.log(p);
const v = document.getElementById("textContent");
console.log(v);

let address = `
  ABC Street,
  Spintex Road,
  Accra,
  Ghana.
`;
p.innerText = address;
v.textContent = address;
console.log(p, v);

const header = document.querySelector("h1");
console.log(header.style);

console.log(header.className);
header.className = "title";

const jollofParagraph = document.getElementById("jollof");
jollofParagraph.classList.add("text", "nigerian");
jollofParagraph.classList.remove("test");
jollofParagraph.classList.replace("nigerian", "american");

console.log(jollofParagraph.classList);

const italicizedText = document.getElementById("italics");
console.log(italicizedText.parentNode);
console.log(italicizedText.parentNode.parentNode);

const container = document.getElementById("container");
console.log("container");

const myButton = document.getElementById("myButton");
console.log(myButton);

myButton.addEventListener("click", () => {
  alert("Button clicked");
});
