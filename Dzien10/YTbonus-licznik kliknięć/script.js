let countedCliks = 0;
const plusButton = document.querySelector('button:nth-of-type(1)');
const minusButton = document.querySelector('button:nth-of-type(2)');
const spanCounter = document.querySelector('span');

plusButton.addEventListener('click', function(){
    countedCliks++;
    spanCounter.textContent = countedCliks;
});
minusButton.addEventListener('click', function(){
    countedCliks--;
    spanCounter.textContent = countedCliks;
});