const giftBox = document.getElementById("gift-box");
const clickBtn = document.getElementById("click-btn");
console.log(giftBox);
console.log(clickBtn);

clickBtn.addEventListener("mouseover", () => {
  console.log("clicked");
  giftBox.classList.toggle("hide");
});

document.addEventListener("keydown", (e) => {
  console.log(e.ctrlKey, e.key);
  if (e.key === "y" && e.ctrlKey) {
    giftBox.classList.toggle("hide");
  }
});
