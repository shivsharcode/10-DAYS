// MULTI-LEVEL-INHERITANCE

class Animal{
    eat(doggy){
        console.log(`${doggy} is eating`) ;
    }

    sleep(doggy){
        console.log(doggy ," is sleeping") ;
    }
}

class Dog extends Animal{
    bark(doggy){
        console.log(doggy, " is barking") ;
    }
}

class desiKutta extends Dog{
    color(doggy){
        console.log(doggy, " is colorful") ;
    }
};

let kalu = new desiKutta() ;

kalu.eat('kalu') ;
kalu.bark('kalu') ;
kalu.color('kalu') ;