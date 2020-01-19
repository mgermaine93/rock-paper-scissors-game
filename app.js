// These values will change
let userScore = 0;
let computerScore = 0;

// These values won't change
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") {
        return "Rock";
    }
    if (letter === "p") {
        return "Paper";
    }
    if (letter === "s") {
        return "Scissors";
    }
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your ${convertToWord(userChoice)} beats computer's ${convertToWord(computerChoice)}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your ${convertToWord(userChoice)} loses to computer's ${convertToWord(computerChoice)}. You lose...`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `Your ${convertToWord(userChoice)} equals computer's ${convertToWord(computerChoice)}. It's a draw...`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
    
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        // Cases where the user wins
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        // Cases where the computer wins
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        // Cases where it's a draw
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();