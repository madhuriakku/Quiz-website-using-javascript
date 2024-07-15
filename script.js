const questions = [
    { question: "What is the capital of France?", choices: ["Berlin", "Madrid", "Paris", "Lisbon"], answer: "Paris" },
    { question: "What is the largest planet in our solar system?", choices: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
    { question: "Who wrote 'Romeo and Juliet'?", choices: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"], answer: "William Shakespeare" },
    { question: "What is the chemical symbol for water?", choices: ["O2", "H2O", "CO2", "NaCl"], answer: "H2O" },
    { question: "What is the capital of Japan?", choices: ["Seoul", "Tokyo", "Beijing", "Bangkok"], answer: "Tokyo" },
    { question: "Who painted the Mona Lisa?", choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci" },
    { question: "What is the largest mammal?", choices: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"], answer: "Blue Whale" },
    { question: "What is the hardest natural substance on Earth?", choices: ["Gold", "Iron", "Diamond", "Quartz"], answer: "Diamond" },
    { question: "What is the smallest unit of life?", choices: ["Atom", "Molecule", "Cell", "Organ"], answer: "Cell" },
    { question: "Who is known as the father of computers?", choices: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"], answer: "Charles Babbage" },
    { question: "What is the capital of Italy?", choices: ["Venice", "Rome", "Milan", "Florence"], answer: "Rome" },
    { question: "What is the speed of light?", choices: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], answer: "300,000 km/s" },
    { question: "What is the main ingredient in guacamole?", choices: ["Tomato", "Onion", "Avocado", "Lettuce"], answer: "Avocado" },
    { question: "What is the largest ocean?", choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
    { question: "What year did the Titanic sink?", choices: ["1905", "1912", "1918", "1923"], answer: "1912" },
  ];
  let currentQuestionIndex = 0;
  
  function showQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.onclick = () => selectAnswer(choice);
      choicesElement.appendChild(button);
    });
  }
  let score = 0;
  
  function selectAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.answer) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>Your score: ${score}/${questions.length}</h2>`;
  }
  
  document.getElementById('next-button').onclick = showQuestion;
  showQuestion();
  