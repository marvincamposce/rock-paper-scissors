let choice = "";

function getComputerChoice() {
  let random = Math.floor(Math.random() * (3 - 1 + 1) + 1)
  if (random === 1) {
    choice = "Rock";
  }
  else if (random === 2) {
    choice = "Paper";
  }
  else if (random === 3) {
    choice = "Scissors";
  }
  return choice;
}

const playerSelection = "Rock"
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("You have a tie!")
  }
  else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log(`You win! Rock beats scissors.`)
  }
  else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log(`You win! Paper beats rock.`)
  }
  else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    console.log(`You win! Scissors beats paper.`)
  }
  else {
    console.log(`You lose. ${computerSelection} beats ${playerSelection}`)
  }
}

