// Create an array to store companies -> "Bloomberg" , "Microsoft", "Uber", "Google", "IBM", "Netflix" 

let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'] ;
console.log(companies) ;

// Remove first company from the array

companies.shift() ;
console.log(companies) ;

// Remove Uber & Add Ola in its Place

companies.splice(1, 1, 'Ola') ;
console.log(companies) ;

// Add Amazon at the end

companies.push("Amazon") ;
console.log(companies) ;