let activeElement = 0;
const timeChange = 4000;

const colorImg = document.querySelector('.color');
const grayImg = document.querySelector('.gray');
const name = document.querySelector('.member h1');
const profession = document.querySelector('.member h2');

const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const grayImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const names = ['Anna Baugart', 'Marek Feliksiak', 'Arek Pawłowicz'];
const professions = ['Programistka JS', 'UX i UI Designer', 'Front-End Developer'];

function changeElement() {
  activeElement++;
  if (activeElement == colorImages.length) {
    activeElement = 0;
  }
  colorImg.src = colorImages[activeElement];
  grayImg.src = grayImages[activeElement];
  name.textContent = names[activeElement];
  profession.textContent = professions[activeElement];

  //  if (activeElement == 2) {
  //    activeElement = -1;
  //  }
}
setInterval(changeElement, timeChange);
