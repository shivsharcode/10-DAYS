import Property1Img from "./assets/builder-floor.jpg"
function Card(){

    return(
        <div className="card">
            <img className="card-img" src={Property1Img} alt="PropertyImg" height="150px"  />
            <h2 className="card-title">Property-1</h2>
            <p className="card-text">Property in Noida</p>


        </div>
    );
}

export default Card