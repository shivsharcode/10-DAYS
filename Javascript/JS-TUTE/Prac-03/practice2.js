// Create a game where you start with any random game number . Ask the user to keep guessing the number until the user enters correct value.

let gameNumber = 11 ;
let inputNum ;

while(true){
     inputNum = Number(prompt("Guess the Game number : ")) ;
    if(inputNum === gameNumber){
        break ;
    }
}

console.log("You Win !") ;