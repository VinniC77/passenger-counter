let count = 0;
let countEl = document.getElementById('count-el')

function increment() {
    count += 1;
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")

function save() {
    let counter = count + " - "
    saveEl.textContent += counter
    countEl.textContent = 0
    count = 0
}
