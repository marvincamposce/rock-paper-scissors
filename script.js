let choice = "";

function getComputerChoice() {
  let random = Math.floor(Math.random() * (3 - 1 + 1) + 1)
  if (random === 1) {
    choice = "Rock";
  }
  else if (random === 2) {
    choice = "Paper"
  }
  else if (random === 3) {
    choice === "Scissors"
  }
  return choice;
}


