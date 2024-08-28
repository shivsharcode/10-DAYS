const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies" ;
const BASE_URL2 ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@/latest/currencies";

const dropdowns = document.querySelectorAll('.dropdown select') ;
const btn = document.getElementById('btn') ;

const fromCurr = document.querySelector('.from select') ;
const toCurr = document.querySelector(".to select") ;

const msg = document.querySelector('.msg') ;

// here hum dono dropdowns ek select ko ek ek karke usme country code append karege
for (let select of dropdowns){
    for (currCode in countryList){  // countryList is the name of the object in the codes.js file

        let newOption = document.createElement("option") ;

        newOption.innerText = currCode ;
        newOption.value = currCode ;

        if(select.name === 'from' && currCode === 'USD'){
            newOption.selected = 'selected' ;
        }
        else if(select.name === 'to' & currCode === 'INR'){
            newOption.selected = 'selected' ;
        }


        select.append(newOption) ;
        //console.log(newOption.value) // currency code is newOptions value
    }

    // updating the flag on selecting the currency code
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target) ;    //mtlb new value change hone ke baad - targetVal ko parameter ke roop me bhejo
        
    })
}

// function to update flag - called in the above for loop when currency is changed by the user
const updateFlag = (element)=>{
    let currCode = element.value ;
    let countryCode = countryList[currCode] ;

    //console.log(currCode, " , ", countryCode) ;

    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png` ;

    let flag = element.parentElement.querySelector('img') ;
    flag.src = newSrc ;
}

// currency conversion process
const process = async (evt)=>{
    if(evt){
        evt.preventDefault() ;
    }

    let amount = document.querySelector('.amount input') ;
    let amtVal = amount.value ;

    if(amtVal === '' || amtVal<0) {
        amtVal = 0 ;
        amount.value = 0 ;
    }
    console.log(amtVal) ;
    console.log(fromCurr.value, " ,", toCurr.value)

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json` ;

    let response = await fetch(URL) ;   //returns a promise
    let data = await response.json() ;  // promise to js object

    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()] ;
    let finalAmount = rate * amtVal ;

    console.log(finalAmount) ;

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}` ;
}

// when btn will be pressed -> currency-conversion will happen
btn.addEventListener("click", process) ;
process(null) ;