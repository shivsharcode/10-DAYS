

let themeBtn = window.document.getElementById('theme-btn-id') ;
let body = window.document.body ;

let darkMode = false ;

let themeFunc = () =>{
    let elements = document.querySelectorAll('*') ;
    if( !(darkMode) ){
        body.style.backgroundColor = '#333' ;
        elements.forEach( (element) =>{
            element.style.color = 'white'
        } )
        
        themeBtn.innerText = 'light mode' ;
        themeBtn.style.borderColor = 'grey' ;
        themeBtn.style.color = 'black' ;

        darkMode = true ;
    }

    else{
        body.style.backgroundColor = 'white' ;
        elements.forEach( (element) =>{
            element.style.color = 'black'
        })
        
        themeBtn.innerText = 'dark mode' ;
        themeBtn.style.borderColor = 'black'

        darkMode = false ;
    }
}


themeBtn.addEventListener('click', themeFunc) ;