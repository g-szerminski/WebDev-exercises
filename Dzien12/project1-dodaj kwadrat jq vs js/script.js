//-----------------------JS-----------------------------
const buttonJS = document.querySelector('.js');

function createDiv() {
	const divItem = document.createElement('div');
	divItem.classList.add("box");
	// divItem.className = "box";
	// divItem.setAttribute("class", "box");
	// divItem.innerText = "tekst"
	document.body.appendChild(divItem);
}
buttonJS.addEventListener("click", createDiv)


//-----------------------JQ-----------------------------
$('.jq').on('click', function () {
	$('body').append('<div class="box">');
})
