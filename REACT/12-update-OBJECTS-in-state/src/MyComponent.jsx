import React, {useState} from "react";

function MyComponent(){

    const [car, setCar] = useState({
                year: 2024, 
                make: "Ford", 
                model: "Mustang"
    }) ;

    const handleYearChange = (e)=>{
        let value = e.target.value ;
        value = parseInt(value) ;
        setCar( c=>   ( {...c, year: value})  );

    }
    const handleMakeChange = (e)=>{
        let value = e.target.value ;
        setCar( c=> ( {...c, make: value} )) ;
        
    }
    const handleModelChange = (e)=>{
        let value = e.target.value ;
        setCar( c=> ( {...c, model: value} ) ) ;
    }

    return (
        <div className="container">
            <p>Your favorite car is : {car.year}, {car.make}, {car.model} </p>
            <input type="number" value={car.year} onChange={handleYearChange} /> <br />
            <input type="text"  value={car.make} onChange={handleMakeChange}/><br />
            <input type="text"  value={car.model} onChange={handleModelChange}/><br />
        </div>
    )

}

export default MyComponent ;