//objects

const student = {
    fullName : "Shiv Shar" ,
    age : 20 , 
    cgpa : 6.9 ,
    isPass : true ,
} ;


console.log(typeof(student)) ;

console.log(student['age']) ;
console.log(student.cgpa) ;


student.age = student.age + 1 ;

console.log(student.age);