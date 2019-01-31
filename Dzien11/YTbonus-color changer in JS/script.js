const colors = document.querySelectorAll('div');

function changeColor() {
	document.body.className = this.className;
}

colors.forEach(function (item) {
	item.addEventListener('click', changeColor);
});

//const btnOrange = document.querySelector('.orange');
//const btnGreen = document.querySelector('.green');
//const btnBlue = document.querySelector('.blue');
//const btnYellow = document.querySelector('.yellow');
//const btnRed = document.querySelector('.red');
//const div = document.querySelectorAll('div');
//
//function changeColor() {
//	const selectedColor = this.className;
//	document.body.className = selectedColor;
//		console.log(this);
//		console.log(this.className);
//		document.body.classList.toggle('orange');
//		document.body.className = 'orange';
//};

//btnOrange.addEventListener('click', changeColor);
//div.addEventListener('click', changeColor);
//---------------------------------------------------------
