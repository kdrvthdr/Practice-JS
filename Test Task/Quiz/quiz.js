let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];
let time = 15;
let timerInterval;

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
    const currentQuestion = questions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    questionIndex.innerText = `${questionNumber}/${questions.length}`;
    questionElement.innerText = currentQuestion.question;
    if (currentQuestion.several) {
        answerInfo.innerText = "You can choose several answers.";
        checkBtn.style.display = "block";
    } else {
        answerInfo.innerText = "";
        checkBtn.style.display = "none";
    }

    if (timerInterval) {
        clearInterval(timerInterval);
    }
    time = 15;
    timerElement.innerText = `00:15`;
    timerInterval = setInterval(updateTimer, 1000);

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
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    time = 15;
}

function selectAnswer(button, answer) {
    const isCorrect = answer.correct;

    answerButtons.querySelectorAll(".btn").forEach(btn => {
        btn.classList.remove("selected", "correct", "incorrect");
        btn.disabled = true;
    });

    if (isCorrect) {
        button.classList.add("correct");
        score++; 
    } else {
        button.classList.add("incorrect");
    }

    button.disabled = true;
    nextBtn.style.display = "block";
    clearInterval(timerInterval);
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
    clearInterval(timerInterval);
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
    timerElement.innerHTML = "";
    nextBtn.innerText = "Restart Quiz";
    nextBtn.addEventListener("click", startQuiz);
    nextBtn.style.display = "block";
}


function updateTimer(){
    let seconds = time;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerElement.innerText = `00:${seconds}`;
    if (time > 0) {
        time--;
    } else {
        clearInterval(timerInterval);
        showCorrectAnswers();
        checkBtn.style.display = "none";
        nextBtn.style.display = "block";
    }
}


function showCorrectAnswers() {
    const correctAnswers = questions[currentQuestionIndex].answers.filter(answer => answer.correct);
    
    answerButtons.querySelectorAll(".btn").forEach(button => {
        const answerText = button.innerText;
        const isCorrect = correctAnswers.some(answer => answer.text === answerText);
        
        button.classList.remove("selected");
        
        if (isCorrect) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
        
        button.disabled = true;
    });
}


startQuiz();
