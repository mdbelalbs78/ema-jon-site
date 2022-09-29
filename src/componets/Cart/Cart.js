import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Order Summary in cart</h4>
            <p>Selected Itmes: {cart.length}</p>
            
        </div>
    );
};

export default Cart;