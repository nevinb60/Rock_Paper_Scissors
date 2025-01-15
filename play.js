function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors']
    computer_choice = choices[Math.floor(Math.random() * choices.length)];
    return computer_choice

}

function getHumanChoice() {
    player_choice = prompt("Rock, Paper or Scissors:\n").toLocaleLowerCase();
    if (player_choice != 'rock' && player_choice != 'paper' && player_choice != 'scissors') {
        console.log('invalid input');
        getHumanChoice();
    }
    return player_choice


}

function getWinner(player_choice, computer_choice) {
    switch (player_choice) {
        case ('rock'):
            if (computer_choice == 'paper') return 'Computer wins!';
            if (computer_choice == 'scissors') return 'You win!';
            if (computer_choice == 'rock') return "It's a draw!"
        case ('paper'):
            if (computer_choice == 'rock') return 'You win!';
            if (computer_choice == 'scissors') return 'Computer wins!'
            if (computer_choice == 'paper') return "It's a draw!"
        case ('scissors'):
            if (computer_choice == 'rock') return 'Computer wins!'
            if (computer_choice == 'paper') return 'You win!'
            if (computer_choice == 'scissors') return "It's a draw!"
    }
}

function playGame() {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    winner = getWinner(human, computer);
    console.log(`Human choice: ${human}`);
    console.log(`Computer choice: ${computer}`);

}

playGame();

