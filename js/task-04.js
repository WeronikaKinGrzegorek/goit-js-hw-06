let counterValue = 0;
const decreasingButton = document.querySelector('[data-action="decrement"]');
const increasingButton = document.querySelector('[data-action="increment"]');
const counterDisplay = document.querySelector("#value");

decreasingButton.addEventListener("click", () => {
  counterValue -= 1;
  counterDisplay.textContent = counterValue;
});
increasingButton.addEventListener("click", () => {
  counterValue += 1;
  counterDisplay.textContent = counterValue;
});
