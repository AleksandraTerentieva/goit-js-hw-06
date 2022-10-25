const form = document.querySelector(".login-form");

form.addEventListener("submit", onSumbitForm);

function onSumbitForm(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    return alert("Всі поля повинні бути заповнені!");
  }
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const formObj = {
    email,
    password,
  };
  console.log(formObj);
  event.currentTarget.reset();
}