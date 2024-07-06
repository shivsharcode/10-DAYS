// For a given array of numbers, print the square of each value using the forEach loop.

let arr = [1, 3, 9, 2, 18] ;

arr.forEach(function(val){
    console.log(val**2) ;
})


// APPROACH - 2
console.log("Approach 2") ;

let calcSquare = (number) => {
    console.log(number * number) ;
} ;

arr.forEach(calcSquare) ;