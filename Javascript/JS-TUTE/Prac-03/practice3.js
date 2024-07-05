/* Prompt the user the enter their full Name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

eg. name = 'hellopal' ;
username = @hellopal8

*/

let fullName = prompt("Enter your Full Name : ") ;

let fullNameTrimmed = fullName.replaceAll(' ', '') ;


let username = '@' + fullNameTrimmed + fullNameTrimmed.length ;

console.log(username) ;