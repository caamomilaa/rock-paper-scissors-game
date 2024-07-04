// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

//ORGANIZACIÓN DEL CÓDIGO
//elementos del dom
//consts que no sean del dom
//let
//funciones - solo una llamada dentro de la funcion, no es obligatorio, pero preferible.
//acciones (como por ejemplo el if de este ejercicio), codigo que se ejecuta cuando carga la pag, sin esperar que pase nada
//evento de escucha

const gameContainerElement = document.getElementById("game-container");
const winningTextElement = document.getElementById("winning-text");
const pickedUserImageElement = document.getElementById("picked-user-image");
const pickedPcImageElement = document.getElementById("picked-pc-image");
const pointsUserElement = document.getElementById("points-user");
const pointsPcElement = document.getElementById("points-pc");
const moveContainerElement = document.getElementById("move-container");
const tryAgainElement = document.getElementById("try-again");
const rulesElement = document.getElementById("rules");

const pcOptions = ["paper", "scissors", "rock"];

const gameOptions = {
  rock: {
    scissors: true,
    lizard: true,
    paper: false,
    spock: false,
  },
  scissors: {
    paper: true,
    lizard: true,
    rock: false,
    spock: false,
  },
  paper: {
    rock: true,
    spock: true,
    lizard: false,
    scissors: false,
  },
  lizard: {
    paper: true,
    spock: true,
    scissors: false,
    rock: false,
  },
  spock: {
    rock: true,
    scissors: true,
    paper: false,
    lizard: false,
  },
};

const gameImage = {
  paper: "../assets/images/icon-paper.svg",
  rock: "../assets/images/icon-rock.svg",
  scissors: "../assets/images/icon-scissors.svg",
  lizard: "../assets/images/icon-lizard.svg",
  spock: "../assets/images/icon-spock.svg",
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
  hideGame();
};

const changeResultClasses = () => {
  const parentUser = pickedUserImageElement.parentElement;
  const lastClassUser = parentUser.classList.length - 1;

  const parentPC = pickedPcImageElement.parentElement;
  const lastClassPC = parentPC.classList.length - 1;

  parentUser.classList.remove(parentUser.classList[lastClassUser]);
  parentUser.classList.add(userSelection);

  parentPC.classList.remove(parentPC.classList[lastClassPC]);
  parentPC.classList.add(pcSelection);
};

const changeResultImage = () => {
  pickedUserImageElement.src = gameImage[userSelection];
  pickedPcImageElement.src = gameImage[pcSelection];
  whoWins();
  changeResultClasses();
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
const hideGame = () => {
  gameContainerElement.classList.add("hide");
  moveContainerElement.classList.remove("hide");
};

const hideMove = () => {
  gameContainerElement.classList.remove("hide");
  moveContainerElement.classList.add("hide");
};

if (document.body.dataset.mode === "advanced") {
  pcOptions.push("spock", "lizard");
}

gameContainerElement.addEventListener("click", setUserSelection);
tryAgainElement.addEventListener("click", hideMove);

//log dentro de un if
//antes de añadir una hay que quitar anterior

//las clsases son un array -1

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
