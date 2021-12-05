const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selections = document.getElementById('selections');
const playAgain = document.getElementById('reset');
const userSelection = document.getElementById('userSelection')
const computerSelection = document.getElementById('computerSelection')
const winStatus = document.getElementById('winStatus')

// Modal
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close')
const openBtn = document.getElementById('open')

const choices = ['paper', 'scissors', 'rock'];

let score = 0;
let userChoice = undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        checkWinner();
    })
})

playAgain.addEventListener('click', () => {
        // Hide selections | Show main
        main.style.display = 'flex'
        selections.style.display = 'none'
})


openBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

function checkWinner(){
    const computerChoice = pickRandom();

    //Update view
    updateSelection(userSelection, userChoice)
    updateSelection(computerSelection, computerChoice)
    
    if(userChoice === computerChoice){
        // Draw
        winStatus.innerText = 'Draw'
    }
    else if(userChoice === 'paper' && computerChoice === 'rock' || 
            userChoice === 'rock' && computerChoice === 'scissors' ||
            userChoice === 'scissors' && computerChoice === 'paper'){
            // User won
            updateScore(1)
            winStatus.innerText = 'You Win'
    }
    else{
        // User lost
        winStatus.innerText = 'You Lose'
        updateScore(-1)
    }  

    // Show selections | Hide main
    main.style.display = 'none'
    selections.style.display = 'flex'
}


function pickRandom(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateScore(value){
    score += value;

    scoreEl.innerText = score;
}

function updateSelection(selectionEl, choice){
    //Class reset
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-scissors');
    selectionEl.classList.remove('btn-rock');
    
    const img =  selectionEl.querySelector('img');

    selectionEl.classList.add(`btn-${choice}`);
    img.src = `./images/icon-${choice}.svg`;
    img.alt= choice;
}
