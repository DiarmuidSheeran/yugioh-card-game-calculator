const startScreen = document.getElementById('startScreen');
const nextBtn = document.getElementById('nextBtn');
const nameScreen = document.getElementById('nameScreen');
const startBtn = document.getElementById('startBtn');
const calculator = document.getElementById('calculator');
const numberOfPlayers = document.getElementById('numberOfPlayers');
const playerOne = document.getElementById('playerOne');
const playerTwo = document.getElementById('playerTwo');
const playerThree = document.getElementById('playerThree');
const playerFour = document.getElementById('playerFour');
const teamOne = document.getElementById('teamOne');
const teamTwo = document.getElementById('teamTwo');
const playerOneCalc = document.getElementById('playerOneCalc');
const playerTwoCalc = document.getElementById('playerTwoCalc');
const playerThreeCalc = document.getElementById('playerThreeCalc');
const playerFourCalc = document.getElementById('playerFourCalc');
const teamOneCalc = document.getElementById('teamOneCalc');
const teamTwoCalc = document.getElementById('teamTwoCalc');
const playerNameOne = document.getElementById('playerNameOne');
const playerNameTwo = document.getElementById('playerNameTwo');
const playerNameThree = document.getElementById('playerNameThree');
const playerNameFour = document.getElementById('playerNameFour');
const teamNameOne = document.getElementById('teamNameOne');
const teamNameTwo = document.getElementById('teamNameTwo');



const plusButtons = document.querySelectorAll('.btn-plus-one');
const minusButtons = document.querySelectorAll('.btn-minus-one');

const plusButtonsTwo = document.querySelectorAll('.btn-plus-two');
const minusButtonsTwo = document.querySelectorAll('.btn-minus-two');

const plusButtonsThree = document.querySelectorAll('.btn-plus-three');
const minusButtonsThree = document.querySelectorAll('.btn-minus-three');

const plusButtonsFour = document.querySelectorAll('.btn-plus-four');
const minusButtonsFour = document.querySelectorAll('.btn-minus-four');

const plusButtonsFive = document.querySelectorAll('.btn-plus-five');
const minusButtonsFive = document.querySelectorAll('.btn-minus-five');

const plusButtonsSix = document.querySelectorAll('.btn-plus-six');
const minusButtonsSix = document.querySelectorAll('.btn-minus-six');

nextBtn.addEventListener('click', function() {
    startScreen.style.display = 'none';
    nameScreen.style.display = 'block';
    switch (numberOfPlayers.value) {
        case '1':
            playerThree.style.display = 'none';
            playerFour.style.display = 'none';
            teamOne.style.display = 'none';
            teamTwo.style.display = 'none';
            break;
        case '2':
            playerFour.style.display = 'none';
            teamOne.style.display = 'none';
            teamTwo.style.display = 'none';
            break;
        case '3':
            teamOne.style.display = 'none';
            teamTwo.style.display = 'none';
            break;
        case '4':
            playerOne.style.display = 'none';
            playerTwo.style.display = 'none';
            playerThree.style.display = 'none';
            playerFour.style.display = 'none';
            break;
    }
});

playerOne.addEventListener('focus', function() {
    if (playerOne.value === 'Player One') {
        playerOne.value = ''; // Clear the default value
    }
});
playerTwo.addEventListener('focus', function() {
    if (playerTwo.value === 'Player Two') {
        playerTwo.value = ''; // Clear the default value
    }
});
playerThree.addEventListener('focus', function() {
    if (playerThree.value === 'Player Three') {
        playerThree.value = ''; // Clear the default value
    }
});
playerFour.addEventListener('focus', function() {
    if (playerFour.value === 'Player Four') {
        playerFour.value = ''; // Clear the default value
    }
});
teamOne.addEventListener('focus', function() {
    if (teamOne.value === 'Team One') {
        teamOne.value = ''; // Clear the default value
    }
});
teamTwo.addEventListener('focus', function() {
    if (teamTwo.value === 'Team Two') {
        teamTwo.value = ''; // Clear the default value
    }
});

startBtn.addEventListener('click', function() {
    nameScreen.style.display = 'none';
    calculator.style.display = 'block';
    playerNameOne.innerHTML = playerOne.value;
    playerNameTwo.innerHTML = playerTwo.value;
    playerNameThree.innerHTML = playerThree.value;
    playerNameFour.innerHTML = playerFour.value;
    teamNameOne.innerHTML = teamOne.value;
    teamNameTwo.innerHTML = teamTwo.value;
    switch (numberOfPlayers.value) {
        case '1':
            playerThreeCalc.style.display = 'none';
            playerFourCalc.style.display = 'none';
            teamOneCalc.style.display = 'none';
            teamTwoCalc.style.display = 'none';
            break;
        case '2':
            playerFourCalc.style.display = 'none';
            teamOneCalc.style.display = 'none';
            teamTwoCalc.style.display = 'none';
            break;
        case '3':
            teamOneCalc.style.display = 'none';
            teamTwoCalc.style.display = 'none';
            break;
        case '4':
            playerOneCalc.style.display = 'none';
            playerTwoCalc.style.display = 'none';
            playerThreeCalc.style.display = 'none';
            playerFourCalc.style.display = 'none';
            break;
    }
});

// Add event listeners to all "+" buttons
plusButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsOne'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountOne'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) + changeAmount;
    });
});

// Add event listeners to all "-" buttons
minusButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsOne'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountOne'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) - changeAmount;
    });
});

// Add event listeners to all "+" buttons
plusButtonsTwo.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsTwo'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountTwo'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) + changeAmount;
    });
});

// Add event listeners to all "-" buttons
minusButtonsTwo.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsTwo'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountTwo'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) - changeAmount;
    });
});

// Add event listeners to all "+" buttons
plusButtonsThree.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsThree'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountThree'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) + changeAmount;
    });
});

// Add event listeners to all "-" buttons
minusButtonsThree.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsThree'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountThree'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) - changeAmount;
    });
});

// Add event listeners to all "+" buttons
plusButtonsFour.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsFour'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountFour'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) + changeAmount;
    });
});

// Add event listeners to all "-" buttons
minusButtonsFour.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsFour'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountFour'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) - changeAmount;
    });
});

// Add event listeners to all "+" buttons
plusButtonsFive.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsFive'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountFive'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) + changeAmount;
    });
});

// Add event listeners to all "-" buttons
minusButtonsFive.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsFive'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountFive'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) - changeAmount;
    });
});

// Add event listeners to all "+" buttons
plusButtonsSix.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsSix'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountSix'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) + changeAmount;
    });
});

// Add event listeners to all "-" buttons
minusButtonsSix.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsSix'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountSix'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) - changeAmount;
    });
});