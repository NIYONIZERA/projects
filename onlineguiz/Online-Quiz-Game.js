const readline = require('readline');

// An array of objects representing quiz questions with their answers
const quizQuestions = [
  {
    question: "What is the capital of Italy?",
    options: ["Paris", "Rome", "Madrid", "London"],
    correctAnswer: "Rome",
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Mars", "Venus", "Earth", "Mercury"],
    correctAnswer: "Mercury",
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: [
      "Jane Austen",
      "Charles Dickens",
      "Leo Tolstoy",
      "William Shakespeare",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["Wa", "H2O", "Wt", "H2"],
    correctAnswer: "H2O",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
];

// Initialize score counters
let correctAnswers = 0;
let incorrectAnswers = 0;

// Function to display a random question
function displayRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * quizQuestions.length);
  const questionObject = quizQuestions[randomIndex];
  console.log(questionObject.question); // Display the question
  // Display options
  questionObject.options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Prompt user for input
  rl.question("Enter the number of your answer: ", (userAnswer) => {
    rl.close();
    // Check if the answer is correct or not
    if (
      userAnswer &&
      parseInt(userAnswer) - 1 === questionObject.options.indexOf(questionObject.correctAnswer)
    ) {
      console.log("Correct!");
      correctAnswers++;
    } else {
      console.log("Incorrect!");
      incorrectAnswers++;
    }
  });
}

// Function to start the quiz
function startQuiz() {
  for (let i = 0; i < 6; i++) {
    displayRandomQuestion();
  }
  // Display the final score at the end of the quiz
  console.log(`Quiz completed! Correct answers: ${correctAnswers}, Incorrect answers: ${incorrectAnswers}`);
}

// Calling startQuiz function
startQuiz();
