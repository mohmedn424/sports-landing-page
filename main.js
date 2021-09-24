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
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

nextBtn.onclick = nextSlide;

prevBtn.onclick = prevSlide;

showSlides();
