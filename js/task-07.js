const fontSize = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");
fontSize.addEventListener("input", () => {
  const fontSizeValue = fontSize.value;
  textOutput.style.fontSize = fontSizeValue + "px";
});
