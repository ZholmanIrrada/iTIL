const tasks = [
    {
        question: "A1 (Ағылшын): 'apple' сөзінің дұрыс аудармасы?",
        options: ["яблоко", "банан", "груша", "апельсин"],
        correct: "яблоко"
    },
    {
        question: "A2 (Ағылшын): 'book' сөзінің дұрыс аудармасы?",
        options: ["книга", "тетрадь", "линейка", "ручка"],
        correct: "книга"
    },
    {
        question: "A1 (Орыс): 'Доброе утро' ағылшын тілінде қалай?",
        options: ["Good morning", "Good evening", "Good night", "Hello"],
        correct: "Good morning"
    }
];

let userAnswers = new Array(tasks.length).fill(null); // Пайдаланушы жауаптарын сақтау
let score = 0;

const container = document.getElementById("taskContainer");

tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.classList.add("task");

    const q = document.createElement("h3");
    q.textContent = `${index + 1}. ${task.question}`;
    div.appendChild(q);

    task.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => {
            // Бірінші жауапты сақтау
            if (userAnswers[index] !== null) return; // Бір ғана жауапқа рұқсат

            userAnswers[index] = option; // Жауапты сақтау
            if (option === task.correct) {
                btn.style.backgroundColor = "green";
            } else {
                btn.style.backgroundColor = "red";
            }

            // Басқа батырмаларды блоктау
            const buttons = div.querySelectorAll("button");
            buttons.forEach(b => b.disabled = true);
        };
        div.appendChild(btn);
    });

    container.appendChild(div);
});

function showScore() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === tasks[index].correct) {
            score++;
        }
    });

    document.getElementById("scoreDisplay").textContent = `Сіздің нәтижеңіз: ${score} / ${tasks.length}`;
}
