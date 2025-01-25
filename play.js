//Game mechanics
let human_score = 0;
let computer_score = 0;
const ROCK = document.querySelector('.rock');
const PAPER = document.querySelector('.paper');
const SCISSORS = document.querySelector('.scissors');
let round = 1;
const MAX = 3;
const playerDisplay = document.getElementById('playerChoice');
const computerDisplay = document.getElementById(`computerChoice`);
const winnerDisplay = document.getElementById('winner');
const scoreDisplay = document.getElementById('score');
//Tie logic will have to change if Max constant is changed

let gameActivation = true;

//Select player choice
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
        winnerDisplay.textContent = `GAME OVER. HUMANITY WINS 🎉`

        console.log(`HUMAN WINS 🎉`)
    }
    else if (human_score < computer_score) {
        winnerDisplay.textContent = `GAME OVER. COMPUTERS WIN 👾`
        console.log(`C0MPuT3R$ WIN 👾`)
    }
    else {
        winnerDisplay.textContent = 'NO SUCH THING AS A TIE! Refresh and play again!'
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
        winnerDisplay.textContent = 'Game over. Press refresh to continue'
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
        winnerDisplay.textContent = '+1 PLAYER! 🎉'
    }
    else if (winner == computer) {
        computer_score += 1;
        console.log(`🤖 won this round!`)
        winnerDisplay.textContent = '+1 COMPUTER 🤖'

    }
    else {
        console.log('DRAW!')
        winnerDisplay.textContent = "It's a TIE!"


    }

    playerDisplay.textContent = `PLAYER: ${human}`;
    computerDisplay.textContent = `COMPUTER: ${computer}`;
    scoreDisplay.textContent = `PLAYER: ${human_score} || COMPUTER: ${computer_score}`

    console.log(`Human choice: ${human}`);
    console.log(`Computer choice: ${computer}`);

    console.log(`Humans ${human_score} || C0mpUters: ${computer_score}`)

    if (round === MAX) {
        //Tie logic
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


//edits to html based on winner



