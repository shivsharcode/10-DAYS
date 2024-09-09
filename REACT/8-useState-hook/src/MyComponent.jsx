import React, {useState} from 'react' ;

function MyComponent(){

    const [name, setName] = useState("Guest") ;
    const [age, setAge] = useState(0) ;
    const [isEmployed, setIsEmployed] = useState(false) ;

    const updateName = ()=>{
        let nameValue = document.getElementById('input-name').value ;
        setName(nameValue) ;
    }

    const updateAge = ()=>{
        let ageValue = document.getElementById('input-age').value ;
        ageValue = parseInt(ageValue) ;
        setAge(ageValue);
    }

    const incrementAge = ()=>{
        setAge(age + 1) ;
    }

    const toggleEmploymentStatus = () =>{
        setIsEmployed(!isEmployed) ;
    }

    const handleEmploymentChange = (e) =>{
        const value = e.target.value === "Yes" ;    // here is a comparision operator , if the rhs side is true i.e selectedValue is "YES" then value(lhs) gets "true" otherwise "false"
        setIsEmployed(value) ;
    }


    return(
        <div>
            <input type="text" placeholder='Name' id='input-name'/><br></br>
            <input type="number"  placeholder='Age' id='input-age'/><br />
            

            <label htmlFor="isEmployed-input">Are You Employed </label>
            <select name="isEmployed-input" id="isEmployed-input-id" onChange={handleEmploymentChange}>
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            
            <p>Name: {name}</p>
            <button onClick={updateName}>SetName</button>
            
            <p>Age : {age}</p>
            <button onClick={updateAge}>SetAge</button>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmploymentStatus}>Toggle Employement</button>
        </div>
    )
}

export default MyComponent