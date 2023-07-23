function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const bodyOfDocument = document.querySelector("body");
const spanColor = document.querySelector(".color");
changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyOfDocument.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});
