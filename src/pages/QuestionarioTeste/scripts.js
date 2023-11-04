import questions from "./questions";

document.addEventListener("DOMContentLoaded", function() {
    const question = document.querySelector(".question");
    const answers = document.querySelector(".answers");
    const spnQtd = document.querySelector(".spnQtd");
    const textFinish = document.querySelector(".finish span");
    const content = document.querySelector(".contentQuest1");
    const contentFinish = document.querySelector(".finish");
    const btnRestart = document.querySelector(".finish button");


    let currentIndex = 0;
    let questionsCorrect = 0;

    function nextQuestion(e) {
        if (e.target.getAttribute("data-correct") === "true") {
            questionsCorrect++;
        }

        if (currentIndex < questions.length - 1) {
            currentIndex++;
            loadQuestion();
        } else {
            finish()
        }
    }

    function finish() {
        textFinish.innerHTML = `você acetou ${questionsCorrect} de ${questions.length}`;
        content.style.display = 'none';
        contentFinish.style.display = 'flex'
    }

    function loadQuestion(){
        spnQtd.innerHTML = `${ currentIndex + 1 }/${questions.length}`;
        const item = questions[currentIndex];
        answers.innerHTML = "";
        question.innerHTML = item.question;

        item.answers.forEach((answer) => {
            const div = document.createElement("div")

            div.innerHTML = `
            <button class="answer" data-correct="${answer.correct}">
                ${answer.option}
            </button>`;

            answers.appendChild(div)
        });

        document.querySelectorAll(".answer").forEach((item) => {
            item.addEventListener("click", nextQuestion);
        });

        btnRestart.addEventListener("click", function() {
            content.style.display = "flex";
            contentFinish.style.display = "none";
        
            currentIndex = 0;
            questionsCorrect = 0;
            loadQuestion();
        });
        

    }


    loadQuestion();
});