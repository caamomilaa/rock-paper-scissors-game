// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

//ORGANIZACIÓN DEL CÓDIGO
//elementos del dom
//consts que no sean del dom
//let
//funciones - solo una llamada dentro de la funcion, no es obligatorio, pero preferible.
//evento de escucha

const gameContainerElement = document.getElementById("game-container");
const winningTextElement = document.getElementById("winning-text");
const pickedUserImageElement = document.getElementById("picked-user-image");
const pickedPcImageElement = document.getElementById("picked-pc-image");
const pointsUserElement = document.getElementById("points-user");
const pointsPcElement = document.getElementById("points-pc");
const tryAgainElement = document.getElementById("try-again");

const pcOptions = ["paper", "scissors", "rock"];

const gameOptions = {
  paper: {
    rock: true,
    scissors: false,
  },
  scissors: {
    paper: true,
    rock: false,
  },
  rock: {
    scissors: true,
    paper: false,
  },
};

const gameImage = {
  paper: "../assets/images/icon-paper.svg",
  rock: "../assets/images/icon-rock.svg",
  scissors: "../assets/images/icon-scissors.svg",
};

let userPoints = 0;
let pcPoints = 0;
let userSelection;
let pcSelection;

const whoWins = () => {
  if (userSelection === pcSelection) {
    winningTextElement.textContent = "TIE";
    return;
  }
  if (gameOptions[userSelection][pcSelection]) {
    winningTextElement.textContent = "YOU WIN";
    userPoints++;
  } else {
    winningTextElement.textContent = "YOU LOSE";
    pcPoints++;
  }
  pointsUserElement.textContent = userPoints;
  pointsPcElement.textContent = pcPoints;
};

const changeResultImage = () => {
  pickedUserImageElement.src = gameImage[userSelection];
  pickedPcImageElement.src = gameImage[pcSelection];
  whoWins();
};

const setPCSelection = () => {
  const randomNumber = Math.floor(Math.random() * pcOptions.length);
  pcSelection = pcOptions[randomNumber];
  console.log(userSelection + "---" + pcSelection);
  changeResultImage();
};

const setUserSelection = (event) => {
  userSelection = event.target.dataset.item;
  setPCSelection();
};

gameContainerElement.addEventListener("click", setUserSelection);

//falta div que desaparezca y avanzado

//  - Comparar jugadas

//if para empate y if else para saber si has ganado o perdido

// PAPER: paper win against rock, paper defeat against scissors
//SCISSORS: scissors win against paper, scissors defeat against rock
//ROCK: rock win against scissors, rock defeat against paper

//OBJETO QUE GUARDE LO QUE GANA Y PIERDE

//true, false perder

//ya tengo las opciones. Necesito sacar los true y los false

//log gameOptions [1][2][3][4][5][6]
//values

//para que salgan los valores que quiero (si has ganado por ej), necesitaría un div vacia que le meta text content

//PRIMERO: div que aprezca y desaparezca
