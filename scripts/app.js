const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    };
    // Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach((hand) => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            })
        })
        // Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((options) => {
            options.addEventListener('click', function () {
                // Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber];

                setTimeout(() => {
                    // Here we call compare hands function
                    compareHands(this.textContent, computerChoise);
                    // Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoise}.png`;
                }, 2000);

                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            })
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        // Update text
        const winner = document.querySelector('.winner');
        // Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        // Checking for Rock
        if (playerChoice === 'rock'){
            if (computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
            }
        }
        // Checking for Paper
        if (playerChoice === 'paper'){
            if (computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
            }
        }
        // Checking for Scissors
        if (playerChoice === 'scissors'){
            if (computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
            }
        }
    };

    // Call all the inner function
    startGame();
    playMatch();
};

// Start the game function
game();
