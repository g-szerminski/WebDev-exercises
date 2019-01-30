const buttonJS = document.querySelector('.js');

  function createDiv() {
   const divItem = document.createElement('div');
   // divItem.className = "box";
   divItem.classList.add("box");
   // divItem.setAttribute("class", "box");
   // divItem.innerText = "tekst"
   document.body.appendChild(divItem);
  }
  buttonJS.addEventListener("click", createDiv)