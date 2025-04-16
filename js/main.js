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


// ----4. variables lightbox----

// Array con la información de cada sabor
const flavourInfo = [
    { name: "Cherry Bomb", 
      description: "Boom! Meet your new favorite party starter. Cherry Bomb brings a blast of juicy cherries, zesty lime soda, and a splash of rum that’ll light up your taste buds. Sweet, fizzy, and seriously fun — just pop the top and let the good times roll.", 
      ingredients: "cherry juice, lime soda, grenadine, rum.", 
      image: "images/quatro-cans/flip-cans/cherry-flip.png" 
    },
    { name: "Peach Bellini", 
      description: "Sunshine in a can. Our Peach Bellini mixes silky peach goodness with bubbly Prosecco and a touch of berry magic. Light, fruity, and ready to sparkle — it's basically brunch’s best friend (and yours too).", 
      ingredients: "white peach purée, Prosecco, berry essence.", 
      image: "images/quatro-cans/flip-cans/peach-flip.png" 
    },
    { name: "Kiwi Martini", 
      description: "Tropical vibes? Say less. The Kiwi Martini is a fresh punch of kiwi flavor, smooth vodka, and just the right amount of sweetness. Chill it, sip it, and let every sip teleport you to a beach party.", 
      ingredients: "kiwi, vodka, simple syrup.", 
      image: "images/quatro-cans/flip-cans/kiwi-flip.png" 
    },
    { name: "Piña Colada", 
      description: "If you like Piña Coladas (and getting caught in the rain), you’re going to love this. Creamy coconut, juicy pineapple, and a shot of rum — it’s pure vacation in a can. Flip-flops optional.", 
      ingredients: "coconut milk, pineapple juice, rum.", 
      image: "images/quatro-cans/flip-cans/pina-flip.png" 
    },
    { name: "Grape Cosmo", 
      description: "Sweet, bold, and a little sassy. The Grape Cosmo brings together juicy grapes, tangy cranberry, a twist of lime, and vodka for a fruity cocktail that knows how to party. Who says classic can’t be fun?", 
      ingredients: "grape juice, cranberry juice, lime, vodka.", 
      image: "images/quatro-cans/flip-cans/grape-flip.png"
     }
    ];
  
  // Selects the elements that are inside the .carousel-slide (the cans)
  // when i create the function this is going to let the cans be clicked and open the lightbox
  const flavourSlides = document.querySelectorAll('.carousel-slide');
  // This is the container of the lightbox, so i can show it or hide it 
  const lightbox = document.querySelector('#flavour-lightbox');
  // this is the close button of the lightbox
  const closeLightbox = document.querySelector('#close-lightbox');
  // this selects the space where H2 is going to be shown that is the flavour of the can
  const titleElement = document.querySelector('#lightbox-title');
  // this selects the p that is going to show the description of the flavour
  const descElement = document.querySelector('#lightbox-description');
  // this is the p where the ingredients are going to be shown
  const ingredientsElement = document.querySelector('#lightbox-ingredients');
  // this is the image that is going to be shown in the lightbox
  const imageElement = document.querySelector('#lightbox-image');

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
  

  // ----4. Functions lightbox----

  // Fuction to fill the lightbox with the information of the flavour
// this is the function that is going to be called when the can is clicked
function fillLightbox() {

    // This is goign to get the data-flavour of each can "0" "1" "2" "3" "4" 
    const index = this.dataset.flavour;
  
    // This is going to get the flavour of the array flavourInfo
    const flavour = flavourInfo[index];
  
    // This is going to fill the H2 informtion 
    titleElement.textContent = flavour.name;
  
    //this is going to fill the description <p> of each flavor 
    descElement.textContent = flavour.description;
  
    // this is going to fill the ingredients <p> of each flavor
    ingredientsElement.textContent = `Ingredients: ${flavour.ingredients}`;
  
    // this is going to fill the image of each flavor
    imageElement.src = flavour.image;
  
    // this is going to set the alt of the image
    imageElement.alt = `${flavour.name} image`;
  
    //this is going to be the lightbox visible 
    lightbox.classList.add('show');
  }
  
  // Function that closes the lightbox
  function closeLightboxFunction() {
  
    // to close the lightbox, it removes the show class to hide it
    lightbox.classList.remove('show');
  }
  
  // Function that closes the lightbox when clicking outside of it
  function outsideClick(e) {
  
    //if someone click on the e.target (out the lightbox) it closes the lightbox
    if (e.target === lightbox) {
  
      //call the function to clse the lightbox
      closeLightboxFunction();
    }
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

// ----4. EventListener lightbox----


if (slides.length && lightbox && closeLightbox) {
    slides.forEach(slide => {
      slide.addEventListener('click', fillLightbox);
    });
  
    closeLightbox.addEventListener('click', closeLightboxFunction);
    lightbox.addEventListener('click', outsideClick);
  }