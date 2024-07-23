// CALLBACK 

function getData(dataId, getNextData, nextVal){

    setTimeout(() => {
        console.log(" data : ", dataId) ;
        if(getNextData){
            getNextData(nextVal) ;
        }
    }, 2000);
}

// pyramid of doom

getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4) ;
        }) ;
    }) ;
});


/*
getData(1, ()=>{
    console.log("getting data2.....") ;
    getData(2, ()=>{
        console.log("getting data3.....") ;
        getData(3, ()=>{
            console.log("getting data4.....") ;
            getData(4) ;
        }) ;
    }) ;
});
*/