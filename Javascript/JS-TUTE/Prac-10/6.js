// PROMISE - .then() & .catch()

const getPromise = () =>{
    return new Promise( (resolve, reject)=>{
        console.log("I am a Promise") ;
        //resolve("success") ;
        reject('some error') ;
    } );
};

let promise1 = getPromise() ;
promise1.then( ()=>{
    console.log("promise fulfilled") ;
} )

promise1.catch( ()=>{
    console.log("promise rejected") ;
} )