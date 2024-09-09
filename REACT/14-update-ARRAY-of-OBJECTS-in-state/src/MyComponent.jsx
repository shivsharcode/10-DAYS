import React, {useState} from "react";


function MyComponent(){

    const[cars, setCars] = useState( [] );
    const [carYear, setCarYear] = useState( new Date().getFullYear() )
    const [carMake, setCarMake] = useState("") ;
    const [carModel, setCarModel] = useState("") ;

    const handleAddCar = ()=>{
        const newCar =  {year: carYear,
                        make: carMake,
                        model: carModel
                        } ;

        setCars( c => [...c, newCar] ) ;

        setCarMake("");  // Clear the car make input
        setCarModel(""); // Clear the car model input

    }
    const handleRemoveCar = (index)=>{

        setCars( cars.filter( (_, idx) => idx !== index ) ) ;
    }
    const handleYearChange = (e)=>{
        let inputYear = e.target.value ;
        inputYear = parseInt(inputYear) ;
        setCarYear(inputYear)

        
    }
    const handleMakeChange = (e)=>{
        let value = e.target.value ;
        setCarMake(value) ;        
    }
    const handleModelChange = (e)=>{
        let value = e.target.value ;
        setCarModel(value) ;
    }


    return(
        <>
            <h2>List of Car Objects</h2>

            <ul>
                {cars.map( (car, index)=>  (
                            <div key={index} className="car-input-display"> 
                                <li> {car.year} - {car.make} - {car.model} </li>
                                <button className="removeCar" onClick={ ()=> handleRemoveCar(index) } >
                                    -
                                </button> 
                            </div> )
                        )
                }
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} id="yearInput"/> <br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make" id="makeInput" /> <br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model" id="modelInput" /> <br />

            <button type="submit" onClick={handleAddCar}> Add Car</button>
        </>
    )
}

export default MyComponent