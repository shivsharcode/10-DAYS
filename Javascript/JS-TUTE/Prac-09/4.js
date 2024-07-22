//Single-level INHERITANCE

class Animal{
    eat(){
        console.log("Animal is eating") ;
    }
}

class Dog extends Animal{
    bark(){
        console.log("Dog is barking") ;
    }
}

let dog = new Dog() ;

dog.eat() ;
dog.bark() ;