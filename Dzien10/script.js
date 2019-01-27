// console.log('dziala');
// let myAge = 38;
// const myName = 'Greg';
// myAge = 40;
// // const myName = 'Jerzy';
// var female = false;
// console.log(typeof female)
// -------------------------------------------------------------------------------------------
const button = document.querySelector('button');
const par = document.querySelector('p');
//-----------------------------------------------------------------------------------------
// button.addEventListener('click', function() {
//     console.log('klik');
//     par.style.backgroundColor = 'red';
//     alert('taki alert');
// });
// -----------------------------------------------------------------------------------------
// button.addEventListener('mouseover', function() {
//     console.log('najechane');
// });
// btn.addEventListener('mousemove', function() {
//     console.log('ruch myszki po buttonie');
// })
// ---------------------------------------------------------------------------------------
// var result = prompt("Podaj swoje imię:", "domyślny komunikat podaj tutaj");
// if(result == null || result == ""){
//   document.write("Czemu nie chcesz podać swojego imienia?");
// }
// else{
//   document.write("Cześć " + result + ". Miło Cię powitać na naszej stronie!");
// }
// ---------------------------------------------------------------------------------------
// var result = confirm('Chcesz sobie wcisnąć');
// if (result == true) {
//     document.write('No to sobie wcisnąłeś');
// } else{
//     document.write('Jak nie, to nie');
// }
//----------------------------------------------------------------------------------------
// let clicksNumber = 0;
// button.addEventListener('click', function() {
//     // clicksNumber = clicksNumber + 1;
//     // clicksNumber += 2;
//     clicksNumber++;
//     if (clicksNumber === 1) {
//         console.log('Kliknąłeś przycisk ', clicksNumber,' raz.');
//     } else if(clicksNumber < 10) {
//         console.log('Kliknąłeś przycisk ', clicksNumber,' razy.');
//     }else {
//         console.log('Kliknąłeś przycisk ', clicksNumber,' razy, po co tyle klikasz ?');
//     }
// })
//------------------------------------------------------------------------------------------
// window.addEventListener('scroll', function(){
//     console.log('skrolujesz o' + window.scrollY + 'px');
// })
//------------------------------------------------------------------------------------------
const spanResult = document.querySelector('span');

document.addEventListener('scroll', function(){
    spanResult.textContent = window.scrollY;
})