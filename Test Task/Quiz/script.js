const questions = [
    {
        question : "What is the capital of France?",
        answers : [
            {text : "New York", correct : false},
            {text : "Paris", correct : true},
            {text : "London", correct : false},
            {text : "Boston", correct : false}
        ]
    },
    {
        question : "Who painted the Mona Lisa?",
        answers : [
            {text : "Leonardo da Vinci", correct : true},
            {text : "Vincent van Gogh", correct : false},
            {text : "Pablo Picasso", correct : false},
            {text : "Claude Monet", correct : false}
        ]
    },
    {
        question : "What is the chemical formula for water?",
        answers : [
            {text : "O2", correct : false},
            {text : "NaCl", correct : false},
            {text : "CO2", correct : false},
            {text : "H2O", correct : true}
        ]
    }
];


const questionIndex = document.getElementById("question-count");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-button");


let currentQuestionIndex = 0;
let score = 0;



function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQestion();
}


function showQestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumb = currentQuestionIndex + 1;
    questionIndex.innerHTML = questionNumb + "/" + questions.length;
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}


function resetState(){
    nextBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQestion();
    }else{
        
    }
}


nextBtn.addEventListener("click", () =>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();