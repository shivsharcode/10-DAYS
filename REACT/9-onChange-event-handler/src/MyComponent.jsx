

import React, {useState} from "react";


function MyComponent(){
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("") ;
    const [shipping, setShipping] = useState("Delivery")

    const handleNameChange = (e)=>{
        let value = e.target.value ;
        setName(value) ;
    }

    const handleQuantityChange = (e)=>{
        let value = e.target.value ;
        value = parseInt(value) ;
        setQuantity(value) ;
    }

    const handleCommentChange = (e)=>{
        let value = e.target.value ;
        setComment(value) ;
    }

    const handlePaymentMethod = (e) =>{
        let value = e.target.value ;
        setPaymentMethod(value) ;
    }

    const handleShippingChange = (e) =>{
        let value = e.target.value ;
        setShipping(value) ;
    }

    return (
      <>
        <div>
          <input type="text" value={name} onChange={handleNameChange}/>
          <p className="name-display">Name : {name}</p>

          <input type="number" value={quantity} onChange={handleQuantityChange} placeholder="Quantity" />
          <p className="quantity-display">Quantiy : {quantity}</p>


          <textarea  value={comment} onChange={handleCommentChange} placeholder="Enter Delivery Instructions here"/>
          <p className="comment-display">Your Comment : {comment}</p>

          <label htmlFor="payment-method-id">Select Payment Method : </label>
          <select value={paymentMethod} name="payment-method" id="payment-method-id" onChange={handlePaymentMethod}>
            <option value="COD">Cash On Delivery</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
          </select>

          <p className="payment-display">Payment : {paymentMethod}</p>

          <label htmlFor="pick-up-input">Pick Up : </label>
            <input type="radio" value="Pick Up"  id="pick-up-input"
                checked = {shipping === "Pick Up"}
                onChange={handleShippingChange}
            />
            <br />
          <label htmlFor="delivery-input">Delivery</label>
            <input type="radio" value="Delivery" id="delivery-input"
                checked = {shipping === "Delivery"}
                onChange={handleShippingChange}
            />

            <p className="shipping-display">Shipping : {shipping}</p>
        </div>
      </>
    )

}

export default MyComponent