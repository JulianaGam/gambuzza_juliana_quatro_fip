// --------------------------------VARIABLES--------------------------------

// ----1. variables burger menu----
// ----2. variables age filter----
// ----3. variables Carousel----
// ----4. variables lightbox----


// ----1. variables burger menu----

let burgerButton = document.querySelector("#burger-button"); 
let burgerCon = document.querySelector("#burger-con");



// ----2. variables age filter-------

// Create variables for the age filter

//This is the day box
const dayInput = document.querySelector('#day-box');

//This is the month box
const monthInput = document.querySelector('#month-box'); 

//This is the year box
const yearInput = document.querySelector('#year-box'); 

//This is the button that confirms the age
const confirmButton = document.querySelector('#confirm-age');

//This is the container of the filter
const ageFilter = document.querySelector('#age-filter'); 


// ----3. variables Carousel---------

// the space where the carousel is going to move
//this is what is moving with the translateX()
const track = document.querySelector('.carousel-move');

// the container of the slides (cans)
const slides = document.querySelectorAll('.carousel-slide');

// the left and right arrows
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');

// variables for the carousel
let currentIndex = 0; // current slide index (cherry=0)
let slidesPerView = getSlidesPerView(); // Slides that are shown depending on the screen size



// -------------------------------- FUNCTIONS --------------------------------

// ----1. Functions burger menu----
// ----2. Functions age filter----
// ----3. Functions Carousel----
// ----4. Functions lightbox----


// ----1. Functions burger menu----

function hamburgerMenu() {
    burgerCon.classList.toggle("slide-toggle");
    burgerButton.classList.toggle("expanded"); 
  }

// ----2. Functions age filter----

// This verify when it loads the page if the user has already fill the age filter
// If the user has already verified their age, it hides the age filter
if (localStorage.ageVerified === 'true') {
    ageFilter.style.display = 'none';
  }
  
  // Function to verify the age of the person 
  function checkAge() { // create function
    // Obtain numbers of the filter #day-box $month-box #year-box
    const day = dayInput?.value;
    const month = monthInput?.value;
    const year = yearInput?.value;
  
    // Verify if all the boxes has the info
    if (!day || !month || !year) return;
  
    // Create the date that the person put in the boxes, example "2001-04-27"
    const enteredDate = new Date(`${year}-${month}-${day}`);
  
    // We need the current date to do the math example "2025/04/08 = 23 years and 11 months and 19 days"
    const today = new Date();
  
    // Here it makes the math of the year
    let age = today.getFullYear() - enteredDate.getFullYear();
    // Here it makes the math of the month
    const monthDiff = today.getMonth() - enteredDate.getMonth();
    // Here it makes the math of the days
    const dayDiff = today.getDate() - enteredDate.getDate();
  
    // It has to be an adjustment of the month, if the month of the current day is before the month of the entered date, we have to subtract one year
    // If the month is the same but the day is before, we also have to subtract one year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    } 
    //monthDiff and dayDiff are used to check if the current month and day are before the entered month and day
    // It makes sense to do the math based also in the month and day and not just the year
    // ===0 it makes the math this way: if now is april (04) but your birthday is on may (05) then = 5-5=-1 is not the birthday month yet
    // <0 it makes the math with the same logic as ====0, so if now is april 8 but your birthday is on the 27 then = 8-27=-19 is not the birthday day yet
  
  
    // Verify if the age is 21+ or if is 21-
    if (age >= 21) {
      if (ageFilter) ageFilter.style.display = 'none'; // Hide the filter if is 21+
    } else {
      alert('Sorry, you must be of legal drinking age to enter.'); // show the alert if is 21-
    }
  }

// ----3. Functions Carousel----

// This function is using the variable that i set to make it responsive 
//So if the screen is 1200px or more, it will show 3 slides, if not, it will show 1 slide
function getSlidesPerView() {
    if (window.innerWidth >= 1200) {
      return 3; // Desktop 
    } else {
      return 1; // Mobile
    }
  }
  
  // Function to update the carousel position
  // this moves the carousel depending on the current index and its width of each slide
  function updateCarousel() {
    const slideWidth = flavourSlides[0].offsetWidth;
    // So it takes the withd of one slide "offsetWidth" and multiplies it by the current index
    const offset = currentIndex * slideWidth;
    // then scroll the carousel with the answer of the width using translateX
    track.style.transform = `translateX(-${offset}px)`;
  }
  
  // Function to go to the next slide
  function goToNextSlide() {
    // If the current index is at the end of the slides, we return to the start
    if (currentIndex + slidesPerView >= slides.length) {
      currentIndex = 0; // return to the start
    } else {
      currentIndex++; // if is not at the end prepare to updateCarousel();
    }
    updateCarousel();// go to the next slide
  }
  
  // Function to move back to the previous slide
  function goToPrevSlide() {
    if (currentIndex <= 0) {
      currentIndex = slides.length - slidesPerView; // Ir al final
    } else {
      currentIndex--;
    }
    updateCarousel();
  }
  


  // -------------------------------- EVENT LISTENERS --------------------------------

// ----1. EventListener burger menu----
// ----2. EventListener  filter----
// ----3. EventListener  Carousel----
// ----4. EventListener lightbox----


// ----1. EventListener burger menu----
if (burgerButton && burgerCon) {
    burgerButton.addEventListener("click", hamburgerMenu, false);
  }
  

// ----2. EventListener  filter----

// Listener para el botón de confirmación de edad
if (confirmButton) {
    confirmButton.addEventListener('click', checkAge);
  }

// ----3. EventListener  Carousel----

// Verify that the elements exist before adding event listeners

if (track && flavourSlides.length && leftArrow && rightArrow) {
// track is the space where the carousel is going to move
// flavourSlides is the container of the slides (cans)
// leftArrow and rightArrow are the arrows that move the carousel

    // right Arrow move to the right
    rightArrow.addEventListener('click', function(e) {
      // prevent any default action, like reloading the page
      e.preventDefault();
      // go to the next slide when clicked
      goToNextSlide();
    });
  
    // left arrow move to the left
    leftArrow.addEventListener('click', function(e) {
      // prevent any default action, like reloading the page
      e.preventDefault();
      // go to the previous slide when clicked
      goToPrevSlide();
    });
  
    // when the window is resized, it need to recalculate the slides per view and update the carousel 
  
    window.addEventListener('resize', function() {
      // Depending on the size of the screen calculate the slides per view 
  
      slidesPerView = getSlidesPerView();
      updateCarousel();
    });
  
  // When the page loads, it needs to calculate the slides per view and update the carousel
    updateCarousel();
  }
