/*
    Create a new button element. Give it a text "click me", background color of red & text color of white.
    Insert the button as the first element inside the body tag.

*/

let newBtn = document.createElement('button') ;

newBtn.innerText = "Click Me" ;
newBtn.style.backgroundColor = 'red' ;
newBtn.style.color = 'white' ;

document.querySelector('body').prepend(newBtn) ;


/*
    Create a <p> tag in html, give it a class & some styling.
    Now create a new class in CSS and try to append this class to the <p> element.
*/

let paragraph = document.querySelector('p') ;

paragraph.classList.add('para-class') ;