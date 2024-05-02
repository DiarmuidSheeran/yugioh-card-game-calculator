const startScreen = document.getElementById('startScreen');
const nextBtn = document.getElementById('nextBtn');
const nameScreen = document.getElementById('nameScreen');
const startBtn = document.getElementById('startBtn');
const calculator = document.getElementById('calculator');

nextBtn.addEventListener('click', function() {
    startScreen.style.display = 'none';
    nameScreen.style.display = 'block';
});

startBtn.addEventListener('click', function() {
    nameScreen.style.display = 'none';
    calculator.style.display = 'block';
})
