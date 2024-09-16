const questions = [
    {
        question: "Lana tem alguma formação acadêmica?",
        answers: 
            [
                "Filosofía", 
                "Música",
                "Metafísica", 
                "Ela não se fomou em nada"
            ],
        correctAnswer: 2
    },
    {
        question: "Qual time de tutebol Elizabeth torce?",
        answers: 
            [
                "Manchester United", 
                "Liverpool", 
                "Corinthians", 
                "Everton"
            ],
        correctAnswer: 1
    },
    {
        question: "Qual desses cantores não fez um 'feat' com ela ",
        answers:
            [
                "Drake",
                "The Weekend",
                "A$ap Rocky",
                "Taylor Swifth;"
            ],
        correctAnswer: 0
    },
    {
        question: "Quantos premios Lana já ganhou?",
        answers: 
            [
                "10", 
                "12", 
                "15", 
                "19"
            ],
        correctAnswer: 2
    },
    {
        question: "It's you, it's you, it's all for you/Everything I do",
        answers: 
            [
                "I tell you all the time/Heaven is a place on earth with you", 
                "All the people in the dance will agree/That we're well-qualified to represent the L. B. C", 
                "I just wanted you to know/That baby, you're the best", 
                "If you're not drinking/Then you're not playing"
            ],
        correctAnswer: 0
    },
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;