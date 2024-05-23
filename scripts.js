let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = "";
    while (!(choice === 1 || choice === 2 || choice === 3)) {

        choice = Number(prompt(`
        Input one of the following numbers to select your move:
        1 - Rock
        2 - Paper
        3 - Scissors
        `));
    }

    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}