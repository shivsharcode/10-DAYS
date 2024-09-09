

function List(){

    const fruits = [{id: 1, name: "apple", calories:95},
                    {id: 2, name: "banana", calories: 105}, 
                    {id: 3, name: "orange", calories: 45},
                    {id: 4, name: "mango", calories: 215}, 
                    {id: 5, name: "strawberry", calories: 4}] ;
    
    //fruits.sort( (a,b) => a.name.localeCompare(b.name) ); //ALPHABETICAL
    //fruits.sort( (a,b) => b.name.localeCompare(a.name) ) ;  // REVERSE-ALPHABETICAL
    //fruits.sort( (a,b) => a.calories - b.calories ); //NUMERIC
    //fruits.sort( (a,b) =>  b.calories - a.calories ) ;   //REVERSE NUMERIC

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100) ;
    const higCalFruits = fruits.filter(fruit => fruit.calories >= 100);



    const listItems = fruits.map( fruit=> <li key={fruit.id}>
                                                {fruit.name}: &nbsp;
                                                <b>{fruit.calories}</b>
                                          </li> )

    return (
         <ol>{listItems}</ol>
    )
}

export default List 