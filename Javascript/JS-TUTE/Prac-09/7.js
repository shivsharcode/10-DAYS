// SUPER

class Person{
    constructor(x){
        console.log("Entered Parent Constructor") ;
        this.species = "Homo sapiens" ;
        console.log("Exited Parent Constructor") ;  
    }

    eat(){
        console.log("eating") ;
    }
}

class Engineer extends Person{
    constructor(branch, name){
        console.log("Entered Child Constructor") ;
        super() ;//
        this.branch = branch ;
        console.log("Exited Child Constructor") ;
    }

    work(){
        console.log("Solves Problem, Develops something") ;
    }
}

let shiv = new Engineer("AI Engineer") ;
console.log(shiv) ;