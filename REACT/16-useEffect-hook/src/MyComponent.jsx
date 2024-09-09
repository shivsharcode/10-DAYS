import React , {useState, useEffect} from "react" ;

function MyComponent(){

    const [count, setCount] = useState(0) ;
    const [colorState, setColor] = useState("green") ;

    useEffect( ()=>{
        document.title = `Count : ${count}, ${colorState}` ;

    }, [count] ) ;
    

    function addCount(){
        setCount(c => c+ 1) ;
    }
    function subtractCount(){
        setCount(c => c- 1) ;
    }
    function changeColor(){
        setColor(c => c ==="green" ? "red" : "green") ;
    }

    return (
        <>
            <p style={ {color : colorState} }>Count: {count}</p>

            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change color</button>

        </>
    )
}

export default MyComponent