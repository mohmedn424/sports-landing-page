let sliderContainer = Array.from(
  document.querySelectorAll('.slider-container img')
);

let sliderNumber = document.getElementById('slider-number');

let currentSlide = 1;

let slideCount = sliderContainer.length;

let prevBtn = document.getElementById('prev');

let nextBtn = document.getElementById('next');

let indicatorsLi = Array.from(
  document.querySelectorAll('#indicators li')
);

for (let i = 0; i < indicatorsLi.length; i++) {
  indicatorsLi[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();
  };
}

function nextSlide() {
  if (nextBtn.classList.contains('disabled')) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

function prevSlide() {
  if (prevBtn.classList.contains('disabled')) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  removeAllActive();

  sliderContainer[currentSlide - 1].classList.add('active');

  indicatorsLi[currentSlide - 1].classList.add('active');

  currentSlide == 1
    ? prevBtn.classList.add('disabled')
    : prevBtn.classList.remove('disabled');

  currentSlide == slideCount
    ? nextBtn.classList.add('disabled')
    : nextBtn.classList.remove('disabled');
}

function removeAllActive() {
  sliderContainer.forEach((img) => {
    img.classList.remove('active');
  });

  indicatorsLi.forEach((li) => {
    li.classList.remove('active');
  });
}

function showSlides() {
  for (let i = 0; i < sliderContainer.length; i++) {
    theChecker();
  }
  currentSlide++;
  if (currentSlide > sliderContainer.length) {
    currentSlide = 1;
    theChecker;
  }
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

nextBtn.onclick = nextSlide;

prevBtn.onclick = prevSlide;

showSlides();

const menuSection = document.getElementById('menuSection');
const searchSection = document.getElementById('searchSection');
const menuBtn = document.getElementById('menubtn');
const searchBtn = document.getElementById('searchBtn');
const menuCloseBtn = document.getElementById('xBtnMenu');
const searchCloseBtn = document.getElementById('xBtnSearch');

function setClipPathMenu(coverage) {
  const menuPos = menuBtn.getBoundingClientRect();
  menuSection.style = `clip-path: circle(${coverage}% at ${
    menuPos.left + 35
  }px ${menuPos.top + 34}px)`;
}

menuBtn.addEventListener('click', () => {
  setClipPathMenu(140);
});

menuCloseBtn.addEventListener('click', () => {
  setClipPathMenu(0);
});

function setClipPathSerch(coverage) {
  const searchPos = searchBtn.getBoundingClientRect();
  searchSection.style = `clip-path: circle(${coverage}% at ${
    searchPos.left + 35
  }px ${searchPos.top + 34}px)`;
}

searchBtn.addEventListener('click', () => {
  setClipPathSerch(140);
});

searchCloseBtn.addEventListener('click', () => {
  setClipPathSerch(0);
});

setClipPathMenu(0);
setClipPathSerch(0);

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    setClipPathMenu(0);
    setClipPathSerch(0);
  }
});
