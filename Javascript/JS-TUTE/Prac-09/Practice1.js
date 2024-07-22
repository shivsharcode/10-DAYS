/*
Your are creating a website for your college. Create a class User with 2 properties, name & email. 
It also has a method called viewData() that allows user to view website data.
*/

let DATA = "website Data" ;

class user{
    constructor(name, email){
        this.userName = name ;
        this.email = email ;
    }

    viewData(){
        console.log(DATA) ;
    }
}

let newUser = new user("Shiv", "shiv@email.com") ;
console.log("User \n", newUser) ;
newUser.viewData() ;


/*
Create a new class called Admin which inherit from User.
Add a new method called editData to Admin that allows it to edit website data.
*/

class admin extends user{

    constructor(name, email){
        super(name, email) ;
    }

    editData(){
        console.log("Editing Data") ;
        DATA = "some new datavalue"
    }
}

let supervisor = new admin('SK', "sk.admin@email.com" ) ;
console.log("Admin \n", supervisor) ;
supervisor.editData() ;
supervisor.viewData() ;