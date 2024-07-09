document.addEventListener('DOMContentLoaded', ()=> {
    // list all card options
   
    const cardArray = [
        {
            name: 'fries',
            img: './resources/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: './resources/images/cheeseburger.png'
        },

        {
            name: 'ice-cream',
            img: './resources/images/ice-cream.png'
        },

        {
            name: 'pizza',
            img: './resources/images/pizza.png'
        },

        {
            name: 'milkshake',
            img: './resources/images/milkshake.png'
        },

        {
            name: 'hotdog',
            img: './resources/images/hotdog.png'
        },
        
        {
            name: 'fries',
            img: './resources/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: './resources/images/cheeseburger.png'
        },

        {
            name: 'ice-cream',
            img: './resources/images/ice-cream.png'
        },

        {
            name: 'pizza',
            img: './resources/images/pizza.png'
        },

        {
            name: 'milkshake',
            img: './resources/images/milkshake.png'
        },

        {
            name: 'hotdog',
            img: './resources/images/hotdog.png'
        },
    ]


    // randomize cards in the array each time game is loaded
    cardArray.sort( ()=> 0.5 - Math.random() ) ;

    const grid = document.querySelector('.grid') ;
    const resultDisplay = document.querySelector('#result') ;
    let cardsChosen = [] ;
    let cardsChosenID = [] ;
    let cardsWon = [] ;

    // create the game board
    function createBoard() {
        cardArray.forEach( (val, index)=>{
            const card = document.createElement('img') ;
            card.style.objectFit = 'contain' ;
            card.setAttribute('src', './resources/images/blank.png') ;
            card.setAttribute('data-id', index) ;
            card.addEventListener('click', flipCard)  ;
            grid.appendChild(card) ;
        })
    }

    

    // check for matches

    function checkForMatch() {
        const cards = document.querySelectorAll('img') ;
        const optionOneID = cardsChosenID[0] ;  //index of fisrt
        const optionTwoID = cardsChosenID[1] ;  //index of second

        if(optionOneID == optionTwoID) {
            cards[optionOneID].setAttribute('src', './resources/images/blank.png') ;
            cards[optionTwoID].setAttribute('src', './resources/images/blank.png') ;
            alert("You have clicked the same image!") ;
        }

        else if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match') ;

            cards[optionOneID].removeEventListener('click', flipCard)
            cards[optionTwoID].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen) ;
        }
        else{
            cards[optionOneID].setAttribute('src', './resources/images/blank.png') ;
            cards[optionTwoID].setAttribute('src', './resources/images/blank.png') ;
            alert("Sorry try again") ;
        }   

        cardsChosen = [] ;
        cardsChosenID = [] ;
        resultDisplay.textContent = cardsWon.lenth ;

        if (cardsWon.lenth === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all !'
        }

    }



    
    // flip your card
    function flipCard(){
        let cardID = this.getAttribute('data-id') ; // position i.e the index in the grid
        cardsChosen.push(cardArray[cardID].name) ;
        // console.log(`${cardArray[cardID].name}, \n cardID = ${cardID}`) ;
        cardsChosenID.push(cardID) ;

        this.setAttribute('src', cardArray[cardID].img) ;

        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500) 
        }
    }
    
    createBoard() ;
})