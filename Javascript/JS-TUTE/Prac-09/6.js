// HIERARCHIAL INHERITANCE

class Animal{
    eat(animal){
        console.log(animal, " is eating") ;
    }
}

class Dog extends Animal{
    bark(){
        console.log("Dog is barking") ;
    }
}

class Cat extends Animal{
    meow(){
        console.log("Cat is meowing") ;
    }
}

class Horse extends Animal{
    gallop(){
        console.log("Horse is galloping") ;
    }
}

let doggy = new Dog() ;
doggy.eat('doggy') ;

let kitty = new Cat() ;
kitty.eat('kitty') ;

let badal = new Horse() ;
badal.eat('badal') ;