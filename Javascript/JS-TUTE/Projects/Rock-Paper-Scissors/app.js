let userScore = 0 ;
let player2Score = 0;
let lastClickedChoice = null ;
const userScorePara = document.querySelector('#user-score') ;
const player2ScorePara = document.querySelector('#player-2-score') ;
let choices = document.querySelectorAll('.choice') ;
const imgs = document.querySelectorAll('img');
const msg = document.querySelector('#msg') ;
const ogBackgroundMsg = window.getComputedStyle(msg).backgroundColor ;  // background color of msg


// GENERATE COMPUTER CHOICE
const genCompChoice = () =>{
    const options = [ "rock", "paper", "scissors" ] ;
    return options[Math.floor(Math.random() * 3)] ;     //possible values - options[0,1,2]
};

// SHOWS THE RESULT MESSAGE
const showMsg = (messgae, backgroundColor) =>{
    msg.innerText = messgae ;
    msg.style.backgroundColor = backgroundColor ;
}



// CONTAINS THE MAIN LOGIC OF WINNING --  UPDATES SCORE  --AND SENDS THE WIN/LOST MESSAGES 
const showWinner = (userChoice, player2Choice) =>{
    if( userChoice === player2Choice ){
        showMsg("Game Was Draw 🤞 Play again", "#5C5C5C") ;
    }
    else{
        const userWin = 
            (userChoice === 'rock' && player2Choice === 'scissors') ||
            (userChoice === 'paper' && player2Choice === 'rock') ||
            (userChoice === 'scissors' && player2Choice === 'paper') ;
            
        if(userWin){
            userScore ++ ;
            userScorePara.innerText = userScore ;
            showMsg(`You won 🥂 your ${userChoice} beats ${player2Choice}`, "green");
        }
        else{
            player2Score ++ ;
            player2ScorePara.innerText = player2Score ;
            showMsg(`You Lost Sir :(  ${player2Choice} beats ${userChoice}`, "red") ;
        }
    }
};


// TAKES USER CHOICE & COMPUTER CHOICE AND CALLS TO DECIDE WINNER
const playGame = (userChoice) =>{
    const player2Choice = genCompChoice() ; // computer choice generated
    showWinner(userChoice, player2Choice) ; // calls to decide the winner ;
}



const resetStyles = () => {
    choices.forEach( (choice) =>{
        choice.style.backgroundColor = '' ;
    }) ;
    
    imgs.forEach( (img) =>{
        img.style.filter = '' ;
    } )
}



const handleClick = (choice, choiceImg, choiceColor) => {
    return () => {
        if(choice === lastClickedChoice){   // the same choice is pressed again
            resetStyles() ;
            lastClickedChoice = null ;
            msg.innerText = "Play your Move" ;
            msg.style.backgroundColor = ogBackgroundMsg ;
            return ;
        }

        resetStyles() ;
        choice.style.backgroundColor = "white" ;    //an effect
        choiceImg.style.filter = "brightness(80%)" ;
        lastClickedChoice = choice ;
        playGame(choice.id) ;
    }
}



// WHEN BUTTON IS PRESSED - eventListener
choices.forEach( (choice, index) => {
    const choiceId = choice.getAttribute('id') ;
    const choiceImg = imgs[index] ;
    const choiceColor = choiceId === "rock" ? "#8C4D5F" : choiceId === "paper" ? "#5f3c70" : "#3C5178";
    choice.addEventListener('click', handleClick(choice, choiceImg, choiceColor)) ;
}) ;