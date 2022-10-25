const decrement = document.querySelector(`button[data-action="decrement"]`);
const increment = document.querySelector(`button[data-action="increment"]`);
const value = document.querySelector("#value");

console.log(value);

let counterValue = 0;

increment.addEventListener("click", onIncrementBtn);
decrement.addEventListener("click", onDecrementBtn);


function onIncrementBtn() {
    counterValue += 1;
    value.textContent = counterValue;
}

console.log("increment");

function onDecrementBtn() {
    counterValue -= 1;
    value.textContent = counterValue;
}

console.log("decrement");