// STRING METHODS

let str = "   Shiv shar    " ;

console.log(str);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim()) ;   //remove whitespaces from starting and ending of the string

// note : strings are immutable , therefore we've to reassign every time we want to update that



//  .slice(start, ?end) ;
let str1 = '0123456789';

console.log( str1.slice(2, 6) ) ; // ending non-inclusive therefore 2-5
console.log( str1.slice()) ;
console.log( str1.slice(4)) ;


//  string1.concat(string2) ;
let str2 = 'abcd' ;
// let result = str1 + str2 ;
let result = str1.concat(str2) ;
console.log(result) ;


// .replace(searchVal, newVal)      : to replace a value with new value (only the first value is replaced if there are any similar characters of searchVal)
let str3 = 'abcdcdcdcdcd' ;
console.log(str3.replace('cd', 'e')) ;

console.log(str3.replaceAll('cd', 'e'))



// .charAt(idx)

let str4 = 'I love JS' ;
console.log(str4.charAt(4)) ;