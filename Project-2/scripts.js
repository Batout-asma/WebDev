const number = document.querySelector("#number")
const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")
const clearBtn = document.querySelector("#clear")
let cpt = 0;

number.textContent = cpt;

incrementBtn.addEventListener("click", () => {
    cpt++;
    number.textContent = cpt;
})
decrementBtn.addEventListener("click", () => {
    cpt--;
    number.textContent = cpt;
})
clearBtn.addEventListener("click", () => {
    cpt = 0;
    number.textContent = cpt;
})