let score = 0;
let total = 0;

function startEnglish() {
    score = 0;
    total = 2;
    document.getElementById('content').innerHTML = `
        <h3>A1-A2 Ағылшын тапсырмалары</h3>
        <p>1. To be формасын таңдаңыз:</p>
        <p>She ___ a doctor.</p>
        <button onclick="checkAnswer('is', true)">is</button>
        <button onclick="checkAnswer('are', false)">are</button>
        <button onclick="checkAnswer('am', false)">am</button>
        <p>2. Керекті сөзді таңдаңыз: I ___ a student.</p>
        <button onclick="checkAnswer('am', true)">am</button>
        <button onclick="checkAnswer('is', false)">is</button>
        <button onclick="checkAnswer('are', false)">are</button>
        <button onclick="showResult()">Нәтиже көру</button>
    `;
}

function startRussian() {
    score = 0;
    total = 2;
    document.getElementById('content').innerHTML = `
        <h3>A1-A2 Орыс тапсырмалары</h3>
        <p>1. "Мама" сөзін аударыңыз:</p>
        <button onclick="checkAnswer('mother', true)">mother</button>
        <button onclick="checkAnswer('father', false)">father</button>
        <p>2. "Книга" сөзін аударыңыз:</p>
        <button onclick="checkAnswer('book', true)">book</button>
        <button onclick="checkAnswer('pen', false)">pen</button>
        <button onclick="showResult()">Нәтиже көру</button>
    `;
}

function checkAnswer(answer, correct) {
    if (correct) {
        alert("Дұрыс!");
        score++;
    } else {
        alert("Қате!");
    }
}

function showResult() {
    document.getElementById('content').innerHTML += `
        <div class="result">
            <h4>Нәтиже:</h4>
            <p>Дұрыс жауаптар: ${score} / ${total}</p>
            <p>Сіздің ұпайыңыз: ${Math.round((score/total)*100)}%</p>
        </div>
    `;
}
