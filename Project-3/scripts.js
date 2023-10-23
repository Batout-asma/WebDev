const result = document.querySelector("#result");
const rollBtn = document.querySelector("#rollBtn");
const historyRolls = document.querySelector("#historyRolls");
let historyList = [];

function roll() {
    result.textContent = "Rolling 🎲...";
    setTimeout(() => {
        result.textContent = "Rolling .🎲..";
    }, 500);
    setTimeout(() => {
        result.textContent = "Rolling ..🎲.";
    }, 1000);
    setTimeout(() => {
        result.textContent = "Rolling ...🎲";
    }, 1500);
    setTimeout(() => {
        const nbrRolled = Math.floor(Math.random() * 6 + 1);
        result.textContent = "You rolled:" + nbrRolled;
        addNbrToHistory(nbrRolled);
    }, 2000);
}
function addNbrToHistory(nbr) {
    historyList.push(nbr);
    historyRolls.textContent = "Rolling history: " + historyList.join(", ");

}
rollBtn.addEventListener("click", roll);