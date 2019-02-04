//---------------------JS---------------------------
const arrow = document.querySelector(".arrow");
const nav = document.querySelector("nav");

arrow.addEventListener("click", function () {
    arrow.classList.toggle("on");
    nav.classList.toggle("on");
})

//-------------------JQ----------------------------
//$('.arrow').on('click', function () {
//	$('.fas, nav').toggleClass('on');
//})