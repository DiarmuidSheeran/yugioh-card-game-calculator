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

const winCountOne = document.getElementById('winCountOne');
const winCountTwo = document.getElementById('winCountTwo');
const winCountThree = document.getElementById('winCountThree');
const winCountFour = document.getElementById('winCountFour');
const winCountTeamOne = document.getElementById('winCountTeamOne');
const winCountTeamTwo = document.getElementById('winCountTeamTwo');

let scoreOne = 0
let scoreTwo = 0
let scoreThree = 0
let scoreFour = 0
let scoreFive = 0
let scoreSix = 0

const lifePointOne = document.getElementById('lifePointsOne');
const lifePointTwo = document.getElementById('lifePointsTwo');
const lifePointThree = document.getElementById('lifePointsThree');
const lifePointFour = document.getElementById('lifePointsFour');
const lifePointFive = document.getElementById('lifePointsFive');
const lifePointSix = document.getElementById('lifePointsSix');

const changeAmountOne = document.getElementById('changeAmountOne');
const changeAmountTwo = document.getElementById('changeAmountTwo');
const changeAmountThree = document.getElementById('changeAmountThree');
const changeAmountFour = document.getElementById('changeAmountFour');
const changeAmountFive = document.getElementById('changeAmountFive');
const changeAmountSix = document.getElementById('changeAmountSix');

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
        changeAmountInput.value = "LP";
    });
});

// Add event listeners to all "-" buttons
minusButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsOne'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountOne'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) - changeAmount;
        if (lifePointInput.value <=0 ){
            if (playerThreeCalc.style.display == 'none' && playerFourCalc.style.display == 'none' && teamOneCalc.style.display == 'none' && teamTwoCalc.style.display == 'none') {
                scoreTwo ++
                winCountTwo.innerHTML = scoreTwo
                lifePointInput.value = 8000;
                alert("To the shaddow realm with you!\n\n" + playerOne.value + "'s' life points have reached 0.");
            }
            else if (playerFourCalc.style.display == 'none' && teamOneCalc.style.display == 'none' && teamTwoCalc.style.display == 'none'){
                if (lifePointTwo.value != 0 && lifePointThree.value !=0){
                    changeAmountOne.disabled = true;
                    alert("To the shaddow realm with you!\n\n" + playerOne.value + "'s' life points have reached 0.\n\n" + playerOne.value + " has been elimanted from the duel!\n\nIt's down to " + playerTwo.value + " and " + playerThree.value + "!\n\n It's time to DUEL!");
                }
                if (lifePointOne.value > 0){
                    changeAmountOne.disabled = false;
                }
                if (lifePointTwo.value != 0 && lifePointThree.value <= 0 && lifePointOne.value <= 0){
                    scoreTwo ++
                    winCountTwo.innerHTML = scoreTwo
                    lifePointInput.value = 8000;
                    lifePointTwo.value = 8000;
                    lifePointThree.value = 8000;
                    changeAmountOne.disabled = false;
                    changeAmountTwo.disabled = false;
                    changeAmountThree.disabled = false;
                    alert("And the winner is " + playerTwo.value + "!\n\nNo shaddow realm for you Mr. " + playerTwo.value + "!");
                }
                if (lifePointTwo.value <= 0 && lifePointThree.value != 0 && lifePointOne.value <= 0){
                    scoreThree ++
                    winCountThree.innerHTML = scoreThree
                    lifePointInput.value = 8000;
                    lifePointTwo.value = 8000;
                    lifePointThree.value = 8000;
                    changeAmountOne.disabled = false;
                    changeAmountTwo.disabled = false;
                    changeAmountThree.disabled = false;
                    alert("And the winner is " + playerThree.value + "!\n\nNo shaddow realm for you Mr. " + playerThree.value + "!");
                }
            }
            
        }
        changeAmountInput.value = "LP";
    });
});

// Add event listeners to all "+" buttons
plusButtonsTwo.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsTwo'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountTwo'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) + changeAmount;
        changeAmountInput.value = "LP";
    });
});

// Add event listeners to all "-" buttons
minusButtonsTwo.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsTwo'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountTwo'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) - changeAmount;
        if (lifePointInput.value <=0 ){
            if (playerThreeCalc.style.display == 'none' && playerFourCalc.style.display == 'none' && teamOneCalc.style.display == 'none' && teamTwoCalc.style.display == 'none') {
                scoreOne ++
                winCountOne.innerHTML = scoreOne
                lifePointInput.value = 8000;
                alert("To the shaddow realm with you!\n\n" + playerTwo.value + "'s' life points have reached 0.");
            }
            else if (playerFourCalc.style.display == 'none' && teamOneCalc.style.display == 'none' && teamTwoCalc.style.display == 'none'){
                if (lifePointOne.value != 0 && lifePointThree.value !=0){
                    changeAmountTwo.disabled = true;
                    alert("To the shaddow realm with you!\n\n" + playerTwo.value + "'s' life points have reached 0.\n\n" + playerTwo.value + " has been elimanted from the duel!\n\nIt's down to " + playerOne.value + " and " + playerThree.value + "!\n\nIt's time to DUEL!");
                }
                if (lifePointTwo.value > 0){
                    changeAmountTwo.disabled = false;
                }
                if (lifePointOne.value != 0 && lifePointThree.value <= 0 && lifePointTwo.value <= 0){
                    scoreOne ++
                    winCountOne.innerHTML = scoreOne
                    lifePointInput.value = 8000;
                    lifePointOne.value = 8000;
                    lifePointThree.value = 8000;
                    changeAmountTwo.disabled = false;
                    changeAmountOne.disabled = false;
                    changeAmountThree.disabled = false;
                    alert("And the winner is " + playerOne.value + "!\n\nNo shaddow realm for you Mr. " + playerOne.value + "!");
                }
                if (lifePointOne.value <= 0 && lifePointThree.value != 0 && lifePointTwo.value <= 0){
                    scoreThree ++
                    winCountThree.innerHTML = scoreThree
                    lifePointInput.value = 8000;
                    lifePointOne.value = 8000;
                    lifePointThree.value = 8000;
                    changeAmountTwo.disabled = false;
                    changeAmountOne.disabled = false;
                    changeAmountThree.disabled = false;
                    alert("And the winner is " + playerThree.value + "!\n\nNo shaddow realm for you Mr. " + playerThree.value + "!");
                }
            }
        }
        changeAmountInput.value = "LP";
    });
});

// Add event listeners to all "+" buttons
plusButtonsThree.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsThree'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountThree'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) + changeAmount;
        changeAmountInput.value = "LP";
    });
});

// Add event listeners to all "-" buttons
minusButtonsThree.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsThree'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountThree'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) - changeAmount;
        if (lifePointInput.value <=0 ){
            alert("To the shaddow realm with you!\n\n" + playerThree.value + "'s' life points have reached 0.");

            if (playerFourCalc.style.display == 'none' && teamOneCalc.style.display == 'none' && teamTwoCalc.style.display == 'none'){
                if (lifePointTwo.value != 0 && lifePointOne.value !=0){
                    changeAmountThree.disabled = true;
                    alert("To the shaddow realm with you!\n\n" + playerThree.value + "'s' life points have reached 0.\n\n" + playerThree.value + " has been elimanted from the duel!\n\nIt's down to " + playerTwo.value + " and " + playerOne.value + "!\n\n It's time to DUEL!");
                }
                if (lifePointThree.value > 0){
                    changeAmountThree.disabled = false;
                }
                if (lifePointTwo.value != 0 && lifePointOne.value <= 0 && lifePointThree.value <= 0){
                    scoreTwo ++
                    winCountTwo.innerHTML = scoreTwo
                    lifePointInput.value = 8000;
                    lifePointOne.value = 8000;
                    lifePointTwo.value = 8000;
                    changeAmountThree.disabled = false;
                    changeAmountOne.disabled = false;
                    changeAmountTwo.disabled = false;
                    alert("And the winner is " + playerTwo.value + "!\n\nNo shaddow realm for you Mr. " + playerTwo.value + "!");
                }
                if (lifePointTwo.value <= 0 && lifePointOne.value != 0 && lifePointThree.value <= 0) {
                    scoreOne ++
                    winCountOne.innerHTML = scoreThree
                    lifePointInput.value = 8000;
                    lifePointTwo.value = 8000;
                    lifePointOne.value = 8000;
                    changeAmountThree.disabled = false;
                    changeAmountOne.disabled = false;
                    changeAmountTwo.disabled = false;
                    alert("And the winner is " + playerOne.value + "!\n\nNo shaddow realm for you Mr. " + playerOne.value + "!");
                }
            }
        }
        changeAmountInput.value = "LP";
    });
});

// Add event listeners to all "+" buttons
plusButtonsFour.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsFour'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountFour'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) + changeAmount;
        changeAmountInput.value = "LP";
    });
});

// Add event listeners to all "-" buttons
minusButtonsFour.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsFour'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountFour'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) - changeAmount;
        if (lifePointInput.value <=0 ){
            lifePointInput.value = 8000;
            alert("To the shaddow realm with you!\n\n" + teamOne.value + "'s' life points have reached 0.");
        }
        changeAmountInput.value = "LP";
    });
});

// Add event listeners to all "+" buttons
plusButtonsFive.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsFive'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountFive'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) + changeAmount;
        changeAmountInput.value = "LP";
    });
});

// Add event listeners to all "-" buttons
minusButtonsFive.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsFive'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountFive'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) - changeAmount;
        if (lifePointInput.value <=0 ){
            lifePointInput.value = 16000;
            alert("To the shaddow realm with you!\n\n" + teamTwo.value + "'s' life points have reached 0.");
        }
        changeAmountInput.value = "LP";
    });
});

// Add event listeners to all "+" buttons
plusButtonsSix.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsSix'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountSix'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) + changeAmount;
        changeAmountInput.value = "LP";
    });
});

// Add event listeners to all "-" buttons
minusButtonsSix.forEach((button, index) => {
    button.addEventListener('click', function() {
        const lifePointInput = document.getElementById('lifePointsSix'); // Corrected ID
        const changeAmountInput = document.getElementById('changeAmountSix'); // Corrected ID
        const changeAmount = parseInt(changeAmountInput.value) || 0; // Get the change amount or default to 0 if not provided
        lifePointInput.value = parseInt(lifePointInput.value) - changeAmount;
        if (lifePointInput.value <=0 ){
            lifePointInput.value = 16000;
        }
        changeAmountInput.value = "LP";
    });
});

