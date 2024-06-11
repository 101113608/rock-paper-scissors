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

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                computerScore++;
                return `
                You picked: ${humanChoice}.
                Computer picked: ${computerChoice}.

                You lose. Rock loses to paper.`;
            }
            else if (computerChoice === "scissors") {
                humanScore++;
                return `
                You picked: ${humanChoice}.
                Computer picked: ${computerChoice}.

                You win! Rock beats scissors.`;
            }
            else {
                return `
                You picked: ${humanChoice}.
                Computer picked: ${computerChoice}.

                Tied! Both picked rock.`;
            }
        case "paper":
            if (computerChoice === "scissors") {
                computerScore++;
                return `
                You picked: ${humanChoice}.
                Computer picked: ${computerChoice}.

                You lose. Paper loses to scissors.`;
            }
            else if (computerChoice === "rock") {
                humanScore++;
                return `
                You picked: ${humanChoice}.
                Computer picked: ${computerChoice}.

                You win! Paper beats rock.`;
            }
            else {
                return `
                You picked: ${humanChoice}.
                Computer picked: ${computerChoice}.

                Tied! Both picked paper.`;
            }
        case "scissors":
            if (computerChoice === "rock") {
                computerScore++;
                return `
                You picked: ${humanChoice}.
                Computer picked: ${computerChoice}.

                You lose. Scissors loses to rock.`;
            }
            else if (computerChoice === "paper") {
                humanScore++;
                return `
                You picked: ${humanChoice}.
                Computer picked: ${computerChoice}.

                You win! Scissors beats paper.`;
            }
            else {
                return `
                You picked: ${humanChoice}.
                Computer picked: ${computerChoice}.

                Tied! Both picked scissors.`;
            }
    }
}