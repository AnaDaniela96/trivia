import { questions } from './questions.js';

//Global variables
const containerHeader = document.getElementById('presentation-trivia');
let currentQuestionIndex = 0;
let selectedAnswers = [];

// containerQuestions.classList = 'd-none';

// Functions
const loadQuestion = (index) => {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const questionImage = document.getElementById('question-image');

    const question = questions[index];
    questionContainer.textContent = question.question;

    if (question.image) {
        questionImage.src = question.image;
        questionImage.style.display = 'block';
    } else {
        questionImage.style.display = 'none';
    }

    optionsContainer.innerHTML = '';

    for (let i = 1; i <= 4; i++) {
        const option = document.createElement('button');
        option.classList.add('btn', 'btn-secondary', 'mt-3');
        option.id = `option${i}`;
        option.textContent = question[`option${i}`];
        option.addEventListener('click', () => selectAnswer(question[`option${i}`]));
        optionsContainer.appendChild(option);
    }
}

const selectAnswer = (answer) => {
    selectedAnswers.push({
        question: questions[currentQuestionIndex].question,
        selected: answer,
        correct: questions[currentQuestionIndex].correct
    });

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

const showResults = () => {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const questionImage = document.getElementById('question-image');

    questionContainer.textContent = 'Resultados';
    optionsContainer.innerHTML = '';
    questionImage.style.display = 'none';

    selectedAnswers.forEach((answer, index) => {
        const result = document.createElement('div');
        result.classList.add('alert', answer.selected === answer.correct ? 'alert-success' : 'alert-danger');
        result.textContent = `${index + 1}. ${answer.question} - Tu respuesta: ${answer.selected} (Correcta: ${answer.correct})`;
        optionsContainer.appendChild(result);
    });
}

document.getElementById('openModalBtn').addEventListener('click', function () {
    const modal = document.getElementById('myModal');
    const overlay = document.getElementById('overlay');

    // Mostrar modal y overlay
    modal.style.display = 'block';
    overlay.style.display = 'block';
});

document.getElementById('submitBtn').addEventListener('click', function () {
    const name = document.getElementById('nameInput').value;
    const countdownElement = document.getElementById('output');

    // Ocultar modal y overlay
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

    // Esperar 2 segundos antes de comenzar la cuenta regresiva
    setTimeout(() => {
        let count = 3;
        countdownElement.textContent = count;

        const interval = setInterval(() => {
            count--;
            if (count > 0) {
                countdownElement.textContent = count;
            } else {
                clearInterval(interval);
                countdownElement.textContent = "Ok amistad: " + name + " es hora de jugar.";

                containerHeader.classList = 'd-none';
                loadQuestion(currentQuestionIndex)
            }
        }, 1000);
    }, 2000);
});

