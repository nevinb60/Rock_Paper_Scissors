let human_score = 0;
let computer_score = 0;

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

function playGame() {
    let human = getHumanChoice();
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

}





function rounds(n = 3) {

    for (let i = 1; i <= n; i++) {
        console.log(`Round ${i}`);
        playGame();
        if (human_score == computer_score && i == 3) {
            console.log('Round 4!')
            playGame();
        }
    }
}

rounds();