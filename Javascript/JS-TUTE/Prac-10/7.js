// PROMISE CHAINING


function asyncFunc1(){
    return new Promise( (resolve, reject)=>{
        setTimeout(() => {
            console.log("some data 1") ;
            resolve("success") ;
        }, 4000);
    } );
}

function asyncFunc2(){
    return new Promise( (resolve, reject)=>{
        setTimeout(() => {
            console.log("data2") ;
            resolve("success") ;
        }, 4000);
    } )
}

console.log("fetching data 1....") ;
let p1 = asyncFunc1() ;

p1.then( (res)=>{   // res is the return from resolve
    console.log(res) ;

    console.log("fetching data 2......") ;
    let p2 = asyncFunc2() ;
    p2.then( (res)=>{   // res is the return from resolve
        console.log(res) ;
    } ) ;

} ) ;





/*
console.log("fetching data 1....") ;
asyncFunc1().then( (res)=>{   // res is the return from resolve
    console.log(res) ;

    console.log("fetching data 2......") ;
    asyncFunc2().then( (res)=>{   // res is the return from resolve
        console.log(res) ;
    } ) ;

} ) ;
*/




