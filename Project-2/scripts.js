const number = document.querySelector("#number")
const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")
const clearBtn = document.querySelector("#clear")
let cpt = 0;

number.textContent = cpt;

incrementBtn.addEventListener("click", () => {
    cpt++;
    number.textContent = cpt;
    changeClass()
})
decrementBtn.addEventListener("click", () => {
    cpt--;
    number.textContent = cpt;
    changeClass()
})
clearBtn.addEventListener("click", () => {
    cpt = 0;
    number.textContent = cpt;
    changeClass()
})
function changeClass() {
    if (cpt > 0) {
        number.className = ""
        number.classList.add("positive")
    }
    else if (cpt == 0) {
        number.className = ""
    }
    else {
        number.className = ""
        number.classList.add("negative")
    }
}