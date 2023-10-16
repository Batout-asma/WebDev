const nextButton = document.getElementById('next');
const pElements = document.querySelectorAll('#question p');
let cpt = 0;

const questions = ["text 5", "text 6", "text 7", "text 8", "text 9", "text 10", "text 11", "text 12", "text 13", "text 14", "text 15", "text 16"];

function updateQuestionText() {
    const start = cpt * 4;
    const end = start + 4;

    if (end <= questions.length) {
        pElements.forEach((p, index) => {
            p.textContent = questions[start + index];
        });
        cpt++;
    }
}

nextButton.addEventListener('click', updateQuestionText);