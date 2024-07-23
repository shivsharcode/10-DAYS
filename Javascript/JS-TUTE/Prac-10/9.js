// async-await example of getting data (5.js-promise chaining; 3.js - callback hell )

function getData(dataId) {
    console.log("fetching data ...") ;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : ", dataId);
            resolve("success");
        }, 5000);
    });
}

async function callgetData(){
    await getData(101) ;
    await getData(102) ;
    await getData(103) ;
    await getData(104) ;
    console.log("finished") ;
}

callgetData() ;