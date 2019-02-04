//const burger = document.querySelector('.burger');
//const active = document.querySelectorAll('.active');

//burger.addEventListener('click', function () {
//	active.forEach(function (item) {
//		item.classList.toggle('show');
//	})
//})

//burger.addEventListener('click', function () {
//	for (i = 0; i < active.length; i++) {
//		active[i].classList.toggle('show');
//	}
//})

$('.burger').on('click', function () {
	$('.active').toggleClass('show');
})
