const quotes = [
    "Inhale peace exhale stress.",
    "Find joy in the ordinary.",
    "Every day may not be good, but there is something good in every day.",
    "Calmness is the cradle of power.",
    "This pain that you feel can't compare to the joy that's coming.",
    "Kindness is a language that the deaf can hear and the blind can see.",
    "Forgivness is the final form of love, also a virtue od the brave.",
    "Sometimes the most productive thing you can do is to relax.",
    "Only those you love can break your heart.",
    "Peace begins with a smile."
]

const Text = document.querySelector("#Text")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    const randomNbr = Math.floor(Math.random() * (quotes.length - 0) + 0)
    Text.textContent = quotes[randomNbr]
})