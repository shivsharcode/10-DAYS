//                      PRIMITIVE  DATATYPES

//number
let age = 20 ;
let wt = 62.5 ;

//string
let fullName = "Shiv Shar"

//Boolean
let isMale = true ;

//undefined
let x = undefined ;

//null
let y = null ;

//BigInt    --rare
let bignum = BigInt(12333) ;

// Symbol --rare
let symb = Symbol('🌡️')




console.log(typeof(age));
console.log(typeof(wt));
console.log(typeof(fullName));
console.log(typeof(isMale)) ;
console.log(typeof(x));
console.log(typeof(y));     // null is of object datatype, null is still counted as Primitive datatype even though it is shown as object bcoz null shows "Absence of object"

console.log(bignum) ;   //will print a 'n' after the number 
console.log(typeof(bignum)) ;

console.log(symb) ;     //will print like 'Symbol(<symbol-given>)'
console.log(typeof(symb));