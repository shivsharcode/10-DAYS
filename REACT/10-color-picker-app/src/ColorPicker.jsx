import { useState } from "react"


function ColorPicker(){

    const [color, setColor] = useState("#f823f3") ;

    const handleColorChange = (e)=>{
        let value = e.target.value ;
        setColor(value) ;
    }

    return (
        <>
            <div className="color-picker-container">
                <h1>Color Picker</h1>
                <div className="color-display" style={ {backgroundColor: color} }>
                <p >Selected Color : {color}</p>
                </div>
                <p >Selected Color : {color}</p>

                <div className="color-selector">
                <label htmlFor="">Select a Color : </label>
                <input type="color" value={color} onChange={handleColorChange}/>
                </div>
                
            </div>
        </>
    )
}

export default ColorPicker