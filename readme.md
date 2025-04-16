# Final Integrated Project
This repository is about the Final Integrated Project for the second term of the  Interactive Media Design program. The assignment was to create a Rebrand and marketing campaign for Quatro, including the responsive website, using the topics covered in class.  


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
- Rob explain me the localStorage to keep the info of the birth date and the age filter wont show again, I have to try to figure it out how to make it work

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
