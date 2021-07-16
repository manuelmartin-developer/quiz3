const preguntas = [

    {
        question: "¿De qué color están pintadas las paredes del apartamento de Mónica?",
        correctAnswer: ["Violeta"],
        incorrectAnswers: ["Blanco", "Amarillo", "Rosa"]
    },
    {
        question: "¿Cómo se llamaba el mono de Ross?",
        correctAnswer: ["Marcel"],
        incorrectAnswers: ["Ben", "Gunther", "Paolo"]
    },
    {
        question: "¿Cómo se llama la hermana gemela de Phoebe?",
        correctAnswer: ["Ursula"],
        incorrectAnswers: ["Lisa", "Janice", "Regina"]
    },
    {
        question: "¿Cuál es el segundo nombre de Rachel?",
        correctAnswer: ["Karen"],
        incorrectAnswers: ["Jill", "Emily", "Muriel"]
    },
    {
        question: "¿Cuál era el título de la telenovela protagonizada por Joey?",
        correctAnswer: ["Los días de nuestra vida"],
        incorrectAnswers: ["Amar es para siempre", "A flor de piel", "Los años felices"]
    },
    {
        question: "¿Qué festividad odia Chandler?",
        correctAnswer: ["Acción de gracias"],
        incorrectAnswers: ["Cumpleaños", "Navidad", "Halloween"]
    },
];

let pregunta = document.querySelector("#enunciado");

const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");
const resp4 = document.querySelector("#resp1");
const resps = document.querySelectorAll(".resp");

/************************************************/

let preguntaElegida = preguntas[Math.floor(Math.random()*preguntas.length)];

pregunta.innerHTML = preguntaElegida.question;

let correctAnswer = preguntaElegida.correctAnswer; 

let incorrectAnswers = preguntaElegida.incorrectAnswers;

let todasRespuestas = correctAnswer.concat(incorrectAnswers);

// Shuffle the correct answer
todasRespuestas = todasRespuestas.sort(() => Math.random() - 0.5);

for (let i=0; i<todasRespuestas.length; i++){

    let currentAnswer = resps[i];
    currentAnswer.innerHTML = todasRespuestas[i] 
    currentAnswer.addEventListener("click", () => {
        
         if (currentAnswer.textContent === correctAnswer[0]) {
            currentAnswer.style.backgroundColor = "green"
            hideBtn();
            setTimeout(() => {
               location.reload(); 
            }, 2000);
         } else {
            currentAnswer.style.backgroundColor = "red"
            hideBtn();
            setTimeout(() => {
                location.reload(); 
            }, 2000);
         } 

    })
}

function hideBtn() { 

    for (let div of resps) {
        div.disabled = true  
    }
    
}


/*

let button = document.querySelector("#btnindex");
button.addEventListener("click", function() {
    let correcto=0;
    
    let q1 = document.quiz.question1.value;
    let q2 = document.quiz.question2.value;
    let q3 = document.quiz.question3.value;
    let q4 = document.quiz.question4.value;
    let q5 = document.quiz.question5.value;

    let result = document.getElementById("result");
    let quiz = document.getElementById("quiz");

    if (q1 == "violeta") {correcto++}
    if (q2 == "marcel") {correcto++}
    if (q3 == "karen") {correcto++}
    if (q4 == "ursula") {correcto++}
    if (q5 == "gracias") {correcto++}
    
    quiz.style.display="none";

    if (correcto<=3) { 
        result.textContent = `Su resultado es ${correcto} sobre 5. Pruebe otra vez!`
    } else {
        result.textContent = `Su resultado es ${correcto} sobre 5. Bien hecho!`
    }  
  }

*/
