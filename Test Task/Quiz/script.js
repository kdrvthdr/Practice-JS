const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "New York", correct: false },
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Boston", correct: false }
        ],
        several: false
    },
    {
        question: "Which of these books were written by J.K. Rowling?",
        answers: [
            { text: "Harry Potter and the Philosopher's Stone", correct: true },
            { text: "The Hobbit", correct: false },
            { text: "Fantastic Beasts and Where to Find Them", correct: true },
            { text: "The Lord of the Rings", correct: false }
        ],
        several: true
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ],
        several: false
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false }
        ],
        several: false
    },
    {
        question: "Select the colors of the rainbow.",
        answers: [
            { text: "Red", correct: true },
            { text: "Pink", correct: false },
            { text: "White", correct: false },
            { text: "Black", correct: false },
            { text: "Blue", correct: true },
            { text: "Green", correct: true }
        ],
        several: true
    },
    {
        question: "Who invented the telephone?",
        answers: [
            { text: "Thomas Edison", correct: false },
            { text: "Alexander Graham Bell", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Isaac Newton", correct: false }
        ],
        several: false
    },
    {
        question: "What is the chemical formula for water?",
        answers: [
            { text: "O2", correct: false },
            { text: "NaCl", correct: false },
            { text: "CO2", correct: false },
            { text: "H2O", correct: true }
        ],
        several: false
    },
    {
        question: "Who portrayed the main characters in 'The Avengers' (2012)?",
        answers: [
            { text: "Robert Downey Jr.", correct: true },
            { text: "Chris Evans", correct: true },
            { text: "Scarlett Johansson", correct: true },
            { text: "Leonardo DiCaprio", correct: false },
            { text: "Tom Hiddleston", correct: true },
            { text: "Margot Robbie", correct: false }
        ],
        several: true
    },
    {
        question: "Which bands or artists are known for their contributions to rock music?",
        answers: [
            { text: "The Beatles", correct: true },
            { text: "Led Zeppelin", correct: true },
            { text: "Beyoncé", correct: false },
            { text: "Eminem", correct: false },
            { text: "The Rolling Stones", correct: true },
            { text: "Adele", correct: false }
        ],
        several: true
    },
    {
        question: "Who is the king of the Greek gods in mythology?",
        answers: [
            { text: "Zeus", correct: true },
            { text: "Poseidon", correct: false },
            { text: "Hades", correct: false },
            { text: "Apollo", correct: false }
        ],
        several: false
    }
];

const questionIndex = document.getElementById("question-count");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const answerInfo = document.getElementById("answer-info");
const nextBtn = document.getElementById("next-button");
const checkBtn = document.getElementById("check-button");

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = [];
    nextBtn.innerText = "Next";
    nextBtn.removeEventListener("click", startQuiz);
    nextBtn.addEventListener("click", handleNextButton);
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionIndex.innerText = `${questionNumber}/${questions.length}`;
    questionElement.innerText = currentQuestion.question;
    if (currentQuestion.several) {
        answerInfo.innerText = "You can choose several answers.";
        checkBtn.style.display = "block";
    } else {
        answerInfo.innerText = "";
        checkBtn.style.display = "none";
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        button.addEventListener("click", () => {
            if (currentQuestion.several) {
                toggleAnswer(button, answer);
            } else {
                selectAnswer(button, answer);
            }
        });
    });
}

function resetState() {
    nextBtn.style.display = "none";
    checkBtn.style.display = "none";
    questionElement.classList.remove("correct", "incorrect");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(button, answer) {
    const isCorrect = answer.correct;

    answerButtons.querySelectorAll(".btn").forEach(btn => {
        btn.classList.remove("selected", "correct", "incorrect");
    });

    if (isCorrect) {
        button.classList.add("correct");
        score++; 
    } else {
        button.classList.add("incorrect");
    }

    button.disabled = true;
    nextBtn.style.display = "block";
}


function toggleAnswer(button, answer) {
    const index = selectedAnswers.findIndex(ans => ans.text === answer.text);
    if (index === -1) {
        selectedAnswers.push(answer);
        button.classList.add("selected");
    } else {
        selectedAnswers.splice(index, 1);
        button.classList.remove("selected");
    }
}


checkBtn.addEventListener("click", () => {
    const correctAnswers = questions[currentQuestionIndex].answers.filter(answer => answer.correct);

    answerButtons.querySelectorAll(".btn").forEach(button => {
        const answerText = button.innerText;
        const isCorrect = correctAnswers.some(answer => answer.text === answerText);
        button.classList.remove("selected");

        if (selectedAnswers.some(answer => answer.text === answerText)) {
            if (isCorrect) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
        } else if (isCorrect) {
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    const allCorrect = selectedAnswers.length === correctAnswers.length && 
                      selectedAnswers.every(answer => correctAnswers.some(ans => ans.text === answer.text));

    if (allCorrect) {
        score++;
        selectedAnswers = [];
    }

    checkBtn.style.display = "none";
    nextBtn.style.display = "block";
});


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
    checkBtn.removeEventListener("click", checkAnswers);
     
}


function showScore() {
    resetState();
    questionIndex.innerText = `Quiz Completed!`;
    questionElement.innerText = `You scored ${score} out of ${questions.length}`;
    answerInfo.innerHTML = "";
    nextBtn.innerText = "Restart Quiz";
    nextBtn.addEventListener("click", startQuiz);
    nextBtn.style.display = "block";
}

startQuiz();
