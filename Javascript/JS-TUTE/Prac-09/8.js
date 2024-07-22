// SUPER - passing argument in super 

class Person{
    constructor(name){
        this.species = "Homo sapiens" ;
        this.Name = name ;
    }

    eat(){
        console.log("eating") ;
    }
}

class Engineer extends Person{
    constructor(branch, name){
        super(name) ;//
        this.branch = branch ;
    }

    work(){
        super.eat() ;
        console.log("Solves Problem, Develops something") ;
    }
}

let shiv = new Engineer("AI Engineer", "shivam") ;
console.log(shiv) ;
shiv.work() ;