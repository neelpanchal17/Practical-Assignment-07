import { Link } from 'react-router-dom'
import { Component } from 'react/cjs/react.production.min';
const Order = () => {
    return (
        <div>
            <h1 style={{color:"green",textAlign:"center"}}>Thanks For The Purchase</h1>  
            <center><b><p>Your Order has been ordered and we will serve you soon.</p></b></center>
            <center><Link to="/">Back To Cart For Add More Item</Link></center>
        </div>
    )
}
export default Order;
