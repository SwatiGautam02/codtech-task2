// Login
function login() {
  const username = document.getElementById("username").value;
  if (username) {
    localStorage.setItem("user", username);
    alert("Login successful!");
    window.location.href = "course.html";
  } else {
    alert("Please enter your name.");
  }
}

// Quiz
const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which tag is used for creating a hyperlink?",
    options: ["<link>", "<a>", "<href>"],
    answer: "<a>"
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which language is used to add interactivity?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Which tag is used to insert an image?",
    options: ["<image>", "<img>", "<src>"],
    answer: "<img>"
  }
];

let currentQuestion = 0;
let score = 0;

window.onload = function () {
  if (document.getElementById("question")) {
    showQuestion();
  }
};

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === q.answer) {
        score++;
        alert("Correct!");
      } else {
        alert("Wrong!");
      }

      updateProgress();

      // Automatically move to the next question
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
      } else {
        alert(`Quiz completed! Your score: ${score}/${questions.length}`);
        localStorage.setItem("quizScore", score);
      }
    };
    optionsDiv.appendChild(btn);
  });
}


function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    localStorage.setItem("quizScore", score);
  }
}

function updateProgress() {
  const progress = document.getElementById("progressBar");
  if (progress) {
    progress.value = currentQuestion + 1;
  }
}
