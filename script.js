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

startBtn.addEventListener('click', function() {
    nameScreen.style.display = 'none';
    calculator.style.display = 'block';
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
