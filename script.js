
const choices = document.querySelectorAll('.choice');
const compChoices = ['stone', 'paper', 'scissors'];
const you = document.getElementById('you');
const comp = document.getElementById('comp');
const msgText = document.querySelector('.msg-text');
let userScore = compScore = 0;

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        if (userScore >= 10 || compScore >= 10) {
            alert('Game over, please restart');
            return;
        }

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

getCompChoice = () => {
    randomIdx = Math.floor(Math.random() * 3);
    return compChoices[randomIdx]
}

playGame = (userChoice) => {
    compChoice = getCompChoice();

    if (userChoice === compChoice) {
        msgText.innerText = 'Game draw!';
        toggleClasses('draw');
    } else if (userChoice === 'stone') {
        const isUserWin = compChoice === 'paper' ? false : true;
        updateScore(isUserWin);
    } else if (userChoice === 'paper') {
        const isUserWin = compChoice === 'scissors' ? false : true;
        updateScore(isUserWin);
    } else if (userChoice === 'scissors') {
        const isUserWin = compChoice === 'stone' ? false : true;
        updateScore(isUserWin);
    }
}

updateScore = (isUserWin) => {
    if (isUserWin) {
        userScore++;
        const you = document.getElementById('you');
        you.innerText = userScore;
    } else {
        compScore++;
        const comp = document.getElementById('comp');
        comp.innerText = compScore;
    }

    checkScoreAndDisplayMsg(isUserWin);
}

checkScoreAndDisplayMsg = (isUserWin) => {
    if (userScore === 10 || compScore === 10) {
        const text = userScore > compScore ? 'You are the winner!' : 'Computer is the winner!';
        msgText.innerText = text;
        toggleClasses('dark');
        return;
    } else if (isUserWin) {
        msgText.innerText = 'You win!';
        toggleClasses('win');
    } else {
        msgText.innerText = 'You lose!';
        toggleClasses('lose');
    }
}

toggleClasses = (className) => {
    const classList = msgText.classList;
    classList.remove('win');
    classList.remove('lose');
    classList.remove('draw');
    classList.add(className);
}