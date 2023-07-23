function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("input");
const boxesToCreate = document.querySelector("#boxes");
const btnToCreate = document.querySelector("[data-create]");
const btnToDestroy = document.querySelector("[data-destroy]");
function createBoxes(amount) {
  amount = inputNumber.value;
  if (amount > 100) {
    amount = 100;
  }
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesToCreate.append(box);

    boxSize += 10;
  }
}
function destroyBoxes() {
  boxesToCreate.innerHTML = "";
}

btnToCreate.addEventListener("click", createBoxes);
btnToDestroy.addEventListener("click", destroyBoxes);
