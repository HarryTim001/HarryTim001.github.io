const inputEl = document.getElementById("input-el")
const inputEl2 = document.getElementById("input-el2")
const symbolEl = document.getElementById("symbol-input-el")
const Btn1 = document.getElementById("btn-1")
const Btn2 = document.getElementById("btn-2")
const Btn3 = document.getElementById("btn-3")
const Btn4 = document.getElementById("btn-4")
const Btn5 = document.getElementById("btn-5")
const Btn6 = document.getElementById("btn-6")
const Btn7 = document.getElementById("btn-7")
const Btn8 = document.getElementById("btn-8")
const Btn9 = document.getElementById("btn-9")
const Btn0 = document.getElementById("btn-0")
const clearBtn = document.getElementById("clear-btn")
const plusBtn = document.getElementById("plus-btn")
const minusBtn = document.getElementById("minus-btn")
const multiplyBtn = document.getElementById("multiply-btn")
const divideBtn = document.getElementById("divide-btn")
const equalBtn = document.getElementById("equal-btn")
const answerOpt = document.getElementById("answer-output")

let nextInput = false
let optNum = null

Btn1.addEventListener("click", function () {
    if (nextInput === true) {
        inputEl2.value += 1
    } else inputEl.value += 1
})
Btn2.addEventListener("click", function () {
    if (nextInput === true) {
        inputEl2.value += 2
    } else inputEl.value += 2
})
Btn3.addEventListener("click", function () {
    if (nextInput === true) {
        inputEl2.value += 3
    } else inputEl.value += 3
})
Btn4.addEventListener("click", function () {
    if (nextInput === true) {
        inputEl2.value += 4
    } else inputEl.value += 4
})
Btn5.addEventListener("click", function () {
    if (nextInput === true) {
        inputEl2.value += 5
    } else inputEl.value += 5
})
Btn6.addEventListener("click", function () {
    if (nextInput === true) {
        inputEl2.value += 6
    } else inputEl.value += 6
})
Btn7.addEventListener("click", function () {
    if (nextInput === true) {
        inputEl2.value += 7
    } else inputEl.value += 7
})
Btn8.addEventListener("click", function () {
    if (nextInput === true) {
        inputEl2.value += 8
    } else inputEl.value += 8
})
Btn9.addEventListener("click", function () {
    if (nextInput === true) {
        inputEl2.value += 9
    } else inputEl.value += 9
})
Btn0.addEventListener("click", function () {
    if (nextInput === true) {
        inputEl2.value += 0
    } else inputEl.value += 0
})

clearBtn.addEventListener("click", function () {
    inputEl.value = ""
    inputEl2.value = ""
    symbolEl.value = ""
    nextInput = false
    optNum = null
    answerOpt.textContent = "Answer: "
})

plusBtn.addEventListener("click", function () {
    symbolEl.value = "+"
    nextInput = true
    optNum = 1
})
minusBtn.addEventListener("click", function () {
    symbolEl.value = "-"
    nextInput = true
    optNum = 2
})
multiplyBtn.addEventListener("click", function () {
    symbolEl.value = "x"
    nextInput = true
    optNum = 3
})
divideBtn.addEventListener("click", function () {
    symbolEl.value = "÷"
    nextInput = true
    optNum = 4
})

equalBtn.addEventListener("click", function () {
    answerOpt.textContent = "Answer: "
    if (optNum === null) {
        answerOpt.textContent = "Insert enough information"
    } else if (optNum === 1) {
        answerOpt.textContent += parseInt(inputEl.value) + parseInt(inputEl2.value)
    } else if (optNum === 2) {
        answerOpt.textContent += parseInt(inputEl.value) - parseInt(inputEl2.value)
    } else if (optNum === 3) {
        answerOpt.textContent += parseInt(inputEl.value) * parseInt(inputEl2.value)
    } else {
        answerOpt.textContent += parseInt(inputEl.value) / parseInt(inputEl2.value)
    }
})