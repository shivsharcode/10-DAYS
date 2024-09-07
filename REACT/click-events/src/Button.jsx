

function Button(){

    let count = 0;

    const handleClick = (name)=>{
        if(count < 3){
            count++ ;
            console.log(`${name} you have clicked me ${count} time/s`);
        }
        else{
            handleClick2(name) ;
        }
    }

    const handleClick2 = (name) =>{
        console.log(`hey ${name} stop clicking me Please !`)
    }

    return (
        <>
            <button onClick={ ()=>{handleClick("bro")} }>Click Me 🐧</button>
        </>
    )
}

export default Button