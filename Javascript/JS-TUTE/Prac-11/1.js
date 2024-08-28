console.log("connected")

const URL = "https://dogapi.dog/api/v2/facts?limit=2";

const factPara = document.querySelector("#fact1");
const btn = document.querySelector("#btn") ;


const getFacts = async()=>{
    console.log("getting data ..")
    let response = await fetch(URL);
    console.log(response);  //JSON

    let data = await response.json();
    //console.log(data.data[0].attributes.body);

    factPara.innerText = data.data[0].attributes.body ;
}

// BY PROMISECHAINING

function getFacts2(){
    fetch(URL).then( (response) =>{
        return response.json() ;
    } ).then( (data)=>{
        console.log(data) ;
        factPara.innerText = data.data[0].attributes.body ;
    } )
}


btn.addEventListener("click", getFacts2);