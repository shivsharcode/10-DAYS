// CLASSES


class ToyotaCar {

    constructor(brand, mileage){
        console.log("Creating new object") ;
        this.brandName = brand ;
        this.mileage = mileage ;
    }

    start(){
        console.log("Car started") ;
    }

    stop(){
        console.log("Car stopped") ;
    }


};

// creating a new object by using the class ToyotaCar

let fortuner = new ToyotaCar("FORTUNER", 20) ;
console.log(fortuner) ;

let elantra = new ToyotaCar() ;
console.log(elantra) ;