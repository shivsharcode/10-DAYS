// CONDITIONAL STATEMENTS

let age = 25 ;

if(age>= 18){
    console.log("can vote") ;
}
else{
    console.log("You are not eligible")
}



let mode = "dark" ;
let bgcolor , color ;

if(mode === 'dark'){
    color = "white" ;
    bgcolor = "black" ;
}
else{
    color = "black"  ;
    bgcolor = "white" ; 
}

console.log(`color = ${color}, bgcolor = ${bgcolor}`)


// odd or even no. 
let number = prompt("Enter the Number : ") ;

if( number % 2 === 0){
    console.log("Even Number") ;
}
else{
    console.log("Odd Number") ;
}
