"use strict"

var UserScore = 0;
var ComputerScore = 0;
const UserScore_span = document.getElementById("user-score");
const ComputerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const r_div = document.getElementById("r");
const p_div = document.getElementById("p");
const s_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const RandomNumber = Math.floor(Math.random() * 3);
    return choices[RandomNumber];
}

function convertLetter(letter) {
    if (letter == "r") return "roca";
    if (letter == "p") return "papel";
    return "tijeras";
}

function win(userChoice, computerChoice) {
    UserScore++;
    UserScore_span.innerHTML = UserScore;
    ComputerScore_span.innerHTML = ComputerScore;

    result_p.innerHTML = `${convertLetter(userChoice)} vence a ${convertLetter(computerChoice)} <h5>Ganaste</h5>`;
    let userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add("green-glow");
    setTimeout(() => { userChoice_div.classList.remove("green-glow") }, 1000);
    let computerChoice_div = document.getElementById(computerChoice);
    computerChoice_div.classList.add("red-glow");
    setTimeout(() => { computerChoice_div.classList.remove("red-glow") }, 1000);

}
function lose(userChoice, computerChoice) {
    ComputerScore++;
    UserScore_span.innerHTML = UserScore;
    ComputerScore_span.innerHTML = ComputerScore;
    result_p.innerHTML = `${convertLetter(userChoice)} vence a ${convertLetter(computerChoice)} <h5>Perdiste</h5>`;


    let userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add("green-glow");
    setTimeout(() => { userChoice_div.classList.remove("green-glow") }, 1000);
    let computerChoice_div = document.getElementById(computerChoice);
    computerChoice_div.classList.add("red-glow");
    setTimeout(() => { computerChoice_div.classList.remove("red-glow") }, 1000);

}
function draw(userChoice, computerChoice) {
    console.log("draw");
    result_p.innerHTML = `Empate`;

    let userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add("yellow-glow");
    setTimeout(() => { userChoice_div.classList.remove("yellow-glow") }, 1000);
    let computerChoice_div = document.getElementById(computerChoice);
    computerChoice_div.classList.add("gray-glow");
    setTimeout(() => { computerChoice_div.classList.remove("yellow-glow") }, 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }

}

function main() {
    r_div.addEventListener("click", () => {
        console.log("click en roca");
        game("r");
    });

    p_div.addEventListener("click", () => {
        console.log("click en papel");
        game("p");
    });

    s_div.addEventListener("click", () => {
        console.log("click en tijera");
        game("s");
    });
}
main();
