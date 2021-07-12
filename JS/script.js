const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const save = document.getElementById("save")

let number = document.getElementById("number")
let savedNumbers = document.getElementById("saved-numbers")
let count = 0

plus.addEventListener("click", function() {
    count++
    number.textContent = count
})

minus.addEventListener("click", function() {
    count--
    number.textContent = count
})

save.addEventListener("click", function () {
    if (savedNumbers.textContent === "") {
        savedNumbers.textContent += count
    } else {
        savedNumbers.textContent += ", " + count 
    }
    count = 0
    number.textContent = 0
})