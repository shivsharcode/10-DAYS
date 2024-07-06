// FILTER

// Creates a new Array of elements that give true for a condition/filter .

let nums = [1,2,3,4,5,6,7,8] ;

let newArr = nums.filter( (val)=>{
    return !(val%2 === 0) ;
} ) ;

console.log(newArr) ;