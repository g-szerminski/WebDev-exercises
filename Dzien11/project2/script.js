const firstDiv = document.querySelector('.s1');
const secondDiv = document.querySelector('.s2');

// function changeColor() {
// 	firstDiv.classList.toggle('red');
// 	secondDiv.classList.toggle('red');
// }
function changeColor() {
	this.classList.toggle('red');
}

firstDiv.addEventListener('click', changeColor);
secondDiv.addEventListener('click', changeColor);