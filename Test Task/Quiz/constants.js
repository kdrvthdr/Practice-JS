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
const timerElement = document.getElementById("timer");