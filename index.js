var quizQuestions = [
  { question: "What is the capital of India?", answer: "delhi" },
  { question: "Which keyword is used to declare a variable?", answer: "let" },
  { question: "What symbol is used for comments?", answer: "//" },
  { question: "Which loop runs a fixed number of times?", answer: "for" },
  { question: "Which function takes input from the user?", answer: "prompt" }
];

function runQuiz() {
  var score = 0;

  for (var i = 0; i < quizQuestions.length; i++) {
    var userAnswer = prompt(quizQuestions[i].question);

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct");
      score++;
    } else {
      alert("Wrong. Correct answer is " + quizQuestions[i].answer);
    }
  }

  alert("Your final score is " + score + " out of " + quizQuestions.length);
}

runQuiz();
