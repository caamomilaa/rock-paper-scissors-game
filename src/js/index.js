// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

let userPoints = 0;
let pcPoints = 0;
let userSelection;
let pcSelection;
const gameContainerElement = document.getElementById("game-container");

const handleClick = (event) => {
  console.log(event.target);
};
gameContainerElement.addEventListener("click", handleClick);

//falta lo de pointer events porque da click en cualquier lado esat cosa.

//const setUserSelection = (event) => {};

const setPCSelection = () => {};
