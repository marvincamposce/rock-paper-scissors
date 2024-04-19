let choice = "";

function getComputerChoice() {
  let random = Math.floor(Math.random() * (3 - 1 + 1) + 1)
  if (random === 1) {
    choice = "rock";
  }
  else if (random === 2) {
    choice = "paper";
  }
  else if (random === 3) {
    choice = "scissors";
  }
  return choice;
}

const playerSelection = prompt(`Welcome to the game, choose between Rock, Paper or Scissors`).toLowerCase();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`You have a tie! Both choose ${computerSelection}`)
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beats scissors.")
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beats rock.")
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beats paper.")
  }
  else {
    console.log(`You lose. Computer choose ${computerSelection}`)
  }
}

console.log(playRound(playerSelection, computerSelection))
