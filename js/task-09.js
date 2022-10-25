function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const span = document.querySelector("span");
const btn = document.querySelector("button");

btn.addEventListener("click", onChangeColor);

function onChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}