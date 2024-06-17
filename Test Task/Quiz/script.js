const questions = [
    {
        question : "What is the capital of France?",
        answer : [
            {text : "New York", correct : false},
            {text : "Paris", correct : true},
            {text : "London", correct : false},
            {text : "Boston", correct : false}
        ]
    },
    {
        question : "Who painted the Mona Lisa?",
        answer : [
            {text : "Leonardo da Vinci", correct : true},
            {text : "Vincent van Gogh", correct : false},
            {text : "Pablo Picasso", correct : false},
            {text : "Claude Monet", correct : false}
        ]
    },
    {
        question : "What is the chemical formula for water?",
        answer : [
            {text : "O2", correct : false},
            {text : "NaCl", correct : false},
            {text : "CO2", correct : false},
            {text : "H2O", correct : true}
        ]
    }
]

const questionIndex = document.getElementById("question-count");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-button");