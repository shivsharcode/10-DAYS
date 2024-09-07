

function List2({items = [], category="Item-Category"}){

    const itemList = items ;
    const itemCategory = category ;

    const listItems = itemList.map( item=> <li key={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b>
                                          </li> )

    return (
        <>
            <h3 className="list-category-heading">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
         
    )
}

export default List2 ;