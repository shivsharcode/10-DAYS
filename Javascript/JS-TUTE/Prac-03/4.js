
let str1 = "Shiv" ;
let str2 = "Sharma" ;

// Template Literal

let obj = {
    item: "pen" ,
    price: 10 ,
};

console.log(`The cost of ${obj.item} is ${obj.price} rupees`);



// escape character (\n)
console.log(`Shiv \n Shar`);

// \t       : tab
console.log(`Shiv\tShar`) ;

let str3 = "Shiv\tShar" ;
console.log(str3.length) ;  //  \t is counted as one character in the string length


console.log(`Shiv Shar`);