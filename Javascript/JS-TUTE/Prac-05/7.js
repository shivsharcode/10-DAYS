// ARRAY METHOD - .reduce(result, value) =>{}

// Performs some operations & reduces the array to a single value. It retuns that single value

let arr = [1, 2, 3, 4] ;

const output = arr.reduce( (accumulator, val)=>{
    console.log(`accumulator = ${accumulator} , val = ${val}`) ;
    return accumulator + val ;
} ) ;

console.log(output) ;


// find the max val from array using .reduce()

let arr2 = [2, 8, 22, 9, 1] ;

const largest = arr2.reduce( (accumulator, val)=>{
    return accumulator>val ? accumulator : val ;
} )

console.log(largest) ;