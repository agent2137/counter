const counterDisplay = document.querySelector('.counterDisplay');
const btnAdd = document.querySelector('#add');
const btnSubstract = document.querySelector('#delete');
let i = 100;
const addInteger = (e) => {
    if (e.target.id === "add") {
        i++;
        counterDisplay.textContent = i;
    } else if (e.target.id === "delete") {
        i--;
        counterDisplay.textContent = i;
    }

    if (i == 0) {
        counterDisplay.style.color = "black"
    } else if (i > 0) {
        counterDisplay.style.color = "green"
    } else if (i < 0) {
        counterDisplay.style.color = "red"
    }

    (i >= 100) || (i <= -100) ? counterDisplay.style.fontSize = "160px": counterDisplay.style.fontSize = "240px";
}
btnAdd.addEventListener('click', addInteger);
btnSubstract.addEventListener('click', addInteger);