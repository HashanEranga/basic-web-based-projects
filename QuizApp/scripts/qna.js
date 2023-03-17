let startArea = document.getElementsByClassName("start-section--wrapper")
let statArea = document.getElementsByClassName("stat-section__wrapper")
let qnaArea = document.getElementsByClassName("qna-section__wrapper")
let resArea = document.getElementsByClassName("result-section__wrapper")
let startBtn = document.getElementById("startBtn")
let nextBtn = document.getElementById("nextQBtn")
let closeBtn = document.getElementById("closeBtn")
let imResult = document.getElementById("imResult")
const QUESTIONS = [
    {
        id: 0,
        question: "How many squares does a chessboard have?",
        answers : [
            "65",
            "32",
            "64",
            "99",
        ],
        correctAns: 2,
    },
    {
        id: 1,
        question: "Who were the opponents in the famous Evergreen Game?",
        answers : [
            "Adolf Anderssen vs. Jean Dufresne",
            "Paul Morphy vs. Howard Staunton",
            "Wilhelm Steinitz vs. Emanuel Lasker",
            "Jose Raul Capablanca vs. Alexander Alekhine",
        ],
        correctAns: 0,
    },
    {
        id: 2,
        question: "How many moves was the longest [known] chess game in history?",
        answers : [
            "101",
            "231",
            "269",
            "382",
        ],
        correctAns: 2,
    },
    {
        id: 3,
        question: "Which is greatest in number?",
        answers : [
            "All atoms in the universe",
            "Possible games of chess",
            "Stars in the Milky Way",
            "People on the planet"
        ],
        correctAns: 1,
    },
    {
        id: 4,
        question: "How did the first game between Earth and the crew of the Soyuz-9 spacecraft played on the 9th of June, 1970 finish?",
        answers : [
            "White won",
            "Black won",
            "It ended in a draw",
            "It was never finished"
        ],
        correctAns: 2,
    },
    {
        id: 0,
        question: "How many squares does a chessboard have?",
        answers : [
            "65",
            "32",
            "64",
            "99",
        ],
        correctAns: 2,
    },
    {
        id: 1,
        question: "Who were the opponents in the famous Evergreen Game?",
        answers : [
            "Adolf Anderssen vs. Jean Dufresne",
            "Paul Morphy vs. Howard Staunton",
            "Wilhelm Steinitz vs. Emanuel Lasker",
            "Jose Raul Capablanca vs. Alexander Alekhine",
        ],
        correctAns: 0,
    },
    {
        id: 2,
        question: "How many moves was the longest [known] chess game in history?",
        answers : [
            "101",
            "231",
            "269",
            "382",
        ],
        correctAns: 2,
    },
    {
        id: 3,
        question: "Which is greatest in number?",
        answers : [
            "All atoms in the universe",
            "Possible games of chess",
            "Stars in the Milky Way",
            "People on the planet"
        ],
        correctAns: 1,
    },
    {
        id: 4,
        question: "How did the first game between Earth and the crew of the Soyuz-9 spacecraft played on the 9th of June, 1970 finish?",
        answers : [
            "White won",
            "Black won",
            "It ended in a draw",
            "It was never finished"
        ],
        correctAns: 2,
    }
]

window.onload  = function() {
    startArea[0].style.display = ""
    statArea[0].style.display = "none"
    qnaArea[0].style.display = "none"
    resArea[0].style.display = "none"
}

startBtn.onclick = () => {
    startArea[0].style.display = "none"
    statArea[0].style.display = ""
    qnaArea[0].style.display = ""
    resArea[0].style.display = "none"
    startQuiz()
    runTimer().then(() => {})
}

nextBtn.onclick = () => {
    let num = parseInt(currentQuestionNumber.innerText)

    if(num === QUESTIONS.length-1) nextBtn.innerText = "Submit"

    if(num === QUESTIONS.length){
        closeQuiz()
    }
    else {
        currentQuestionNumber.innerText = (num+1).toString()
        currentQuestion.innerText = QUESTIONS[num].question
        answer1.innerText = QUESTIONS[num].answers[0]
        answer2.innerText = QUESTIONS[num].answers[1]
        answer3.innerText = QUESTIONS[num].answers[2]
        answer4.innerText = QUESTIONS[num].answers[3]
        imResult.innerText = ""
    }
    enableBtnSet()
}

closeBtn.onclick = () => {
    startArea[0].style.display = ""
    statArea[0].style.display = "none"
    qnaArea[0].style.display = "none"
    resArea[0].style.display = "none"
    location.reload()
}

let currentQuestionNumber = document.getElementById("currentQuestionNum")
let totalQuestions = document.getElementById("totalQuestions")
let timeLeft = document.getElementById("timeLeft")
let currentQuestion = document.getElementById("currentQuestion")
let answer1 = document.getElementById("answer1")
let answer2 = document.getElementById("answer2")
let answer3 = document.getElementById("answer3")
let answer4 = document.getElementById("answer4")
let timeElapsed = document.getElementById("timeElapsed")
let questionCount = document.getElementById("questionCount")
let correctNum = document.getElementById("correctNum")
let wrongNum = document.getElementById("wrongNum")
let feedback = document.getElementById("feedback")
let correctAnswers = 0
let wrongAnswers = 0
let timeTaken = 0

let startQuiz = () => {
    currentQuestionNumber.innerText = (1).toString()
    nextBtn.innerText = "Next Question"
    totalQuestions.innerText = QUESTIONS.length.toString()
    timeLeft.innerText = "60"
    currentQuestion.innerText = QUESTIONS[0].question
    answer1.innerText = QUESTIONS[0].answers[0]
    answer2.innerText = QUESTIONS[0].answers[1]
    answer3.innerText = QUESTIONS[0].answers[2]
    answer4.innerText = QUESTIONS[0].answers[3]
    imResult.innerText = ""
}

let runTimer = async () => {
    for (let i = 60; i > 0; i--) {
        timeLeft.innerText = i.toString()
        await delay(1000)
    }
    closeQuiz()
}

let delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

let closeQuiz = () => {
    timeTaken = 60 - parseInt(timeLeft.innerText)
    timeElapsed.innerText = timeTaken
    questionCount.innerText = QUESTIONS.length.toString()
    correctNum.innerText = correctAnswers
    wrongNum.innerText = (QUESTIONS.length - correctAnswers).toString()
    startArea[0].style.display = "none"
    statArea[0].style.display = "none"
    qnaArea[0].style.display = "none"
    resArea[0].style.display = ""

    if(correctAnswers < 5){
        feedback.innerText = "Poor Results. Follow more sports content regularly"
        feedback.style.color = "red"
    }
    else {
        feedback.innerText = "Excellent Mark. Keep up the good work"
        feedback.style.color = "green"
    }
}

answer1.onclick = () => {
    let questionNum = parseInt(document.getElementById("currentQuestionNum").innerText)
    checkAnswer(0,questionNum)
}

answer2.onclick = () => {
    let questionNum = parseInt(document.getElementById("currentQuestionNum").innerText)
    checkAnswer(1,questionNum)
}

answer3.onclick = () => {
    let questionNum = parseInt(document.getElementById("currentQuestionNum").innerText)
    checkAnswer(2,questionNum)
}

answer4.onclick = () => {
    let questionNum = parseInt(document.getElementById("currentQuestionNum").innerText)
    checkAnswer(3,questionNum)
}

let checkAnswer = (btnIndex, questionNum) => {
    let correctAns = QUESTIONS[questionNum-1].correctAns
    if(correctAns === btnIndex) {
        imResult.innerText = "Correct Answer"
        imResult.style.color = "green"
        correctAnswers += 1
    }
    else{
        imResult.innerText = "Incorrect Answer"
        imResult.style.color = "red"
        wrongAnswers += 1
    }
    disableBtnSet()

}

let disableBtnSet = () => {
    answer1.disabled = true
    answer2.disabled = true
    answer3.disabled = true
    answer4.disabled = true
}

let enableBtnSet = () => {
    answer1.disabled = false
    answer2.disabled = false
    answer3.disabled = false
    answer4.disabled = false

}