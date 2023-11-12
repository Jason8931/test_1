var questions = [
    {
        question: "Сколько у меня имён",
        options: ["Одно", "Два", "Три", "Четыре"],
        correctAnswer: "Четыре"
    },
    {
        question: "Когда у меня ДР",
        options: ["13.9", "13.8", "4.6", "4.9"],
        correctAnswer: "13.9"
    },
    {
        question: "Сколько часов я сплю",
        options: ["2", "3", "4", "5"],
        correctAnswer: "5"
    },
    {
        question: "Кто я по ЗЗ",
        options: ["Лев", "Козерог", "Стрелец", "Дева"],
        correctAnswer: "Дева"
    },
    {
        question: "У меня есть девушка?",
        options: ["Да", "Нет"],
        correctAnswer: "Нет"
    },
    {
        question: "Имя моей возлюбленой",
        options: ["Настя", "Аня", "Полина", "Даша"],
        correctAnswer: "Аня"
    },
    {
        question: "Моя любимая игра",
        options: ["Roblox", "Genshin Impact", "FlyOrDie", "Love and firs taIl"],
        correctAnswer: "Love and firs taIl"
    },
];
var currentQuestion = 0;
var correctAnswers = 0;






function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}




function nextQuestion(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    } currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}




function displayQuestion() {
    var questionElement = document.getElementById("question");
    questionElement.textContent = "Вопрос " + (currentQuestion + 1) + ": " +
        questions[currentQuestion].question;
    var optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";
    var shuffledOptions = shuffleArray(questions[currentQuestion].options);
    for (var i = 0; i < shuffledOptions.length; i++) {
        var option = shuffledOptions[i];
        optionsElement.innerHTML += `<button onclick="nextQuestion('${option}')">${option}</button>`;
    }
}



function displayResult() {
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var resultElement = document.getElementById("result");

    questionElement.style.display = "none";
    optionsElement.style.display = "none";

    resultElement.textContent = "Правильных ответов: " + correctAnswers + " из " +
        questions.length;
    resultElement.style.display = "block";
}



displayQuestion();