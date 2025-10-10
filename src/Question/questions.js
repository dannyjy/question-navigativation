const QuizQuestions = [
    {
        question: "What is the capital of France?",
        isCompleted: false,
        answers: [
            { text: "Berlin", isCorrect: false },
            { text: "Madrid", isCorrect: false },
            { text: "Paris", isCorrect: true },
            { text: "Rome", isCorrect: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        isCompleted: false,
        answers: [
            { text: "Earth", isCorrect: false },
            { text: "Mars", isCorrect: true },
            { text: "Jupiter", isCorrect: false },
            { text: "Venus", isCorrect: false }
        ]
    },
    {
        question: "What is 7 multiplied by 8?",
        isCompleted: false,
        answers: [
            { text: "56", isCorrect: true },
            { text: "49", isCorrect: false },
            { text: "64", isCorrect: false },
            { text: "72", isCorrect: false }
        ]
    },
    {
        question: "In which year did the first human land on the Moon?",
        isCompleted: false,
        answers: [
            { text: "1965", isCorrect: false },
            { text: "1969", isCorrect: true },
            { text: "1971", isCorrect: false },
            { text: "1957", isCorrect: false }
        ]
    },
    {
        question: "What is the primary gas found in the air we breathe?",
        isCompleted: false,
        answers: [
            { text: "Oxygen", isCorrect: false },
            { text: "Carbon Dioxide", isCorrect: false },
            { text: "Nitrogen", isCorrect: true }, // The right answer (it makes up about 78%)
            { text: "Argon", isCorrect: false }
        ]
    },
    {
        question: "Which of these is NOT a programming language?",
        isCompleted: false,
        answers: [
            { text: "Python", isCorrect: false },
            { text: "HTML", isCorrect: true }, // HTML is a markup language, not a programming language
            { text: "Java", isCorrect: false },
            { text: "C++", isCorrect: false }
        ]
    },
    {
        question: "How many sides does a pentagon have?",
        isCompleted: false,
        answers: [
            { text: "4", isCorrect: false },
            { text: "6", isCorrect: false },
            { text: "5", isCorrect: true },
            { text: "7", isCorrect: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        isCompleted: false,
        answers: [
            { text: "Atlantic Ocean", isCorrect: false },
            { text: "Indian Ocean", isCorrect: false },
            { text: "Arctic Ocean", isCorrect: false },
            { text: "Pacific Ocean", isCorrect: true }
        ]
    },
    {
        question: "What chemical element has the symbol 'Fe'?",
        isCompleted: false,
        answers: [
            { text: "Fluorine", isCorrect: false },
            { text: "Iron", isCorrect: true },
            { text: "Silver", isCorrect: false },
            { text: "Gold", isCorrect: false }
        ]
    },
    {
        question: "Which term is used to describe a set of rules that governs communication?",
        isCompleted: false,
        answers: [
            { text: "Syntax", isCorrect: false },
            { text: "Algorithm", isCorrect: false },
            { text: "Protocol", isCorrect: true },
            { text: "Middleware", isCorrect: false }
        ]
    }
];

export default QuizQuestions;