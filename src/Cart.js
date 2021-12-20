import React from 'react';
import CartItem from './CartItem';
const Cart = (props) => {
    
    const {products} = props;
    return (
        <div className="cart">
            {products.map((product) => {
                return (
                    <CartItem 
                        product={product}
                        key={product.id}
                        OnclickIncrease = {props.OnclickIncrease}
                        OnclickDecrease = {props.OnclickDecrease}
                        OnDeleteQuantity = {props.OnDeleteQuantity}
                    />
                )
                
            })}
        </div>
    );
        
    
}



export default Cart;