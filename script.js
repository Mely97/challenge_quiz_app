const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");

function showQuestion() {
  resetState();
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", selectAnswer);
    optionsElement.appendChild(button);
  });
  nextButton.classList.remove("hide");
}

function resetState() {
  while (optionsElement.firstChild) {
    optionsElement.removeChild(optionsElement.firstChild);
  }
  nextButton.classList.add("hide");
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const selectedAnswer = selectedButton.textContent;
  if (selectedAnswer === quizData[currentQuestionIndex].correctAnswer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionElement.classList.add("hide");
  optionsElement.classList.add("hide");
  nextButton.classList.add("hide");
  scoreContainer.classList.remove("hide");
  scoreElement.textContent = `Puntuación: ${score} de ${quizData.length}`;
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
});

showQuestion();
