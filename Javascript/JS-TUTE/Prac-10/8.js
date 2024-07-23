// ASYNC-AWAIT

async function hello(){
    console.log("Hello") ;
}

function api(){
    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            console.log("weather data") ;
            resolve(200) ; //200 represents success code
        } , 2000);
    } );
}

async function getWeatherData(){
    await api();    //1st call
    await api();    //2nd call
}

