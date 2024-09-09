import React, { useState } from "react"


function MyComponent(){
  const [foods, setFoods] = useState(["Roti", "Paneer", "Ghee", "Butter", "Papad"]) ;

  const handleAddFood = ()=>{
    const newFood = document.getElementById("foodInput").value ;

    document.getElementById("foodInput").value = ""

    setFoods( f => [...f, newFood] ) ;
    

  }

  const handleRemoveFood = (index)=>{

    setFoods(foods.filter( (_, idx) => idx !== index )) ;
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
            {foods.map( (food, index) => ( 
              <div className="foodItem-display">  
                <li key={index}> {food} </li> 
                <button className="removeFood" onClick={ ()=> handleRemoveFood(index) }>
                -
                </button> 
              </div> ))}
      </ul>

      <input type="text" id="foodInput" placeholder="Enter Food Item" />
      <button onClick={handleAddFood}>Add Food</button>

    </div>
  )
  
}

export default MyComponent