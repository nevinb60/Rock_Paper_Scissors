let human_score = 0;
let computer_score = 0;
const ROCK = document.querySelector('.rock');
const PAPER = document.querySelector('.paper');
const SCISSORS = document.querySelector('.scissors');
let round = 1;
const MAX = 3;
let gameActivation = true;

ROCK.addEventListener('click', () => {
    playGame('rock');
})
PAPER.addEventListener('click', () => {
    playGame('paper');
})
SCISSORS.addEventListener('click', () => {
    playGame('scissors');
})


function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors']
    computer_choice = choices[Math.floor(Math.random() * choices.length)];
    return computer_choice;

}

function endGame() {
    gameActivation = false;
    if (human_score > computer_score) {
        console.log(`HUMAN WINS 🎉`)
    }
    else if (human_score < computer_score) {
        console.log(`C0MPuT3R$ WIN 👾`)
    }
    console.log('Game OVER. Refresh to continue')
}

function getWinner(player_choice, computer_choice) {
    switch (player_choice) {
        case ('rock'):
            if (computer_choice == 'paper') return computer_choice;
            if (computer_choice == 'scissors') return player_choice;
            if (computer_choice == 'rock') return null;
        case ('paper'):
            if (computer_choice == 'rock') return player_choice;
            if (computer_choice == 'scissors') return computer_choice;
            if (computer_choice == 'paper') return null;
        case ('scissors'):
            if (computer_choice == 'rock') return computer_choice;
            if (computer_choice == 'paper') return player_choice;
            if (computer_choice == 'scissors') return null;
    }
}

function playGame(player_choice) {
    if (!gameActivation) {
        console.log('Game over. Press refresh to continue');
        return;
    }

    console.log(`Round ${round}`)

    let human = player_choice;
    let computer = getComputerChoice();
    winner = getWinner(human, computer);
    if (winner == human) {
        human_score += 1;
        console.log(`👨🏾‍🦲 won this round!`)
    }
    else if (winner == computer) {
        computer_score += 1;
        console.log(`🤖 won this round!`)

    }
    else {
        console.log('DRAW!')


    }


    console.log(`Human choice: ${human}`);
    console.log(`Computer choice: ${computer}`);

    console.log(`Humans ${human_score} || C0mpUters: ${computer_score}`)

    if (round === MAX) {
        if (human_score === computer_score) {
            console.log('Round 4!');
            maxRounds = 4;
        }
        else {
            endGame();
        }
    } else if (round >= 4) {
        endGame();
    }

    round += 1;
}


