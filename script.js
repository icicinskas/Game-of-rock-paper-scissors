"use strict";

const btn = document.querySelector("button");

let playerChoose = 0;
let pcChoose = 0;
let playerScore = 0;
let pcScore = 0;

function rockChoose() {
  if (playerChoose !== 0)
    return alert("Jau pasirinkote, spauskite mygtuką STRAT");
  const rock = document.getElementById("rock");
  rock.classList.add("selected");
  return (playerChoose = 1);
}

function paperChoose() {
  if (playerChoose !== 0)
    return alert("Jau pasirinkote, spauskite mygtuką STRAT");
  const paper = document.getElementById("paper");
  paper.classList.add("selected");
  return (playerChoose = 2);
}

function scissorsChoose() {
  if (playerChoose !== 0)
    return alert("Jau pasirinkote, spauskite mygtuką STRAT");
  const scissors = document.getElementById("scissors");
  scissors.classList.add("selected");
  return (playerChoose = 3);
}

function pcChooses() {
  let chose = Math.floor(Math.random() * 3) + 1;
  computer();
  if (chose === 1) {
    const pcRock = document.getElementById("rock-pc");
    pcRock.classList.add("pcselected");
  } else if (chose === 2) {
    const pcPaper = document.getElementById("paper-pc");
    pcPaper.classList.add("pcselected");
  } else if (chose === 3) {
    const pcScissors = document.getElementById("scissors-pc");
    pcScissors.classList.add("pcselected");
  }
  pcChoose = chose;
  console.log(chose);
}

function comparison() {
  if (pcChoose === playerChoose) return alert("Lygiosios");
  if (pcChoose > playerChoose && pcChoose !== 3) {
    pcScore++;
    return alert("Kompiuteris laimėjo");
  } else if (pcChoose > playerChoose && pcChoose === 3 && playerChoose === 1) {
    playerScore++;
    return alert("Laimėjo žaidėjas");
  } else if (pcChoose > playerChoose && pcChoose === 3 && playerChoose === 2) {
    pcScore++;
    return alert("Kompiuteris laimėjo");
  } else if (playerChoose > pcChoose && playerChoose !== 3) {
    playerScore++;
    return alert("Laimėjo žaidėjas");
  } else if (playerChoose > pcChoose && playerChoose === 3 && pcChoose === 1) {
    pcScore++;
    return alert("Kompiuteris laimėjo");
  } else if (playerChoose > pcChoose && playerChoose === 3 && pcChoose === 2) {
    playerScore++;
    return alert("Laimėjo žaidėjas");
  }
}

function player() {
  if (playerChoose === 1) {
    const rock = document.getElementById("rock");
    rock.classList.remove("selected");
  } else if (playerChoose === 2) {
    const paper = document.getElementById("paper");
    paper.classList.remove("selected");
  } else if (playerChoose === 3) {
    const scissors = document.getElementById("scissors");
    scissors.classList.remove("selected");
  }

  playerChoose = 0;
}

function computer() {
  if (pcChoose === 1) {
    const pcRock = document.getElementById("rock-pc");
    pcRock.classList.remove("pcselected");
  } else if (pcChoose === 2) {
    const pcPaper = document.getElementById("paper-pc");
    pcPaper.classList.remove("pcselected");
  } else if (pcChoose === 3) {
    const pcScissors = document.getElementById("scissors-pc");
    pcScissors.classList.remove("pcselected");
  }

  pcChoose = 0;
}

btn.onclick = () => {
  if (playerChoose === 0) return alert("Nieko nepasirinkote");

  pcChooses();
  comparison();
  player();

  const playerScores = document.querySelectorAll("h3")[0];
  const pcScores = document.querySelectorAll("h3")[1];
  playerScores.innerText = `Player: ${playerScore}`;
  pcScores.innerText = `Computer: ${pcScore}`;
};
