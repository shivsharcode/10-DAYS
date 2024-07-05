// FOR-OF LOOP
let str = "JavaScript" ;

for (let i of str){
    console.log(i) ;
}


// FOR - IN LOOP

let student = {
    fullName : "Shiv Shar" ,
    age : 20 , 
    cgpa : 6.9 , 
    isPass : true ,
};

for (let key in student){
    console.log(`key = ${key}, value = ${student[key]}`) ;
}
