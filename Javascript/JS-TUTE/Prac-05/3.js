
//  A callback is a function that is passed as an argument to another function

let arr = [1, 2, 3, 4, 5]

arr.forEach( function printVal(val){
    console.log(val) ;
})


let arr2 = ["pune", "mumbai", "delhi"] ;

arr2.forEach(function(val, idx, arrayItself){
    console.log(val.toUpperCase(), idx, arrayItself) ;
}) ;


// Higher Order Functions / Methods : Functions that uses other functions as parameters or returns them. Example - forEach
