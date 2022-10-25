const input = document.querySelector("#validation-input");

input.addEventListener("blur", onValidInput);

function onValidInput() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
  console.log(input.value.length);
  console.log(input.dataset.length);
}