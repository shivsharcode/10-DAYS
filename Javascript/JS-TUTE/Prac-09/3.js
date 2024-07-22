// INHERITANCE -1

class Parent{
    hello(){
        console.log("hi bud") ;
    }
}

class Child extends Parent{
    constructor(){
        super() ;
        console.log("Child is created") ;
    }
}


let obj = new Child() ;