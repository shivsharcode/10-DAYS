// ASYNC-AWAIT

async function hello(){
    console.log("Hello") ;
}

function api(){
    return new Promise( (resolve, reject)=>{
        console.log("weathe")
    } )
}