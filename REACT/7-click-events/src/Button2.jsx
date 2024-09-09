

function Button2(){

    const handleClick = (e) =>{ e.target.textContent = "OUCH! 🤕" ;}

    return (
        <>
            <button onDoubleClick={ (e)=>{handleClick(e)} }>Do Not Click Me 😀</button>
        </>
    )
}

export default Button2