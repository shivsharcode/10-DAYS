// ARRAY METHODS

// 1. Push()        : add to end  -            - mutates the array
// 2. Pop()         : delete from end & return - mutates the array
// 3. toString()    : converts array to string - returns a new string


let veggies = ["potato", "capsicum", "onion", "okra", "beans"]

console.log(veggies) ;

veggies.push("pumpkin") ;
console.log(veggies)

veggies.pop()
console.log(veggies) ;

console.log(veggies.toString()) ;
console.log(veggies)


// 4. array1.concat(array2)  : joins multiple arrays and returns the result

let marvelHeroes = ["thor", 'spiderman', 'ironman'] ;
let dcHeroes =  ['superman', 'batman', 'flash'] ;
let indianHeroes = ['shaktimaan', 'krish', 'hanu-man'] ;

let heroes = marvelHeroes.concat(dcHeroes, indianHeroes) ;

console.log(heroes) ;



// 5. .unshift() : adds to the starting

marvelHeroes.unshift("Antman") ;
console.log(marvelHeroes) ;

// 6.  .shift()   : deletes from starting of array
marvelHeroes.shift() ;
console.log(marvelHeroes) ;


// 7. slice(starting, ?ending)   -   returns a piece of array    - do not mutates the original array
console.log(heroes) ;
let slicedMH = heroes.slice(2, 6) ;
console.log(slicedMH) ;


// 8. splice(startIdx, delCount, newElements1, ..)   -    changes the original array (add, remove, replace)

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] ;
console.log(arr) ;
arr.splice(2, 2, 101, 102, 103) ;
console.log(arr) ;

// just remove

arr.splice(2, 3) ;
console.log(arr) ;

// just add
arr.splice(2, 0, 100) ;
console.log(arr) ;

// replace
arr.splice(3, 1, 101) ;
console.log(arr) ;

// only 1 index
arr.splice(5) ;
console.log(arr) ;