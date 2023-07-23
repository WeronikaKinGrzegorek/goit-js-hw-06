const loginForm = document.querySelector(".login-form");
const submitButton = document.querySelector("button");
loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("All fields must be completed");
  } else {
    const finalObject = {
      email: email.value,
      password: password.value,
    };

    console.log(finalObject);

    event.currentTarget.reset();
  }
}
