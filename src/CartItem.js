import React from 'react';
class CartItems extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Mobile Phone",
            price: 999,
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = () => {
        console.log(this.state);
    }
    render() {
        const { title, price, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style= {{fontSize: 25}}>{title}</div>
                    <div style= {{color: '#777'}}>Rs {price}</div>
                    <div style= {{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1639925965~hmac=805c4a19abf2a1993f81ce43731cf5d1"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740679.png?token=exp=1639926031~hmac=a81c8424b31ff2e189d8a7356b251687"
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        />
                    </div>
                </div>
            </div>

        );
    }
}

const styles ={
    image: {
        height: 130,
        width: 130,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItems;