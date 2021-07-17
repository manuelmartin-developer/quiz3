import { preguntas } from "./preguntas.js";

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





