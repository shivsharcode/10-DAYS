// for a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// find the average marks of the entire class


let arr = [85, 97, 44, 37, 76, 60] ;
let sum = 0 ;
for(let num of arr){
    sum += num ;
}

let classAvgMarks = ( sum/ arr.length) ;

console.log(`Average Marks of Class = ${classAvgMarks}`) ;