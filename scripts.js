let humanScore = 0;
let computerScore = 0;

const bodyRps = document.querySelector("body");
const divScores = document.createElement("div");
const paraRoundOutcome = document.createElement("p");
const paraGameOutcome = document.createElement("p");

// To add new lines to text content. This is coupled with \r\n inside of a textContent.
divScores.style["white-space"] = "pre"
paraRoundOutcome.style["white-space"] = "pre";
paraGameOutcome.style["white-space"] = "pre";

bodyRps.appendChild(divScores);
bodyRps.appendChild(paraRoundOutcome);
bodyRps.appendChild(paraGameOutcome);

updateScore(humanScore, computerScore);

bodyRps.addEventListener("click", (e) => {
    let target = e.target;
    let humanChoice = "";
    if (target.tagName.toLowerCase() === `button`) {
        switch (target.id) {
            case `rock`:
                console.log(`Rock was selected!`);
                humanChoice = `rock`;
                break;
            case `paper`:
                console.log(`Paper was selected!`);
                humanChoice = `paper`;
                break;
            case `scissors`:
                console.log(`Scissors was selected!`);
                humanChoice = `scissors`;
                break;
        }
    }
})

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10) % 3 + 1;

    if (choice == 1) {
        return "rock";
    }
    else if (choice == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    let humanWon = false;
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                computerScore++;
            }
            else if (computerChoice === "scissors") {
                humanScore++;
                humanWon = true;
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                computerScore++;
            }
            else if (computerChoice === "rock") {
                humanScore++;
                humanWon = true;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                computerScore++;
            }
            else if (computerChoice === "paper") {
                humanScore++;
                humanWon = true;
            }
            break;
    }
    paraRoundOutcome.textContent = roundWinner(humanWon, humanChoice, computerChoice);
}

function roundWinner(humanWon, humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `You picked: ${humanChoice}.\r\nComputer picked: ${computerChoice}.
        \r\nTied! Both picked ${humanChoice}.`;
    } else if (humanWon) {
        return `You picked: ${humanChoice}.\r\nComputer picked: ${computerChoice}.
        \r\nYou win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        return `You picked: ${humanChoice}.\r\nComputer picked: ${computerChoice}.
        \r\nYou lose. ${humanChoice} loses to ${computerChoice}.`;
    }
}

function updateScore(humanScore, computerScore) {
    divScores.textContent = `\r\nUser Score: ${humanScore}\r\nComputer Score: ${computerScore}`;
}