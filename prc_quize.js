const quiz = [
    {
    question: "売れたゲーム",
    answers: [
        "ファミコン",
        "DS",
        "switch",
        "wii"
    ],
    correct: "DS"
},{
    question: "売れた",
    answers: [
        "ファミ",
        "DS",
        "swit",
        "wii"
    ],
    correct: "DS"

},{
    question: "ゲーム",
    answers: [
        "コン",
        "DS",
        "itch",
        "wii"
    ],
    correct: "DS"
}
]

let quizIndex = 0;

let score = 0;

const $button = document.getElementsByTagName("button");

const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < quiz[quizIndex].answers.length){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("correct!!");
        score++;
    } else {
        window.alert("worng");
    }
    quizIndex++;

    if(quizIndex < quiz.length){
        setupQuiz();
    } else {
        window.alert("end! your score" + score + "/" + quiz.length + ".");
    }
}

setupQuiz();

let handlerIndex = 0;
while(handlerIndex < $button.length){
    $button[handlerIndex].addEventListener("click", (e)=>{
        clickHandler(e);
    });
    handlerIndex++;
}
