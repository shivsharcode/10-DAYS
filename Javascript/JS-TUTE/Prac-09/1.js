const student = {
    fullName : "Shivam Sharma",
    age : 20 ,
    branch : "AIML" ,

    // method
    printAge: function(){
        console.log("age : ", this.age) ;
    }
}


const employee = {
    calTax(){
        console.log("Tax rate is 10%") ;
    },
};

const newEmployee = {
    salary : 40000 ,
    calcTax(){
        console.log("Tax rate is 20%") ;
    }
}


    const newEmployee1 = {
        salary : 40000 ,
    };
    const newEmployee2 = {
        salary : 40000 ,
    };
    const newEmployee3 = {
        salary : 40000 ,
    };
    const newEmployee4 = {
        salary : 40000 ,
    };



newEmployee.__proto__ = employee ;

newEmployee1.__proto__ = employee ;
newEmployee2.__proto__ = employee ;
newEmployee3.__proto__ = employee ;
newEmployee4.__proto__ = employee ;

