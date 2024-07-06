// We are given array of marks of students. Filter out the marks of students that score 90+ .

let marks = [97, 44, 23, 66, 90, 92, 12, 100] ;

let toppers = marks.filter( (val)=>{
    return val>90 ;
} )

// console.log(toppers) ;


/*2.Take a number n as input from user. 
    Create an array of numbers from 1 to n. 
    Use the reduce method to calculate sum of all numbers in the array. 
    Use the reduce method to calculate product of all numbers in the array. 
*/

// i)
let n = Number(prompt("Enter a Number : ")) ;


// ii)
let numbers = [] ;

for( let i=1; i<=n; i++ ){
    numbers.push(i) ;
}

console.log(numbers) ;

// iii)
let sum = numbers.reduce( (accumulator, val)=>{
    return accumulator + val ;
} ) ;

console.log(`Sum = ${sum}`) ; 

// iv)
let product = numbers.reduce( (accumulator, val)=>{
    return accumulator * val ;
} ) ;

console.log(`Product = ${product}`) ;



