# Final Integrated Project
This repository is about the Final Integrated Project for the second term of the  Interactive Media Design program. The assignment was to create a Rebrand and marketing campaign for Quatro, including the responsive website, using the topics covered in class.  

- This is a responsive website, mobile first and tablet and desktop modifies with media query
- It includes css animations with Keyframes 
- JavaScript array of objects for the lightbox
- HTML, CSS, JavaScript best practices


## Installation
Not need it. Download the Zip file.

## Usage
Open the Index file in the browser of preference.

## Contribuing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## History
April 16, 2025

## Credits
Juliana Gambuzza

## License
MIT

# JavaScript Project Plan

## Burger Menu

 ### 1. Identify what I want to do:

 I want to make a burger menu for the mobile and tablet size of the Quatro website, the menu should open when you click and scroll the content and when you click again it should be saved. 

 ### 2. Strategies:

 #### Do some research:
- See example of Rob's couples resort code and understand it 
- Search for videos with more options to understand more and examples.
- Understand ***classList.toggle()***

### 3. Conclusions: 
It all starts with the ***ID: #burger-button*** where you show or hide the ***ID: #burger-con***, then create the function (is called ***hamburgerMenu***)  based on that, add ***slide-toggle*** in the menu to the ***#burger-con*** to make it work to open the menu and hide, also add expanded to the ***#burger-button*** which basically works with CSS so that when the menu is open it rotates and when it is closed it comes back and rotates. 
Finally add the event listener so that the function is working every time the hamburgerMenu function is clicked.

### 4. Sources: 

- https://www.w3schools.com/JQuery/jquery_events.asp 
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener 
- https://www.w3schools.com/JQuery/default.asp
- https://www.w3schools.com/JQuery/eff_slidetoggle.asp
- https://www.youtube.com/watch?v=kePykO07uS4 
- https://www.youtube.com/watch?v=nmQKIJ8gZBE 


## Age Filter

 ### 1. Identify what I want to do:
 As the page is about cocktails, I have to create an age filter as soon as someone opens my page, my objective is that it is the first thing that appears on the page and that when the date of birth data is filled in, the mathematics is done and it is verified that you are over 21 years old to unblock the page and if you do not have the age of 21 years an alert appears saying the reason why you cannot access the page.

### 2. Strategies:

#### Do some research:
- How to work with dates in JavaScript ***(new Date())***
- How do I get the maths to work with days and months
- How do I get it to be the first thing that comes up and closes when the age has been filtered
- Watch tutorials and pages that explain how to do it.
- Rob explain me the ***localStorage*** to keep the info of the birth date and the age filter wont show again, I have to try to figure it out how to make it work

### 3. Conclusions: 

First I have to create the variables which go by information box and confirm button, so to the ***#day-box,  #month-box,  #year-box,***  I create the variables so that when people click on the variable ***#confirm-age*** it is confirming your age. so then in the container ***#age-filter*** specifies whether or not it is older than 21.

Based on this function is created ***checkAge()*** which collects data from ***#day-box, #month-box, #year-box*** confirms ***#confirm-age*** and based on the age is unlocked filter ***(ageFilter.style.display = 'none')*** and if it is less than 21 will get an ***alert()***.

For the creation of the function ***checkAge()***, I have to create a mathematics based on the whole date and not just the year. So if someone puts the year where it turns 21 but still missing months and days the filter will not be unlocked because it does not yet have the 21, for that I create ***const enteredDate = new Date(`${year}-${month}-${day}`)***  where it takes the information that was entered in the boxes and is compared with the current date ***const today = new Date();*** then separately the mathematics of the year, month and day is done to get the exact age example:

"Birth date: 2001-04-27 
Date today:2025/04/08 
Difference: 23 years and 11 months and 19 days" 

But for this to work correctly I used ***monthDiff*** and ***dayDiff*** which basically check if the person already had a birthday on the current year or not, if not, that it is not yet the month or day of the birthday we subtract 1 from the age.

Finally, create the event listener so that the ***checkAge()*** function is done on click.

### 4. Sources: 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date 
- https://www.w3schools.com/js/js_date_methods.asp 
- https://www.w3schools.com/js/js_date_methods_set.asp
- https://www.w3schools.com/sql/func_sqlserver_datediff.asp
- https://www.onlineittuts.com/age-calculator-app-using-html-css-and-javascript.html
- https://community.qualtrics.com/custom-code-12/calculate-age-years-using-dob-and-specific-date-javascript-24256?sort=dateline.desc
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage 
- https://www.youtube.com/watch?v=gs3iRS3QTrs
- https://www.youtube.com/watch?v=In0nB0ABaUk
- https://www.youtube.com/watch?v=9uwk-JnBRbY
- https://optinmonster.com/how-to-add-age-verification-to-websites/
- https://www.youtube.com/watch?v=Ymb8sr3XBBQ
- https://www.youtube.com/watch?v=SuYHYNgFSjo 


## Carousel

 ### 1. Identify what I want to do:
 I want to create a carousel that moves can by can, that is to say I want to create a container with each one of the cans and that in the container this applied the carousel so that it moves one by one, in desktop and tablet I want that 3 cans are shown and it moves one by one and in mobile I want that one is shown and it moves also one by one. For that I need arrows on both sides of the carousel to move the carousel to the left or right.

 ### 2. Strategies:

#### Do some research:

- Using the class examples understand how to move the slides with ***translateX()***
- I have to make it responsive so I have to find a solution to make it happen.
- Watch tutorials and pages that explain how to do it.
- Search how to solve that when moving the carousel does not move with everything and buttons.

### 3. Conclusions: 

First I create my container ***.carousel-move*** which will be the space where my cans will go and where they are going to move using the logic of ***translateX()***, to this container I create the variable ***const track = document.querySelector(“.carousel-move”);*** to later create the function that will help me to move it. 

Inside my container ***.carousel-move*** I create what I want to show in the carousel, that is my cans ***.carousel-slide*** and I create a variable ***const slides = document.querySelectorAll(“.carousel-slide”);*** so that in an organized way they are going to move depending on the width of each one of the cans.

I also create variables for the arrows, one moves to the left and the other to the right. Finally to complement the movement of can by can depending on the width I create a variable ***let currentIndex = 0*** that is going to be used so that the movement is made with the correct position, so a can is not going to be halfway. And as I want that it is responsive, the variable ***let slidesPerView = getSlidesPerView();*** is created so that depending on the size of the screen, if it is mobile or desktop it is shown or one or 3 cans.

At the moment of creating the functions, I take the logic with which I planned them;  So with the variable ***getSlidesPerView()*** I use a function of if and else, in which I say that "if the screen is 1200px return (show) 3, else return (show) 1."

I create the function ***updateCarousel()*** to move the carousel using ***translateX()***, I tell the function that depending on the ***currentIndex*** (in which can it is) it multiplies it by the width of the can and with the answer it moves it ***translateX(offset.px)***.

I also create the function ***goToNextSlide()*** in which I say that “if ***currentIndex*** (current can) plus ***slidesPerView*** (how many cans are shown, if desktop or mobile), it is equal to ***slides.length*** (the total number of cans to be shown). So that when there are no more cans to show (after the last one) ***currentIndex = 0***” which returns it to the beginning as if it had already turned around and started over. but  “else if it is not in the last slide” calls the function  ***updateCarousel()*** to move to the next can.

And the last function ***goToPrevSlide()*** create it to go to the previous can, with the following logic ‘***if currentIndex <= 0***, if ***currentIndex*** is at 0 there is no way to go backwards so it takes you to the last can (from cherry to grape)’. “else if you are not on the first slide ***(currentIndex <= 0)*** then subtract 1 (--) from the ***currentIndex*** it is on” and call the ***updateCarousel()*** function to move one can backwards.

Finally, I create the event listeners, so first I verify that each of my elements (***track, flavourSlides, arrows*** ) are there. then I add the event listeners when clicked for each of the arrows and finally I add ***window.addEventListener(“resize”, function())*** so that depending on the size of the screen it calculates how many cans should be displayed ***slidesPerView*** and the carousel ***updateCarousel()*** is updated.

### 4. Sources: 

- https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_overflow
- https://codepen.io/azobenko/pen/QWzzPYx 
- https://codepen.io/sophgdn/pen/pxPmgr 
- https://programmingduck.com/articles/javascript-carousel
- https://www.w3schools.com/howto/howto_js_slideshow.asp
- https://css-tricks.com/the-javascript-behind-touch-friendly-sliders/
- https://www.youtube.com/watch?v=9HcxHDS2w1s
- https://www.youtube.com/watch?v=GnK3GCQ_X_k
- https://www.youtube.com/watch?v=lpDAFrD_Rfg&t=737s
- https://www.youtube.com/watch?v=sqkozb5UCcs

## Lightbox with arrays

 ### 1. Identify what I want to do:

 I want that when I click on the can that is in the carousel a lightbox like in the example of marvel of class, that inside the lightbox there is another image of the can, with information of the flavor and its ingredients. I need to have options to close the lightbox so I will put an X in the upper corner and that this the option of when you click outside the box of the lightbox also can be closed.

 ### 2. Strategies:
#### Do some research:

- Make the selection of the arrays based on the class example
- How do I make the lightbox responsive 
- How do I make the loghtbox close when you click outside the lightbox
- How do I make it look a bit dark when you click behind the lightbox

### 3. Conclusions: 

The first thing is to create the variable ***flavourInfo*** where the array [ ] will go; inside the array will go the objects {}, each object will be a flavour and in each flavour will go the name, the description, the ingredients and the image. Also I set the variables: ***flavourSlides*** which selects the element inside the ***.carousel-slide***. Another for the lightbox to show or hide the ***#flavour-lightbox***, and set a variable for the close button, for the flavour title, flavour description, ingredients and the image.

I create the function ***fillLightbox*** which I want to fill the information of the lightbox depending on the can that has been selected, here starts all ***const index = this.dataset.flavour*** takes the information of which object has been selected and shows depending on its ***dataset*** and according to that ***const flavour = flavourInfo[index];*** shows its name, description, ingredients and image. I also create ***lightbox.classList.add(“show”)*** to make the lightbox visible when clicked.

Next I create the function to close the lightbox by clicking on the x ***closeLightboxFunction***, to close it I just remove the class ***.show*** using: ***lightbox.classList.remove('show');***  and finally the function to close the lightbox when you click outside the lightbox ***outsideClick***, "if someone clicks outside the lightbox call the function ***closeLightboxFunction***".

### 4. Sources: 

- https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://www.youtube.com/watch?v=YVUSgLaWVsk
