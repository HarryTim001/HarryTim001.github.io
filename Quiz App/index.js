const backBtn = document.getElementById('back-btn')
const nextBtn = document.getElementById('next-btn')
const restartBtn = document.getElementById('restart-btn')
const questionEl = document.getElementById('question')
const answer1Btn = document.getElementById('answer1-btn')
const answer2Btn = document.getElementById('answer2-btn')
const answer3Btn = document.getElementById('answer3-btn')
const answer4Btn = document.getElementById('answer4-btn')
const answerBtns = [answer1Btn, answer2Btn, answer3Btn, answer4Btn]
const rewardBtn = document.getElementById('reward-btn')
const scoreDisplay = document.getElementById('score')

let score = 0
let questionIndex = 0
let finishedQuestion = 0
let questions = [
    {
        question: "I'd like to ___ breakfast.",
        answer1: 'has',
        answer2: 'have',
        answer3: 'had',
        answer4: 'having',
        answer: 'have',
        condition: 'unfinished'
    },
    {
        question: "Let's ___ for a walk.",
        answer1: 'goes',
        answer2: 'go',
        answer3: 'went',
        answer4: 'going',
        answer: 'go',
        condition: 'unfinished'
    },
    {
        question: "Thanks for ___ with me.",
        answer1: 'plays',
        answer2: 'play',
        answer3: 'played',
        answer4: 'playing',
        answer: 'playing',
        condition: 'unfinished'
    },
    {
        question: "He ___ her yesterday.",
        answer1: 'meets',
        answer2: 'meet',
        answer3: 'met',
        answer4: 'meeting',
        answer: 'met',
        condition: 'unfinished'
    },
    {
        question: "It is brave to ___ in a storm, but to sunbathe on a beach with pirates? Insanity. -Dennis",
        answer1: 'swims',
        answer2: 'swim',
        answer3: 'swam',
        answer4: 'swimming',
        answer: 'swim',
        condition: 'unfinished'
    },
    {
        question: "___ you ever stayed at John's house?",
        answer1: 'Has',
        answer2: 'Have',
        answer3: 'Had',
        answer4: 'Having',
        answer: 'Have',
        condition: 'unfinished'
    },
    {
        question: "___ John give you those flowers this morning?",
        answer1: 'Does',
        answer2: 'Do',
        answer3: 'Did',
        answer4: 'Doing',
        answer: 'Did',
        condition: 'unfinished'
    },
    {
        question: "Lots of trees ___ blown down by the wind.",
        answer1: 'were',
        answer2: 'has',
        answer3: 'did',
        answer4: 'is',
        answer: 'were',
        condition: 'unfinished'
    },
    {
        question: "We ___ talking to James about his exam.",
        answer1: "don't",
        answer2: "haven't",
        answer3: "wasn't",
        answer4: "aren't",
        answer: "aren't",
        condition: 'unfinished'
    },
    {
        question: "Mary never ___ the washing up.",
        answer1: 'does',
        answer2: 'has',
        answer3: 'did',
        answer4: 'is',
        answer: 'does',
        condition: 'unfinished'
    },
]
const maxScore = questions.length

// Show question

function generateQuestion() {
    questionEl.textContent = questions[questionIndex].question
    answer1Btn.textContent = questions[questionIndex].answer1
    answer2Btn.textContent = questions[questionIndex].answer2
    answer3Btn.textContent = questions[questionIndex].answer3
    answer4Btn.textContent = questions[questionIndex].answer4

    if (questionIndex === 0) {
        backBtn.className = 'not-available'
    } else {
        backBtn.className = ''
    }
    if (questionIndex >= questions.length - 1) {
        nextBtn.className = 'not-available'
    } else {
        nextBtn.className = ''
    }

    scoreDisplay.textContent = `Score: ${score} / ${maxScore}`

    if (questions[questionIndex].condition === 'correct') {
        questionEl.innerHTML += ` <i class="fa-solid fa-circle-check"></i>`
    } else if (questions[questionIndex].condition === 'wrong') {
        questionEl.innerHTML += ` <i class="fa-solid fa-circle-xmark"></i>`
    }

    if (questions[questionIndex].condition === 'correct' || questions[questionIndex].condition === 'wrong') {
        for (let i = 0; i < answerBtns.length; i++) {
            answerBtns[i].disabled = true
            if (answerBtns[i].textContent === questions[questionIndex].answer) {
                answerBtns[i].className = 'correct normal'
            } else {
                answerBtns[i].className = 'wrong normal'
            }
        }
    }
}

generateQuestion()

// Check answer

function check(answerBtn) {
    if (answerBtn.textContent === questions[questionIndex].answer) {
        if (questions[questionIndex].condition === 'unfinished') {
            score++
            scoreDisplay.textContent = `Score: ${score} / ${maxScore}`
        }
        questions[questionIndex].condition = 'correct'
        questionEl.innerHTML += ` <i class="fa-solid fa-circle-check"></i>`
        finishedQuestion++
    } else {
        questions[questionIndex].condition = 'wrong'
        questionEl.innerHTML += ` <i class="fa-solid fa-circle-xmark"></i>`
        finishedQuestion++
    }

    if (questions[questionIndex].condition === 'correct' || 'wrong') {
        for (let i = 0; i < answerBtns.length; i++) {
            answerBtns[i].disabled = true
            if (answerBtns[i].textContent === questions[questionIndex].answer) {
                answerBtns[i].className = 'correct normal'
            } else {
                answerBtns[i].className = 'wrong normal'
            }
        }
    }

    if (score === maxScore) {
        scoreDisplay.style.color = 'gold'
        rewardBtn.className = ''
    }

    if (finishedQuestion == questions.length) {
        restartBtn.className = ""
    }
}

// Nav button

function reset(answerBtn) {
    if (questions[questionIndex].condition === 'unfinished') {
        answerBtn.className = ''
        answerBtn.disabled = false
    }
}

restartBtn.addEventListener('click', () => {
    window.location.replace('game.html')
})

backBtn.addEventListener('click', () => {
    if (questionIndex > 0) {
        questionIndex--
        generateQuestion()
    }
    answerBtns.forEach(reset)
})

nextBtn.addEventListener('click', () => {
    if (questionIndex < questions.length - 1) {
        questionIndex++
        generateQuestion()
    }
    answerBtns.forEach(reset)
})