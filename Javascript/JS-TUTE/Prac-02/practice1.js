// Get user to input a number using prompt("Enter a number : "). Check if the number is a multiple of 5 or not.

const num = Number(prompt("Enter a number : ")) ;

if(num % 5 === 0){
    console.log("Multiple of 5") ;
}
else{
    console.log("Not a Multiple of 5") ;
}