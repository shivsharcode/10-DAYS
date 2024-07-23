// PROMISE - 2

function getData(dataId) {
    console.log("fetching data ...") ;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : ", dataId);
            resolve("success");
        }, 5000);
    });
}

// promise chain

getData(1)
    .then((res) => {
        return getData(2) ;
    })
    .then( (res)=>{
        return getData(3) ;
    } )
    .then( (res) =>{
        console.log(res) ;
    } )
;