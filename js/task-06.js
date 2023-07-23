const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", () => {
  const expectedLength = textInput.getAttribute("data-length");
  console.log(expectedLength);
  if (textInput.value.length === parseInt(expectedLength, 10)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
