const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

const userInfoSection = document.getElementById("user-info-section");
const quizSection = document.getElementById("quiz-section");
const startQuizBtn = document.getElementById("start-quiz-btn");
const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");

let currentQuiz = 0;
let score = 0;
let quizData = [];
let userName = "";
let userAge = "";

const deselectAnswers = () => {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
};

const getSelected = () => {
  let selectedAnswerId = null;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      selectedAnswerId = answerEl.id;
    }
  });
  return selectedAnswerId;
};

const loadQuiz = () => {
  deselectAnswers();
  if (quizData.length === 0) {
    questionEl.innerText = "Error: No quiz data loaded.";
    return;
  }
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

// Function to fetch quiz data from a mock API endpoint
const fetchQuizData = async () => {
  try {
    const mockApiEndpoint = "https://mock-api.com/indian-history-quiz";

    const mockApiResponse = {
      questions: [
        { question: "Who was the first emperor of the Maurya Empire?", a: "Ashoka", b: "Bindusara", c: "Chandragupta Maurya", d: "Samudragupta", correct: "c" },
        { question: "The Battle of Plassey was fought in which year?", a: "1757", b: "1764", c: "1857", d: "1773", correct: "a" },
        { question: "Who founded the 'Ghadar Party'?", a: "Bhagat Singh", b: "Lala Har Dayal", c: "Sohan Singh Bhakna", d: "Subhas Chandra Bose", correct: "b" },
        { question: "The famous 'Dandi March' was led by?", a: "Sardar Patel", b: "Jawaharlal Nehru", c: "Mahatma Gandhi", d: "Subhas Chandra Bose", correct: "c" },
        { question: "Who was the first female Prime Minister of India?", a: "Pratibha Patil", b: "Indira Gandhi", c: "Sonia Gandhi", d: "Sarojini Naidu", correct: "b" },
        { question: "The Indus Valley Civilization's main city was?", a: "Harappa", b: "Lothal", c: "Mohenjo-daro", d: "Dholavira", correct: "c" },
        { question: "Which Mughal emperor built the Taj Mahal?", a: "Akbar", b: "Jahangir", c: "Shah Jahan", d: "Aurangzeb", correct: "c" },
        { question: "The Quit India Movement was launched in which year?", a: "1939", b: "1942", c: "1945", d: "1947", correct: "b" },
        { question: "Who is known as the 'Iron Man of India'?", a: "Jawaharlal Nehru", b: "Sardar Vallabhbhai Patel", c: "B. R. Ambedkar", d: "Subhas Chandra Bose", correct: "b" },
        { question: "The First Battle of Panipat was fought between?", a: "Akbar and Hemu", b: "Babur and Ibrahim Lodi", c: "Marathas and Ahmad Shah Abdali", d: "Humayun and Sher Shah Suri", correct: "b" },
        { question: "Which ruler founded the city of Amritsar?", a: "Guru Arjan Dev", b: "Guru Ram Das", c: "Guru Gobind Singh", d: "Maharaja Ranjit Singh", correct: "b" },
        { question: "Who was the last Mughal Emperor of India?", a: "Akbar II", b: "Bahadur Shah Zafar", c: "Alamgir II", d: "Shah Alam II", correct: "b" },
        { question: "The Rigveda is a collection of?", a: "Hymns", b: "Laws", c: "Stories", d: "Poems", correct: "a" },
        { question: "Which British Governor-General introduced the Doctrine of Lapse?", a: "Lord Dalhousie", b: "Lord Curzon", c: "Lord William Bentinck", d: "Lord Cornwallis", correct: "a" },
        { question: "Who composed the 'Vande Mataram'?", a: "Rabindranath Tagore", b: "Bankim Chandra Chattopadhyay", c: "Sarat Chandra Chattopadhyay", d: "Swami Vivekananda", correct: "b" },
      ]
    };

    // Simulate a network request delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real app, you would use fetch:
    // const response = await fetch(mockApiEndpoint);
    // if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    // const data = await response.json();
    
    // For this example, we use the mock data
    quizData = mockApiResponse.questions;

    if (quizData.length === 0) {
      throw new Error("API returned an empty question list.");
    }

    loadQuiz();
    submitBtn.style.display = 'block';
  } catch (error) {
    console.error("Failed to fetch quiz data:", error);
    questionEl.innerText = "Error loading quiz. Please try again later.";
    submitBtn.style.display = 'none';
  }
};

startQuizBtn.addEventListener("click", () => {
  userName = nameInput.value.trim();
  userAge = ageInput.value.trim();

  if (userName && userAge > 0) {
    userInfoSection.style.display = "none";
    quizSection.style.display = "block";
    fetchQuizData();
  } else {
    alert("Please enter a valid name and age to begin.");
  }
});

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <div class="result-container">
          <h2>Quiz Completed!</h2>
          <p><strong>Name:</strong> ${userName}</p>
          <p><strong>Age:</strong> ${userAge}</p>
          <p><strong>Score:</strong> You answered ${score}/${quizData.length} questions correctly.</p>
          <button onclick="location.reload()">Play Again</button>
        </div>
      `;
    }
  }
});

// Initially hide the quiz section
quizSection.style.display = 'none';