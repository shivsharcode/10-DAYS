// .map

// Creates a new array with the results of some operation. The value its callback returns are used to form new array

// arr.map( callbackFnx(value, index, array) )

let nums = [77, 83, 92] ;

let newArr = nums.map( (val)=>{
    return val**2 ;
} ) ;


console.log(newArr) ;
