import React, {useState} from 'react' ;

function MyComponent(){

    let [name, setName] = useState() ;

    const updateName = ()=>{
        name = "Shivam" ;
        console.log(name) ;
    }


    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>SetName</button>
        </div>
    )
}

export default MyComponent